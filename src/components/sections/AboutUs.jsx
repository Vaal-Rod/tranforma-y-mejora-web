import { HiOutlineLocationMarker, HiOutlineOfficeBuilding } from "react-icons/hi";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import { companyInfo } from "../../data/config";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section id="nosotros" className="section about">
      <div className="container about__intro">
        <FadeIn className="about__text">
          <SectionTitle
            align="left"
            eyebrow="Quiénes somos"
            title="Una empresa colombiana comprometida con la tecnología"
          />
          <p>
            <strong>{companyInfo.name}</strong> es una empresa colombiana establecida en{" "}
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

        <FadeIn delay={150} className="about__media">
          <img
            src="https://loremflickr.com/700/560/business,meeting,technology/all?lock=102"
            alt="Equipo de TecnologiaTest trabajando en soluciones tecnológicas (imagen de referencia)"
            loading="lazy"
            width="700"
            height="560"
          />
        </FadeIn>
      </div>

      <div className="container about__cards">
        <FadeIn className="about-card">
          <h3>Misión</h3>
          <p>
            Impulsar la transformación digital de nuestros clientes mediante soluciones de
            consultoría informática, procesamiento de datos y tecnologías de la información
            que generen valor real y medible para sus organizaciones.
          </p>
        </FadeIn>
        <FadeIn delay={100} className="about-card">
          <h3>Visión</h3>
          <p>
            Ser reconocidos en 2030 como una de las firmas de consultoría tecnológica más
            confiables de Colombia, referentes en innovación, calidad de servicio y
            acompañamiento cercano a las empresas que atendemos.
          </p>
        </FadeIn>
        <FadeIn delay={200} className="about-card">
          <h3>Trayectoria</h3>
          <p>
            Desde nuestra fundación hemos acompañado a más de 40 organizaciones en Bogotá y
            otras ciudades de Colombia, consolidando un equipo multidisciplinario con más de
            8 años de experiencia combinada en tecnología.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
