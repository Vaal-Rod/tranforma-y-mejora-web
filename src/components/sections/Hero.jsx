import { HiOutlineArrowRight, HiOutlineBadgeCheck } from "react-icons/hi";
import Button from "../ui/Button";
import { companyInfo } from "../../data/config";
import { useContactForm } from "../../hooks/useContactForm";
import "./Hero.css";

export default function Hero() {
  const { form, status, handleChange, handleSubmit } = useContactForm();

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
              Ver más formas de contacto
            </Button>
          </div>

          <div className="hero__badge">
            <HiOutlineBadgeCheck size={22} />
            <span>+40 organizaciones ya confían en nosotros en Bogotá y Colombia</span>
          </div>
        </div>

        <div className="hero__card">
          <p className="eyebrow">Hablemos de tu proyecto</p>
          <h2 className="hero__card-title">Agenda una reunión</h2>
          <p className="hero__card-subtitle">
            Cuéntanos qué necesita tu organización y te contactamos a la brevedad.
          </p>

          <form className="contact__form hero__card-form" onSubmit={handleSubmit} noValidate>
            <div className="contact__field">
              <label htmlFor="hero-name">Nombre</label>
              <input
                id="hero-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="hero-email">Correo electrónico</label>
              <input
                id="hero-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="hero-message">¿En qué te podemos ayudar?</label>
              <textarea
                id="hero-message"
                name="message"
                rows={3}
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="contact__submit hero__card-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Enviando..." : "Solicitar información"}
            </Button>

            {status === "success" && (
              <p className="contact__feedback" role="status">
                Gracias, te contactaremos pronto.
              </p>
            )}

            {status === "error" && (
              <p className="contact__feedback contact__feedback--error" role="alert">
                Ocurrió un error al enviar tu mensaje. Inténtalo de nuevo.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
