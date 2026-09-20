import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import NetworkAnimation from "../ui/NetworkAnimation";
import connectivityImage from "../../assets/tecnologia-conectividad.jpg";
import "./Media.css";

export default function Media() {
  return (
    <section className="section media">
      <div className="container">
        <SectionTitle
          eyebrow="Innovación en acción"
          title="Así trabajamos en TecnologiaTest"
          description="Contenido visual de referencia (demo) para ilustrar nuestro enfoque de trabajo y proyectos tecnológicos."
        />

        <div className="media__grid">
          <FadeIn className="media__video-wrapper">
            <NetworkAnimation label="Visualización animada de una red de datos (contenido ilustrativo)" />
            <span className="media__badge">Visualización animada (ilustrativa)</span>
          </FadeIn>

          <div className="media__images">
            <FadeIn delay={100} className="media__image-wrapper">
              <img
                src="https://loremflickr.com/500/380/office,coworking/all?lock=103"
                alt="Equipo trabajando en oficina con equipos de tecnología (imagen de referencia)"
                loading="lazy"
                width="500"
                height="380"
              />
            </FadeIn>
            <FadeIn delay={200} className="media__image-wrapper">
              <img
                src={connectivityImage}
                alt="Persona interactuando con íconos de conectividad y tecnología digital"
                loading="lazy"
                width="620"
                height="413"
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
