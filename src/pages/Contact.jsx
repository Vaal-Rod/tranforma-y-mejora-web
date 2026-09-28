import { HiOutlineArrowRight, HiOutlineCheck } from "react-icons/hi";
import Button from "../components/ui/Button";
import { privacyPolicyUrl, roleOptions } from "../data/config";
import { steps } from "../data/content";
import { useContactForm } from "../hooks/useContactForm";
import patternLight from "../assets/patron-claro.jpg";
import "./Contact.css";

export default function Contact() {
  const { form, status, handleChange, handleSubmit, reset } = useContactForm();

  const field = (name, label, props = {}) => (
    <div className="contact-field">
      <label htmlFor={`contacto-${name}`}>{label}</label>
      <input
        id={`contacto-${name}`}
        name={name}
        value={form[name]}
        onChange={handleChange}
        required
        {...props}
      />
    </div>
  );

  return (
    <section className="contact">
      <img className="contact__pattern" src={patternLight} alt="" />
      <div className="container contact__inner">
        <div className="contact__intro">
          <p className="eyebrow">Contáctanos</p>
          <h1>Solicite su diagnóstico operativo gratuito</h1>
          <p className="lead">
            Una conversación de 30 a 60 minutos con un consultor para entender el principal reto de su
            operación.
          </p>
          <ol className="contact__steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span>{index + 1}</span>
                {step.title}
              </li>
            ))}
          </ol>
        </div>

        <div className="contact__card">
          {status === "success" ? (
            <div className="contact__done" role="status">
              <span className="contact__done-icon">
                <HiOutlineCheck size={36} strokeWidth={2.6} />
              </span>
              <h2>Recibimos su solicitud</h2>
              <p>Un consultor de Transforma le escribirá con opciones de agenda para su diagnóstico.</p>
              <Button variant="outline" onClick={reset}>
                Enviar otra solicitud
              </Button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__row">
                {field("name", "Nombre", { type: "text", autoComplete: "name" })}
                {field("company", "Empresa", { type: "text", autoComplete: "organization" })}
                <div className="contact-field">
                  <label htmlFor="contacto-role">Cargo</label>
                  <select id="contacto-role" name="role" value={form.role} onChange={handleChange} required>
                    {roleOptions.map((role) => (
                      <option key={role}>{role}</option>
                    ))}
                  </select>
                </div>
                {field("email", "Correo corporativo", {
                  type: "email",
                  autoComplete: "email",
                  placeholder: "nombre@empresa.com",
                })}
              </div>
              {field("phone", "Teléfono", { type: "tel", autoComplete: "tel", placeholder: "+57" })}
              <div className="contact-field">
                <label htmlFor="contacto-message">¿Cuál es el principal reto de su operación hoy?</label>
                <textarea
                  id="contacto-message"
                  name="message"
                  rows={4}
                  required
                  maxLength={5000}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <div className="contact__consent">
                <input
                  id="contacto-consent"
                  name="consent"
                  type="checkbox"
                  required
                  checked={form.consent}
                  onChange={handleChange}
                />
                <label htmlFor="contacto-consent">
                  Autorizo el tratamiento de mis datos personales (Ley 1581 de 2012).{" "}
                  {privacyPolicyUrl ? (
                    <a href={privacyPolicyUrl} target="_blank" rel="noreferrer">
                      Ver política de tratamiento de datos.
                    </a>
                  ) : (
                    "Ver política de tratamiento de datos."
                  )}
                </label>
              </div>

              <Button type="submit" className="contact__submit" disabled={status === "sending"}>
                {status === "sending" ? "Enviando…" : "Enviar solicitud"}
                <HiOutlineArrowRight size={20} />
              </Button>

              {status === "error" && (
                <p className="contact__error" role="alert">
                  No pudimos enviar su solicitud. Por favor, inténtelo de nuevo en unos minutos.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
