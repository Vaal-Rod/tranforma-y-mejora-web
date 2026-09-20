import Card from "../ui/Card";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import { services } from "../../data/services";
import "./Services.css";

export default function Services() {
  return (
    <section id="servicios" className="section section--alt services">
      <div className="container">
        <SectionTitle
          eyebrow="Nuestros servicios"
          title="Soluciones tecnológicas para tu organización"
          description="Acompañamos a las empresas con servicios especializados en tecnología, información y datos."
        />

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 120}>
                <Card className="service-card">
                  <div className="service-card__icon">
                    <Icon size={28} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
