import { HiOutlineBookOpen } from "react-icons/hi";
import CtaBand from "../components/ui/CtaBand";
import PageHero from "../components/ui/PageHero";
import { topics } from "../data/content";
import { serviceById, serviceHref } from "../data/services";
import "./Topics.css";

export default function Topics() {
  return (
    <>
      <PageHero eyebrow="Temas clave" title="Perspectivas para decidir mejor sobre Oracle Fusion">
        Temas que hoy están cambiando la forma de operar con Oracle, explicados desde el negocio.
      </PageHero>

      <section className="topics">
        <div className="container topics__grid">
          {topics.map((topic) => (
            <article key={topic.title} className="topic-card">
              <img src={topic.image} alt={topic.imageAlt} width="600" height="280" loading="lazy" />
              <div className="topic-card__body">
                <p className="topic-card__kind">
                  <HiOutlineBookOpen size={16} /> Perspectiva
                </p>
                <h2>{topic.title}</h2>
                {topic.summary && <p className="topic-card__summary">{topic.summary}</p>}
                <ul className="topic-card__tags" aria-label="Servicios relacionados">
                  {topic.tags.map((id) => (
                    <li key={id}>
                      <a href={serviceHref(id)}>{serviceById(id).name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="¿Quiere saber cómo aplica esto en su operación?" />
    </>
  );
}
