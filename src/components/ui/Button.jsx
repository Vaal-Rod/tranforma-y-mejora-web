import "./Button.css";

// variant: primary | dark | outline | outline-light | link · size: md | sm
export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  type = "button",
  onClick,
  className = "",
  disabled = false,
  ...rest
}) {
  const classes = `btn btn--${variant} ${size === "sm" ? "btn--sm" : ""} ${className}`
    .replace(/\s+/g, " ")
    .trim();

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
