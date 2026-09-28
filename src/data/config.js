// Datos de la empresa y navegación centralizados.

export const companyInfo = {
  name: "Transforma",
  legalName: "Transforma SAS",
  tagline: "Mejora y tecnología",
  claim:
    "Transformar no es cambiar sistemas. Es cambiar la forma en que el negocio opera y crea valor para sus clientes.",
};

// Oferta principal que se repite en la barra superior, CTAs y formulario.
export const diagnosticOffer = {
  title: "Diagnóstico operativo gratuito",
  detail: "30 a 60 minutos con un consultor de Transforma.",
  cta: "Solicitar diagnóstico",
};

// URL de la política de tratamiento de datos personales (Ley 1581 de 2012).
// Mientras esté vacía, el texto se muestra sin enlace.
export const privacyPolicyUrl = "";

// Endpoint propio (FastAPI en Vercel Functions) que recibe los envíos del formulario de contacto.
export const contactApiUrl = "/api/contact";

// Rutas por hash: "#/servicios" → "servicios".
export const routes = {
  inicio: "#/",
  nosotros: "#/quienes-somos",
  servicios: "#/servicios",
  oracle: "#/servicios/oracle-erp-fusion",
  sectores: "#/sectores",
  temas: "#/temas-clave",
  contacto: "#/contacto",
};

export const navLinks = [
  { id: "nosotros", label: "Quiénes somos", href: routes.nosotros },
  { id: "servicios", label: "Servicios", href: routes.servicios, hasMenu: true },
  { id: "sectores", label: "Sectores", href: routes.sectores },
  { id: "temas", label: "Temas clave", href: routes.temas },
  { id: "contacto", label: "Contáctanos", href: routes.contacto },
];

export const roleOptions = [
  "Gerencia General",
  "Finanzas (CFO)",
  "Tecnología (CIO)",
  "Operaciones (COO)",
  "Otro",
];
