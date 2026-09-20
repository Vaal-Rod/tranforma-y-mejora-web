import {
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineBadgeCheck,
  HiOutlineTrendingUp,
  HiOutlineAdjustments,
} from "react-icons/hi";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import "./WhyUs.css";

const reasons = [
  {
    icon: HiOutlineLightBulb,
    title: "Soluciones tecnológicas",
    description: "Enfoque práctico orientado a resolver los retos tecnológicos de tu empresa.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Innovación",
    description: "Impulsamos la adopción de tecnología como motor de mejora continua.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Orientación al cliente",
    description: "Trabajamos de la mano con cada organización para entender sus necesidades.",
  },
  {
    icon: HiOutlineBadgeCheck,
    title: "Profesionalismo",
    description: "Actuamos con rigor, ética y compromiso en cada proyecto.",
  },
  {
    icon: HiOutlineTrendingUp,
    title: "Transformación",
    description: "Acompañamos procesos de cambio que agregan valor real al negocio.",
  },
  {
    icon: HiOutlineAdjustments,
    title: "Adaptación",
    description: "Diseñamos soluciones a la medida de cada organización y su contexto.",
  },
];

export default function WhyUs() {
  return (
    <section className="section why-us">
      <div className="container">
        <SectionTitle
          eyebrow="¿Por qué Tranforma Y Mejora?"
          title="El aliado tecnológico que tu empresa necesita"
        />

        <div className="why-us__grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <FadeIn key={reason.title} delay={index * 90} className="why-us__item">
                <div className="why-us__icon">
                  <Icon size={26} />
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
