import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Button from "../components/ui/Button";
import CheckList from "../components/ui/CheckList";
import CtaBand from "../components/ui/CtaBand";
import IconTile from "../components/ui/IconTile";
import SectionTitle from "../components/ui/SectionTitle";
import { diagnosticOffer, routes } from "../data/config";
import { oracleBenefits, oracleCycle, oracleQuotes, oracleRelated } from "../data/content";
import { serviceHref } from "../data/services";
import patternDark from "../assets/patron-oscuro.jpg";
import cloudImage from "../assets/tecnologia-nube.jpg";
import "./Oracle.css";

export default function Oracle() {
  return (
    <>
      <section className="section--dark oracle-hero">
        <img className="brand-pattern" src={patternDark} alt="" />
        <div className="container oracle-hero__inner">
          <a href={routes.servicios} className="oracle-hero__back">
            <HiOutlineArrowLeft size={16} /> Servicios / Oracle ERP Fusion
          </a>
          <h1>¿Su ERP está rindiendo lo que esperaba?</h1>
          <p className="lead">
            Aplicaciones obsoletas, procesos improductivos, labores manuales y procesos que no se
            conectan. Lo resolvemos con Oracle ERP Fusion.
          </p>
          <Button href={routes.contacto} className="oracle-hero__cta">
            {diagnosticOffer.cta} <HiOutlineArrowRight size={20} />
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle title="Lo acompañamos en todo el ciclo" />
          <ul className="oracle-cycle">
            {oracleCycle.map((item) => (
              <li key={item.title}>
                <IconTile icon={item.icon} tone="white" />
                <h3>{item.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section oracle-when">
        <div className="container">
          <SectionTitle title="¿Cuándo lo necesita?" />
          <div className="oracle-quotes">
            {oracleQuotes.map((quote) => (
              <blockquote key={quote}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M10 7H6a2 2 0 0 0-2 2v3h5v5H4" />
                  <path d="M20 7h-4a2 2 0 0 0-2 2v3h5v5h-5" />
                </svg>
                <p>«{quote}»</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container oracle-benefits">
          <div>
            <SectionTitle align="left" title="Menos tiempo de proyecto, más acompañamiento" />
            <CheckList items={oracleBenefits} />
          </div>
          <img
            className="photo oracle-benefits__photo"
            src={cloudImage}
            alt="Infraestructura tecnológica en la nube"
            width="520"
            height="380"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Cuando el ERP funciona, el negocio puede ir más lejos"
            description="Analítica, gobierno de datos, inteligencia artificial y mejora continua."
          />
          <ul className="oracle-related">
            {oracleRelated.map((item) => (
              <li key={item.label}>
                <a href={item.service ? serviceHref(item.service) : routes.temas}>
                  {item.label} <HiOutlineArrowRight size={16} />
                </a>
              </li>
            ))}
          </ul>
          {/* Fase II: cita de un cliente con nombre y cargo. */}
        </div>
      </section>

      <CtaBand title="Revisemos juntos cómo está funcionando su ERP" />
    </>
  );
}
