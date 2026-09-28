import {
  HiOutlineCollection,
  HiOutlineChatAlt2,
  HiOutlineAdjustments,
  HiOutlineRefresh,
  HiOutlinePresentationChartLine,
  HiOutlineShieldCheck,
  HiOutlineDatabase,
  HiOutlineUserGroup,
  HiOutlineBadgeCheck,
  HiOutlineCursorClick,
  HiOutlineHeart,
  HiOutlineFire,
  HiOutlineLightBulb,
  HiOutlineOfficeBuilding,
  HiOutlineCube,
  HiOutlineShoppingBag,
  HiOutlineTruck,
  HiOutlineBeaker,
  HiOutlineViewGrid,
  HiOutlineTrendingUp,
} from "react-icons/hi";
import tecnologiaNube from "../assets/tecnologia-nube.jpg";
import portatilDatos from "../assets/portatil-datos.jpg";

const businessRoles = "CEO, CFO, COO, CIO, CDO, CISO, CMO, CHRO / CPO, CCO y CLO";

export const reasons = [
  { icon: HiOutlineCollection, title: "Visión integral", text: "Integramos tecnología, procesos y personas." },
  {
    icon: HiOutlineChatAlt2,
    title: "Lenguaje de negocio",
    text: `Hablamos el idioma del ${businessRoles}, no solo del área de TI.`,
  },
  { icon: HiOutlineAdjustments, title: "Ejecución con control", text: "Alcance, riesgos y adopción gestionados." },
  { icon: HiOutlineRefresh, title: "Acompañamiento continuo", text: "No desaparecemos después del go‑live." },
];

export const steps = [
  { title: "Diagnóstico operativo gratuito", text: "Una conversación de 30 a 60 minutos con un consultor." },
  { title: "Ruta de trabajo", text: "Prioridades claras según el impacto en su operación." },
  { title: "Ejecución con control", text: "Acompañamiento continuo hasta ver los resultados." },
];

export const howWeWork = [
  `Hablamos el idioma del ${businessRoles}, no solo del área de TI.`,
  "Conocemos la operación real.",
  "Ejecutamos con control: alcance, riesgos y adopción gestionados.",
  "Buscamos relaciones de largo plazo.",
];

export const results = [
  { icon: HiOutlinePresentationChartLine, title: "Operaciones más eficientes" },
  { icon: HiOutlineRefresh, title: "Menos reprocesos" },
  { icon: HiOutlineShieldCheck, title: "Riesgos tecnológicos controlados" },
  { icon: HiOutlineDatabase, title: "Datos confiables para decidir" },
  { icon: HiOutlineUserGroup, title: "Adopción real del sistema por parte de las personas" },
];

export const purpose =
  "Somos aliados estratégicos en la transformación tecnológica, agregando valor y acompañando a nuestros clientes en el cumplimiento de sus objetivos. Convertimos ideas en soluciones innovadoras, buscando la productividad, mejorando procesos y proyectando la evolución digital de los negocios.";

// TODO: completar la frase corta de cada valor cuando esté definida.
export const values = [
  { icon: HiOutlineBadgeCheck, title: "Disciplina", text: "" },
  { icon: HiOutlineCursorClick, title: "Orientación al resultado", text: "" },
  { icon: HiOutlineHeart, title: "Empatía", text: "" },
  { icon: HiOutlineFire, title: "Pasión", text: "" },
  { icon: HiOutlineLightBulb, title: "Innovación", text: "" },
];

// TODO: completar el reto típico de cada sector cuando esté definido.
export const sectors = [
  { icon: HiOutlineOfficeBuilding, name: "Manufactura", challenge: "", priority: true },
  { icon: HiOutlineCube, name: "Comercializadoras", challenge: "", priority: true },
  { icon: HiOutlineShoppingBag, name: "Retail", challenge: "" },
  { icon: HiOutlineTruck, name: "Logística", challenge: "" },
  { icon: HiOutlineBeaker, name: "Oil & Gas", challenge: "" },
];

// TODO: completar el resumen de cada artículo cuando esté definido.
export const topics = [
  {
    title: "Agentes Oracle: la IA ya llegó a su ERP. ¿Cómo usarla con control?",
    summary: "",
    image: tecnologiaNube,
    imageAlt: "Tecnología aplicada a procesos",
    tags: ["inteligencia-artificial", "automatizacion"],
  },
  {
    title: "Redwood: una nueva experiencia en Oracle Fusion. ¿Está su equipo listo?",
    summary: "",
    image: portatilDatos,
    imageAlt: "Persona trabajando en Oracle Fusion",
    tags: ["oracle-erp-fusion", "gestion-del-cambio"],
  },
];

export const oracleCycle = [
  { icon: HiOutlineViewGrid, title: "Implementación" },
  { icon: HiOutlineTrendingUp, title: "Evolución" },
  { icon: HiOutlineUserGroup, title: "Soporte estratégico" },
];

export const oracleQuotes = [
  "Queremos implementar o evolucionar Oracle ERP Fusion y llevarlo a la nube.",
  "Ya implementamos, pero no vemos los resultados esperados.",
];

export const oracleBenefits = [
  "Aceleradores y plantillas propias que reducen los tiempos del proyecto.",
  "Soporte estratégico, no solo mesa de ayuda.",
];

// Temas relacionados en la página de Oracle: servicio (id) o página de Temas clave.
export const oracleRelated = [
  { label: "Analítica", service: "analitica" },
  { label: "Gobierno de Datos", service: "gobierno-de-datos" },
  { label: "Inteligencia Artificial", service: "inteligencia-artificial" },
  { label: "Mejora Continua", service: "mejora-continua" },
  { label: "Agentes Oracle", topics: true },
  { label: "Redwood", topics: true },
];
