import CheckList from "../components/ui/CheckList";
import CtaBand from "../components/ui/CtaBand";
import FadeIn from "../components/ui/FadeIn";
import IconTile from "../components/ui/IconTile";
import SectionTitle from "../components/ui/SectionTitle";
import { howWeWork, purpose, results, values } from "../data/content";
import teamImage from "../assets/equipo-indicadores.jpg";
import documentsImage from "../assets/documentos.jpg";
import laptopImage from "../assets/portatil-datos.jpg";
import meetingImage from "../assets/reunion-cliente.jpg";
import patternLight from "../assets/patron-claro.jpg";
import "./About.css";

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero__inner">
          <div className="about-hero__text">
            <p className="eyebrow">Quiénes somos</p>
            <h1>Nacimos para cerrar la brecha entre invertir en tecnología y ver resultados</h1>
            <div className="about-hero__body">
              <p>Muchas empresas invierten en tecnología y no logran transformarse.</p>
              <p>
                Migran de aplicación y actualizan plataformas, pero sus procesos no muestran el
                resultado esperado.
              </p>
              <p>Transforma nace para cerrar esa brecha entre la inversión tecnológica y el resultado operativo.</p>
              <p className="about-hero__strong">
                Acompañamos a nuestros clientes a construir empresas más productivas, mejor
                gobernadas y preparadas para competir.
              </p>
            </div>
          </div>
          <div className="about-hero__collage">
            <img src={teamImage} alt="Equipo en reunión de trabajo" width="400" height="480" />
            <img src={documentsImage} alt="Planeación de trabajo en tablero" width="260" height="233" loading="lazy" />
            <img src={laptopImage} alt="Trabajo con datos en portátil" width="260" height="233" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-how">
          <div>
            <SectionTitle
              align="left"
              title="Trabajamos dentro de su operación, no desde afuera"
              description="Integramos tecnología, procesos y personas para mejorar la operación, usando al máximo lo que el sistema ofrece."
            />
            <CheckList items={howWeWork} />
          </div>
          <img
            className="photo about-how__photo"
            src={meetingImage}
            alt="Consultores de Transforma con un cliente"
            width="500"
            height="440"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle title="Resultados que su equipo puede ver" />
          <div className="about-results">
            {results.map((result, index) => (
              <FadeIn key={result.title} delay={index * 80} className="about-result">
                <IconTile icon={result.icon} />
                <h3>{result.title}</h3>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-purpose">
          <img className="about-purpose__img" src={patternLight} alt="" loading="lazy" />
          <div className="about-purpose__text">
            <p className="eyebrow">PROPÓSITO SUPERIOR</p>
            <p>{purpose}</p>
          </div>
        </div>
      </section>

      <section className="section about-values-section">
        <div className="container">
          <SectionTitle title="Nuestros valores" />
          <ul className="about-values">
            {values.map((value) => (
              <li key={value.title} className="about-value">
                <IconTile icon={value.icon} tone="navy" size="lg" />
                <h3>{value.title}</h3>
                {value.text && <p>{value.text}</p>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Conversemos sobre su operación"
        text="Un consultor de Transforma le ayuda a identificar por dónde empezar."
      />
    </>
  );
}
