import { useState } from "react";
import { contactApiUrl, roleOptions } from "../data/config";

// Los nombres de los campos coinciden con el modelo de api/contact.py.
const initialForm = {
  name: "",
  company: "",
  role: roleOptions[0],
  email: "",
  phone: "",
  message: "",
  consent: false,
};

const fieldLabels = {
  name: "Nombre",
  company: "Empresa",
  role: "Cargo",
  email: "Correo corporativo",
  phone: "Teléfono",
  message: "Principal reto de su operación",
  consent: "Autorización de tratamiento de datos",
};

// Convierte un 422 de FastAPI en un mensaje que diga qué campo corregir.
async function describeRejection(response) {
  try {
    const { detail } = await response.json();
    if (typeof detail === "string") return detail;
    const fields = [...new Set(detail.map((error) => error.loc?.at(-1)))].filter((f) => fieldLabels[f]);
    if (fields.includes("email")) {
      return "Revise el correo corporativo: no parece una dirección válida (ejemplo: nombre@empresa.com).";
    }
    if (fields.length) return `Revise estos campos: ${fields.map((f) => fieldLabels[f]).join(", ")}.`;
  } catch {
    // Respuesta sin JSON: se usa el mensaje genérico.
  }
  return null;
}

export function useContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validación nativa del navegador (campos required, tipo email, casilla de autorización).
    if (!event.currentTarget.reportValidity()) return;

    setStatus("sending");
    setErrorMessage(null);
    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.status === 422) {
        setErrorMessage(await describeRejection(response));
        setStatus("error");
        return;
      }
      if (!response.ok) throw new Error(`La API respondió ${response.status}`);

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      console.error("Error al enviar el formulario de contacto:", error);
      setStatus("error");
    }
  };

  const reset = () => setStatus("idle");

  return { form, status, errorMessage, handleChange, handleSubmit, reset };
}
