import { useInViewFade } from "../../hooks/useInViewFade";

export default function FadeIn({ children, className = "", delay = 0 }) {
  const { ref, isVisible } = useInViewFade();

  return (
    <div
      ref={ref}
      className={`fade-in-up ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
