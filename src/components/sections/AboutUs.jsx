import { HiOutlineLocationMarker, HiOutlineOfficeBuilding } from "react-icons/hi";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section id="nosotros" className="section about">
      <div className="container about__grid">
        <FadeIn className="about__text">
          <SectionTitle
            align="left"
            eyebrow="Quiénes somos"
            title="Una empresa colombiana comprometida con la tecnología"
          />
          <p>
            <strong>Tranforma Y Mejora SAS</strong> es una empresa colombiana establecida en{" "}
            <strong>Bogotá D.C.</strong>, dedicada a la consultoría informática, el
            procesamiento de datos y los servicios de tecnologías de la información.
          </p>
          <p>
            Acompañamos a las organizaciones en sus procesos de transformación tecnológica,
            ofreciendo un servicio profesional, confiable e innovador, adaptado a las
            necesidades particulares de cada cliente.
          </p>

          <div className="about__meta">
            <div className="about__meta-item">
              <HiOutlineOfficeBuilding size={22} />
              <span>Empresa colombiana</span>
            </div>
            <div className="about__meta-item">
              <HiOutlineLocationMarker size={22} />
              <span>Bogotá D.C., Colombia</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={150} className="about__cards">
          <div className="about-card">
            <h3>Misión</h3>
            <p className="placeholder-tag">[PLACEHOLDER: misión de la empresa]</p>
          </div>
          <div className="about-card">
            <h3>Visión</h3>
            <p className="placeholder-tag">[PLACEHOLDER: visión de la empresa]</p>
          </div>
          <div className="about-card">
            <h3>Trayectoria</h3>
            <p className="placeholder-tag">[PLACEHOLDER: años de experiencia / historia]</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
