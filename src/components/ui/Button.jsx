import "./Button.css";

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) {
  const classes = `btn btn--${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
