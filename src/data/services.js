import {
  HiOutlineViewGrid,
  HiOutlineTrendingUp,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineDatabase,
  HiOutlineChip,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineMap,
} from "react-icons/hi";

// Oracle ERP Fusion es el servicio prioritario y tiene página propia (ver pages/Oracle.jsx).
export const services = [
  {
    id: "oracle-erp-fusion",
    name: "Oracle ERP Fusion",
    title: "Su operación conectada en un solo ERP",
    description:
      "Implementamos, evolucionamos y damos soporte estratégico a Oracle ERP Fusion para reemplazar aplicaciones obsoletas, eliminar labores manuales y conectar sus procesos en una sola plataforma en la nube, con aceleradores propios que reducen los tiempos del proyecto.",
    icon: HiOutlineViewGrid,
    featured: true,
  },
  {
    id: "mejora-continua",
    name: "Mejora Continua",
    title: "Procesos más eficientes, con menos reprocesos",
    description:
      "Analizamos sus procesos críticos, eliminamos los reprocesos y medimos la mejora. Su operación gana eficiencia y su equipo gana tiempo para lo que genera valor.",
    icon: HiOutlineTrendingUp,
  },
  {
    id: "gestion-del-cambio",
    name: "Gestión del Cambio",
    title: "Adopción real del sistema por parte de las personas",
    description:
      "Acompañamos a las personas de su organización en cada proyecto de tecnología o de procesos, con comunicación, formación de usuarios y cultura, para que el cambio se sostenga en el día a día.",
    icon: HiOutlineUserGroup,
  },
  {
    id: "analitica",
    name: "Analítica",
    title: "Decisiones basadas en la información de sus sistemas",
    description:
      "Convertimos la información de Oracle Fusion y de sus demás sistemas en indicadores y tableros claros, para que cada área decida con datos.",
    icon: HiOutlineChartBar,
  },
  {
    id: "gobierno-de-datos",
    name: "Gobierno de Datos",
    title: "Datos confiables para decidir",
    description:
      "Definimos cómo se crean, cuidan y usan los datos de su empresa, para que la información sea consistente y confiable en todas las áreas.",
    icon: HiOutlineDatabase,
  },
  {
    id: "inteligencia-artificial",
    name: "Inteligencia Artificial",
    title: "Inteligencia artificial aplicada a su operación",
    description:
      "Definimos su estrategia de IA y la aplicamos a procesos concretos dentro de Oracle Fusion, con control y solo donde genera valor medible.",
    icon: HiOutlineChip,
  },
  {
    id: "automatizacion",
    name: "Automatización",
    title: "Más productividad con menos tareas manuales",
    description:
      "Automatizamos las tareas repetitivas de sus procesos de negocio y las conectamos con inteligencia artificial, para aumentar la productividad de sus equipos.",
    icon: HiOutlineLightningBolt,
  },
  {
    id: "seguridad",
    name: "Seguridad y Ciberseguridad",
    title: "Una operación protegida para crecer con tranquilidad",
    description:
      "Identificamos y controlamos los riesgos tecnológicos de su empresa con servicios de ciberseguridad y gobierno de TI, para que su operación crezca protegida.",
    icon: HiOutlineShieldCheck,
  },
  {
    id: "consultoria-estrategica",
    name: "Consultoría Estratégica",
    title: "Una ruta clara para su transformación",
    description:
      "Evaluamos la madurez operativa y tecnológica de su empresa y definimos una hoja de ruta con prioridades, para invertir primero donde hay mayor impacto.",
    icon: HiOutlineMap,
  },
];

export const serviceById = (id) => services.find((service) => service.id === id);

// Enlace de cada servicio: Oracle tiene página propia; el resto abre su tarjeta en Servicios.
export const serviceHref = (id) => `#/servicios/${id}`;
