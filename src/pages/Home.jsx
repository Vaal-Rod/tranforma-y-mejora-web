import {
  HiOutlineArrowRight,
  HiOutlineCheck,
  HiOutlineViewGrid,
  HiOutlineRefresh,
  HiOutlineUserGroup,
} from "react-icons/hi";
import Button from "../components/ui/Button";
import CtaBand from "../components/ui/CtaBand";
import FadeIn from "../components/ui/FadeIn";
import IconTile from "../components/ui/IconTile";
import SectionTitle from "../components/ui/SectionTitle";
import { companyInfo, diagnosticOffer, routes } from "../data/config";
import { reasons, steps } from "../data/content";
import heroImage from "../assets/hero-consultores.jpg";
import meetingImage from "../assets/reunion-cliente.jpg";
import patternDark from "../assets/patron-oscuro.jpg";
import "./Home.css";

const pillars = [
  { icon: HiOutlineViewGrid, label: "Tecnología" },
  { icon: HiOutlineRefresh, label: "Procesos" },
  { icon: HiOutlineUserGroup, label: "Personas" },
];

const [claimStart, claimEnd] = companyInfo.claim.split(". ");

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__inner">
          <div className="home-hero__text">
            <span className="home-hero__tag">MEJORA Y TECNOLOGÍA</span>
            <h1>
              Convertimos la inversión tecnológica en <em>evolución operativa</em> con resultados.
            </h1>
            <p className="lead">
              Somos el aliado que integra tecnología, procesos y personas para que su operación
              funcione mejor, no solo para instalar un sistema.
            </p>
            <div className="home-hero__actions">
              <Button href={routes.contacto}>
                {diagnosticOffer.cta} <HiOutlineArrowRight size={20} />
              </Button>
              <Button href={routes.servicios} variant="outline">
                Conocer servicios
              </Button>
            </div>
          </div>

          <div className="home-hero__media">
            <img
              className="home-hero__photo"
              src={heroImage}
              alt="Consultores de Transforma revisando información en una tableta"
              width="520"
              height="460"
              fetchPriority="high"
            />
            <div className="home-hero__card">
              <p className="home-hero__card-title">Integramos</p>
              {pillars.map((pillar) => (
                <p key={pillar.label} className="home-hero__pillar">
                  <IconTile icon={pillar.icon} size="sm" className="home-hero__pillar-icon" />
                  {pillar.label}
                </p>
              ))}
            </div>
            <p className="home-hero__badge">
              <HiOutlineCheck size={18} strokeWidth={2.6} />
              Especialistas en Oracle ERP Fusion
            </p>
          </div>
        </div>
      </section>

      <section className="section section--dark home-claim">
        <img className="brand-pattern" src={patternDark} alt="" />
        <div className="container">
          <blockquote>
            <span>{claimStart}.</span> {claimEnd}
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Hablamos de su negocio antes que de tecnología"
            description="Las empresas nos eligen porque entendemos su operación y nos comprometemos con el servicio."
          />
          <div className="home-reasons">
            {reasons.map((reason, index) => (
              <FadeIn key={reason.title} delay={index * 90} className="home-reason">
                <IconTile icon={reason.icon} />
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container home-steps">
          <img
            className="photo home-steps__photo"
            src={meetingImage}
            alt="Reunión de trabajo con un cliente"
            loading="lazy"
            width="520"
            height="460"
          />
          <div>
            <SectionTitle align="left" title="Del diagnóstico a los resultados" description="Así empezamos a trabajar con su empresa." />
            <ol className="home-steps__list">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className="home-steps__num">{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CtaBand
        title="Empecemos por entender su operación"
        text="Solicite su diagnóstico operativo gratuito con un consultor de Transforma."
      />
    </>
  );
}
