import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks, companyInfo } from "../../data/config";
import Button from "../ui/Button";
import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className={`header__bar ${isScrolled ? "header--scrolled" : ""}`}>
        <div className="container header__inner">
          <a href="#inicio" className="header__logo" onClick={() => setIsMenuOpen(false)}>
            {companyInfo.name}
          </a>

          <nav className="header__nav header__nav--desktop" aria-label="Navegación principal">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__cta">
            <Button href="#contacto" variant="primary">
              Contáctanos
            </Button>
          </div>

          <button
            type="button"
            className="header__toggle"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      <div className={`header__mobile-menu ${isMenuOpen ? "is-open" : ""}`}>
        <nav aria-label="Navegación móvil">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button href="#contacto" variant="primary" onClick={() => setIsMenuOpen(false)}>
          Contáctanos
        </Button>
      </div>
    </header>
  );
}
