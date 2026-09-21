import { useState } from "react";
import { contactApiUrl } from "../data/config";

const initialForm = { name: "", email: "", phone: "", message: "" };

export function useContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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

  return { form, status, handleChange, handleSubmit };
}
