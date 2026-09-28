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

export function useContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validación nativa del navegador (campos required, tipo email, casilla de autorización).
    if (!event.currentTarget.reportValidity()) return;

    setStatus("sending");
    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error(`La API respondió ${response.status}`);

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      console.error("Error al enviar el formulario de contacto:", error);
      setStatus("error");
    }
  };

  const reset = () => setStatus("idle");

  return { form, status, handleChange, handleSubmit, reset };
}
