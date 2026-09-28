import patternLight from "../../assets/patron-claro.jpg";
import "./PageHero.css";

// Encabezado de las páginas internas: fondo gris claro con el patrón de marca.
export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="page-hero">
      <img className="brand-pattern page-hero__pattern" src={patternLight} alt="" />
      <div className="container page-hero__inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children && <div className="lead page-hero__lead">{children}</div>}
      </div>
    </section>
  );
}
