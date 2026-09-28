import { HiOutlineArrowRight } from "react-icons/hi";
import CtaBand from "../components/ui/CtaBand";
import IconTile from "../components/ui/IconTile";
import PageHero from "../components/ui/PageHero";
import { routes } from "../data/config";
import { sectors } from "../data/content";
import "./Sectors.css";

export default function Sectors() {
  return (
    <>
      <PageHero eyebrow="Sectores" title="Conocemos cómo opera su industria">
        Trabajamos con empresas medianas y grandes de Colombia y Latinoamérica con operaciones
        complejas: producción, logística, varias empresas y varias monedas.
      </PageHero>

      <section className="sectors">
        <div className="container">
          <ul className="sectors__grid">
            {sectors.map((sector) => (
              <li key={sector.name} className="sector-card">
                <div className="sector-card__top">
                  <IconTile icon={sector.icon} tone="navy" size="lg" />
                  {sector.priority && <span className="sector-card__badge">Prioritario</span>}
                </div>
                <h2>{sector.name}</h2>
                {sector.challenge && <p>{sector.challenge}</p>}
                <a href={routes.servicios} className="sector-card__link">
                  Servicios que aplican <HiOutlineArrowRight size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Cuéntenos cómo opera su empresa" />
    </>
  );
}
