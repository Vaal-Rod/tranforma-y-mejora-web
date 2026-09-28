import { HiOutlineArrowRight } from "react-icons/hi";
import Button from "./Button";
import { diagnosticOffer, routes } from "../../data/config";
import "./CtaBand.css";

// Banda verde de cierre de página que lleva al formulario de diagnóstico.
export default function CtaBand({ title, text }) {
  return (
    <section className="cta-band">
      <div className="container">
        <div className="cta-band__box">
          <div className="cta-band__text">
            <h2>{title}</h2>
            {text && <p>{text}</p>}
          </div>
          <Button href={routes.contacto} variant="dark" className="btn--block-mobile">
            {diagnosticOffer.cta} <HiOutlineArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
