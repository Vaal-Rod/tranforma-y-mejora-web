import "./IconTile.css";

// Cuadro redondeado con ícono. tone: tint | navy | white | green · size: sm | md | lg
export default function IconTile({ icon: Icon, tone = "tint", size = "md", className = "" }) {
  const iconSize = { sm: 20, md: 26, lg: 28 }[size];
  return (
    <span className={`icon-tile icon-tile--${tone} icon-tile--${size} ${className}`.trim()} aria-hidden="true">
      <Icon size={iconSize} />
    </span>
  );
}
