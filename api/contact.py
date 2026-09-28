import os
from datetime import datetime, timezone

import psycopg
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr, Field

app = FastAPI()


class ContactSubmission(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    company: str = Field(min_length=1, max_length=200)
    role: str = Field(min_length=1, max_length=100)
    email: EmailStr
    phone: str = Field(min_length=1, max_length=50)
    # Principal reto de la operación
    message: str = Field(min_length=1, max_length=5000)
    # Autorización de tratamiento de datos personales (Ley 1581 de 2012): debe ser True.
    consent: bool


def _save_submission(payload: ContactSubmission) -> None:
    database_url = os.environ.get("DATABASE_URL")
    if not database_url:
        raise HTTPException(status_code=500, detail="Base de datos no configurada")

    now = datetime.now(timezone.utc)
    try:
        with psycopg.connect(database_url) as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO contact_submissions
                        (name, company, role, email, phone, message, consent, consent_at, submitted_at)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
                    """,
                    (
                        payload.name,
                        payload.company,
                        payload.role,
                        payload.email,
                        payload.phone,
                        payload.message,
                        payload.consent,
                        now,
                        now,
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
    if not payload.consent:
        raise HTTPException(status_code=422, detail="Se requiere la autorización de tratamiento de datos")
    _save_submission(payload)
    return {"status": "ok"}
