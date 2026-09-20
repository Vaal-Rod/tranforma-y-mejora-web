import { navLinks, companyInfo, contactInfo, socialLinks } from "../../data/config";
import { services } from "../../data/services";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="footer__logo">{companyInfo.name}</p>
          <p className="footer__tagline">
            Consultoría informática, procesamiento de datos y servicios de tecnologías de la
            información.
          </p>
          <p className="footer__city">{companyInfo.city}</p>
        </div>

        <div className="footer__col">
          <h3>Navegación</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Servicios</h3>
          <ul>
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3>Contacto</h3>
          <ul>
            <li>{contactInfo.email}</li>
            <li>{contactInfo.phone}</li>
            <li>{contactInfo.address}</li>
          </ul>

          {socialLinks.length > 0 && (
            <ul className="footer__socials">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a href={social.url} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {year} {companyInfo.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
