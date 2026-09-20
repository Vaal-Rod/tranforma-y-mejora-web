import { HiOutlineArrowRight } from "react-icons/hi";
import Button from "../ui/Button";
import { companyInfo } from "../../data/config";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />
      <div className="hero__glow hero__glow--three" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__layout">
        <div className="hero__content">
          <span className="eyebrow eyebrow--light">Consultoría & Tecnología</span>
          <h1 className="hero__title">{companyInfo.name}</h1>
          <p className="hero__subtitle">
            Impulsamos la transformación digital de tu empresa con soluciones tecnológicas,
            consultoría informática y procesamiento de datos.
          </p>
          <p className="hero__description">
            Somos una empresa colombiana dedicada a acompañar a las organizaciones en su camino
            hacia la innovación, con un enfoque profesional, confiable y orientado a resultados.
          </p>

          <div className="hero__actions">
            <Button href="#servicios" variant="primary">
              Conoce nuestros servicios <HiOutlineArrowRight />
            </Button>
            <Button href="#contacto" variant="secondary">
              Contáctanos
            </Button>
          </div>
        </div>

        <div className="hero__media">
          <img
            src="https://loremflickr.com/900/1000/technology,office,team/all?lock=101"
            alt="Equipo de trabajo colaborando frente a pantallas con datos y tecnología (imagen de referencia)"
            loading="eager"
            width="900"
            height="1000"
          />
        </div>
      </div>
    </section>
  );
}
