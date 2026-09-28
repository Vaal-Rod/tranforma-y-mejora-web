import { HiOutlineArrowRight } from "react-icons/hi";
import Button from "../ui/Button";
import { diagnosticOffer, routes } from "../../data/config";
import "./MobileCta.css";

// Botón fijo inferior en celulares; se oculta en Contacto para no duplicar la acción.
export default function MobileCta() {
  return (
    <div className="mobile-cta">
      <Button href={routes.contacto}>
        {diagnosticOffer.cta} <HiOutlineArrowRight size={20} />
      </Button>
    </div>
  );
}
