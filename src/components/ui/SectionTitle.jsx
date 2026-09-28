import "./SectionTitle.css";

// Título de sección con la barra verde de marca. as: nivel del encabezado (h2 por defecto).
export default function SectionTitle({ title, description, align = "center", as: Tag = "h2" }) {
  return (
    <div className={`section-title section-title--${align}`}>
      <span className="section-title__bar" aria-hidden="true" />
      <Tag>{title}</Tag>
      {description && <p className="section-title__description">{description}</p>}
    </div>
  );
}
