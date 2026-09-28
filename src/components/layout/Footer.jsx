import { HiOutlineArrowRight } from "react-icons/hi";
import { companyInfo, diagnosticOffer, navLinks, privacyPolicyUrl, routes } from "../../data/config";
import { services, serviceHref } from "../../data/services";
import Button from "../ui/Button";
import logoWhite from "../../assets/logo-blanco.png";
import patternDark from "../../assets/patron-oscuro.jpg";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <img className="footer__pattern" src={patternDark} alt="" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logoWhite} alt="Transforma" width="220" height="55" />
          <p>{companyInfo.claim}</p>
        </div>

        <nav className="footer__col" aria-label="Sitio">
          <h2>Sitio</h2>
          <ul>
            <li>
              <a href={routes.inicio}>Inicio</a>
            </li>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Servicios">
          <h2>Servicios</h2>
          <ul>
            {services.map((service) => (
              <li key={service.id}>
                <a href={serviceHref(service.id)}>{service.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col footer__talk">
          <h2>Hablemos</h2>
          <p>Cuéntenos el principal reto de su operación.</p>
          <Button href={routes.contacto} size="sm">
            {diagnosticOffer.cta} <HiOutlineArrowRight size={20} />
          </Button>
        </div>
      </div>

      <div className="container footer__legal">
        <span>
          © {year} {companyInfo.legalName} · {companyInfo.tagline}
        </span>
        {privacyPolicyUrl ? (
          <a href={privacyPolicyUrl}>Política de tratamiento de datos personales</a>
        ) : (
          <span>Política de tratamiento de datos personales</span>
        )}
      </div>
    </footer>
  );
}
