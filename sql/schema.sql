CREATE TABLE IF NOT EXISTS contact_submissions (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    company TEXT,
    role TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    consent BOOLEAN NOT NULL DEFAULT FALSE,
    consent_at TIMESTAMPTZ,
    submitted_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Migración para una base creada con la versión anterior de esta tabla
-- (ejecutar una vez; no borra datos existentes).
ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS company TEXT;
ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS role TEXT;
ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS consent BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS consent_at TIMESTAMPTZ;
