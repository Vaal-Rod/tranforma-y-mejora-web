// Datos de contacto y navegación centralizados.
// Contenido de demostración para TecnologiaTest SAS (proyecto de práctica/demo).

export const companyInfo = {
  name: "TecnologiaTest SAS",
  city: "Bogotá D.C., Colombia",
  country: "Colombia",
};

export const contactInfo = {
  email: "contacto@tecnologiatest.com",
  phone: "+57 601 745 3210",
  address: "Bogotá D.C., Colombia",
};

export const socialLinks = [
  { label: "LinkedIn", url: "#" },
  { label: "Instagram", url: "#" },
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
