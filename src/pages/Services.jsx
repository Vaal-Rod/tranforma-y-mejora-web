import { useEffect, useRef, useState } from "react";
import { HiOutlineArrowRight, HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import Button from "../components/ui/Button";
import IconTile from "../components/ui/IconTile";
import PageHero from "../components/ui/PageHero";
import { routes } from "../data/config";
import { services } from "../data/services";
import patternDark from "../assets/patron-oscuro.jpg";
import "./Services.css";

const [featured, ...others] = services;

// openId: servicio que llega abierto desde el menú (#/servicios/analitica).
export default function Services({ openId }) {
  const [open, setOpen] = useState(openId ?? null);
  const openCardRef = useRef(null);

  useEffect(() => {
    if (openId) openCardRef.current?.scrollIntoView({ block: "center" });
  }, [openId]);

  const toggle = (id) => setOpen((current) => (current === id ? null : id));

  return (
    <>
      <PageHero eyebrow="Servicios" title="Soluciones para que su operación funcione mejor">
        Integramos tecnología, procesos y personas: cada solución parte de su operación y termina en
        resultados medibles.
      </PageHero>

      <section className="services-list">
        <div className="container">
          <article className="service-featured">
            <img className="brand-pattern" src={patternDark} alt="" />
            <div className="service-featured__head">
              <IconTile icon={featured.icon} tone="green" size="lg" />
              <div>
                <p className="service-featured__meta">
                  <span>{featured.name}</span>
                  <span className="service-featured__badge">Servicio prioritario</span>
                </p>
                <h2>{featured.title}</h2>
              </div>
            </div>
            <p className="service-featured__text">{featured.description}</p>
            <Button href={routes.oracle} size="sm" className="service-featured__cta">
              Conocer más <HiOutlineArrowRight size={18} />
            </Button>
          </article>

          <div className="services-grid">
            {others.map((service) => {
              const isOpen = open === service.id;
              const panelId = `servicio-${service.id}`;
              return (
                <article
                  key={service.id}
                  className={`service-card ${isOpen ? "is-open" : ""}`}
                  ref={service.id === openId ? openCardRef : undefined}
                >
                  <IconTile icon={service.icon} />
                  <p className="service-card__name">{service.name}</p>
                  <h2 className="service-card__title">{service.title}</h2>
                  <p className="service-card__text" id={panelId} hidden={!isOpen}>
                    {service.description}
                  </p>
                  <button
                    type="button"
                    className="service-card__toggle"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(service.id)}
                  >
                    {isOpen ? "Ver menos" : "Ver más"}
                    {isOpen ? <HiOutlineMinus size={18} /> : <HiOutlinePlus size={18} />}
                    <span className="visually-hidden"> sobre {service.name}</span>
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
