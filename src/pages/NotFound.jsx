import { HiOutlineArrowRight } from "react-icons/hi";
import Button from "../components/ui/Button";
import { diagnosticOffer, navLinks, routes } from "../data/config";
import patternLight from "../assets/patron-claro.jpg";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found">
      <img className="brand-pattern not-found__pattern" src={patternLight} alt="" />
      <div className="container not-found__inner">
        <p className="not-found__code" aria-hidden="true">
          4<span>0</span>4
        </p>
        <h1>Esta página no está en nuestra ruta</h1>
        <p className="lead">Puede que el enlace haya cambiado o ya no exista.</p>
        <div className="not-found__actions">
          <Button href={routes.inicio} variant="dark">
            Volver al inicio
          </Button>
          <Button href={routes.contacto} variant="outline">
            {diagnosticOffer.cta} <HiOutlineArrowRight size={20} />
          </Button>
        </div>
        <nav aria-label="Páginas del sitio" className="not-found__links">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
