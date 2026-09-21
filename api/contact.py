import os
from datetime import datetime, timezone

import psycopg
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr, Field

app = FastAPI()


class ContactSubmission(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    email: EmailStr
    phone: str | None = None
    message: str = Field(min_length=1, max_length=5000)


def _save_submission(payload: ContactSubmission) -> None:
    database_url = os.environ.get("DATABASE_URL")
    if not database_url:
        raise HTTPException(status_code=500, detail="Base de datos no configurada")

    try:
        with psycopg.connect(database_url) as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO contact_submissions (name, email, phone, message, submitted_at)
                    VALUES (%s, %s, %s, %s, %s)
                    """,
                    (
                        payload.name,
                        payload.email,
                        payload.phone,
                        payload.message,
                        datetime.now(timezone.utc),
                    ),
                )
            conn.commit()
    except psycopg.Error as exc:
        raise HTTPException(status_code=500, detail="No se pudo guardar el mensaje") from exc


# Registrada en ambas rutas porque Vercel puede invocar este archivo
# como /api/contact o pasando la ruta raíz al ASGI app, según el entorno.
@app.post("/api/contact")
@app.post("/")
def submit_contact(payload: ContactSubmission):
    _save_submission(payload)
    return {"status": "ok"}
