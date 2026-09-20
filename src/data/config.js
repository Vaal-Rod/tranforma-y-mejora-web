// Datos de contacto y navegación centralizados.
// Los campos marcados como [PLACEHOLDER] deben reemplazarse con la información oficial de la empresa.

export const companyInfo = {
  name: "Tranforma Y Mejora SAS",
  city: "Bogotá D.C., Colombia",
  country: "Colombia",
};

export const contactInfo = {
  email: "[PLACEHOLDER: correo@tranformaymejora.com]",
  phone: "[PLACEHOLDER: +57 XXX XXX XXXX]",
  address: "Bogotá D.C., Colombia",
};

// Se completará cuando la empresa proporcione sus enlaces oficiales.
export const socialLinks = [
  // { label: "LinkedIn", url: "[PLACEHOLDER]" },
  // { label: "Instagram", url: "[PLACEHOLDER]" },
];

// Webhook de n8n que recibe los envíos del formulario de contacto.
export const contactWebhookUrl =
  "https://val-16.app.n8n.cloud/webhook/cc3e9435-c3ac-47e9-b4c7-7225ff49922b";

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];
