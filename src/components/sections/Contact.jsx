import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import { contactInfo } from "../../data/config";
import { useContactForm } from "../../hooks/useContactForm";
import "./Contact.css";

export default function Contact() {
  const { form, status, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contacto" className="section contact">
      <div className="container contact__grid">
        <FadeIn className="contact__info">
          <SectionTitle
            align="left"
            eyebrow="Contacto"
            title="Hablemos sobre tu próximo proyecto"
            description="Escríbenos y con gusto te contactaremos para conversar sobre las necesidades tecnológicas de tu organización."
          />

          <ul className="contact__details">
            <li>
              <HiOutlineMail size={22} />
              <span>{contactInfo.email}</span>
            </li>
            <li>
              <HiOutlinePhone size={22} />
              <span>{contactInfo.phone}</span>
            </li>
            <li>
              <HiOutlineLocationMarker size={22} />
              <span>Bogotá D.C., Colombia</span>
            </li>
          </ul>
        </FadeIn>

        <FadeIn delay={150}>
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__field">
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="phone">Teléfono</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="contact__submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </Button>

            {status === "success" && (
              <p className="contact__feedback" role="status">
                Gracias por tu mensaje. Nos pondremos en contacto pronto.
              </p>
            )}

            {status === "error" && (
              <p className="contact__feedback contact__feedback--error" role="alert">
                Ocurrió un error al enviar tu mensaje. Por favor, inténtalo de nuevo.
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
