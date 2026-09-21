CREATE TABLE IF NOT EXISTS contact_submissions (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    submitted_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
