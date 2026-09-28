import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX, HiOutlineChevronDown, HiOutlineArrowRight } from "react-icons/hi";
import { navLinks, diagnosticOffer, routes } from "../../data/config";
import { services, serviceHref } from "../../data/services";
import Button from "../ui/Button";
import IconTile from "../ui/IconTile";
import logo from "../../assets/logo.png";
import patternDark from "../../assets/patron-oscuro.jpg";
import "./Header.css";

export default function Header({ active }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // menú móvil
  const [isServicesOpen, setIsServicesOpen] = useState(false); // megamenú de escritorio
  const headerRef = useRef(null);

  // Cerrar menús al navegar, con Escape o al hacer clic fuera del header.
  useEffect(() => {
    const closeAll = () => {
      setIsMenuOpen(false);
      setIsServicesOpen(false);
    };
    const onKeyDown = (event) => event.key === "Escape" && closeAll();
    const onPointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) setIsServicesOpen(false);
    };
    window.addEventListener("hashchange", closeAll);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("hashchange", closeAll);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="announce">
        <span className="announce__text">
          {diagnosticOffer.title}: {diagnosticOffer.detail.charAt(0).toLowerCase() + diagnosticOffer.detail.slice(1)}
        </span>
        <a href={routes.contacto} className="announce__link">
          {diagnosticOffer.cta} <HiOutlineArrowRight size={16} />
        </a>
      </div>

      <header className="header" ref={headerRef}>
        <div className="container header__inner">
          <a href={routes.inicio} className="header__logo" aria-label="Transforma, ir a inicio">
            <img src={logo} alt="Transforma, mejora y tecnología" width="176" height="44" />
          </a>

          <nav className="header__nav" aria-label="Principal">
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  {link.hasMenu ? (
                    <button
                      type="button"
                      className={`header__link ${active === link.id ? "is-active" : ""}`}
                      aria-expanded={isServicesOpen}
                      aria-controls="menu-servicios"
                      onClick={() => setIsServicesOpen((open) => !open)}
                    >
                      {link.label}
                      <HiOutlineChevronDown size={18} className={isServicesOpen ? "is-flipped" : ""} />
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className={`header__link ${active === link.id ? "is-active" : ""}`}
                      aria-current={active === link.id ? "page" : undefined}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <Button href={routes.contacto} size="sm" className="header__cta">
            {diagnosticOffer.cta} <HiOutlineArrowRight size={20} />
          </Button>

          <button
            type="button"
            className="header__toggle"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="menu-movil"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Megamenú de servicios (escritorio) */}
        {isServicesOpen && (
          <div className="mega" id="menu-servicios">
            <div className="container">
              <div className="mega__panel">
                <div className="mega__intro">
                  <img className="mega__pattern" src={patternDark} alt="" />
                  <p className="mega__title">Soluciones para que su operación funcione mejor</p>
                  <p className="mega__text">
                    Integramos tecnología, procesos y personas: cada solución parte de su operación y
                    termina en resultados medibles.
                  </p>
                  <a href={routes.servicios} className="mega__all">
                    Ver todos los servicios <HiOutlineArrowRight size={18} />
                  </a>
                </div>
                <ul className="mega__grid">
                  {services.map((service) => (
                    <li key={service.id}>
                      <a href={serviceHref(service.id)} className="mega__item">
                        <IconTile icon={service.icon} size="sm" />
                        <span>
                          <span className="mega__name">{service.name}</span>
                          <span className="mega__desc">{service.title}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Menú móvil */}
        <div className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`} id="menu-movil" hidden={!isMenuOpen}>
          <nav aria-label="Menú móvil">
            <a href={routes.inicio} className="mobile-menu__link">
              Inicio
            </a>
            {navLinks.map((link) =>
              link.hasMenu ? (
                <details key={link.id} className="mobile-menu__group">
                  <summary className="mobile-menu__link">
                    {link.label} <HiOutlineChevronDown size={20} />
                  </summary>
                  <ul className="mobile-menu__sub">
                    <li>
                      <a href={routes.servicios}>Ver todos los servicios</a>
                    </li>
                    {services.map((service) => (
                      <li key={service.id}>
                        <a href={serviceHref(service.id)}>
                          <IconTile icon={service.icon} size="sm" />
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a key={link.id} href={link.href} className="mobile-menu__link">
                  {link.label}
                </a>
              ),
            )}
          </nav>
          <Button href={routes.contacto} className="mobile-menu__cta">
            {diagnosticOffer.cta} <HiOutlineArrowRight size={20} />
          </Button>
        </div>
      </header>
    </>
  );
}
