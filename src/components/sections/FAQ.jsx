import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import { faqItems } from "../../data/faq";
import "./FAQ.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="section faq">
      <div className="container">
        <SectionTitle eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas" />

        <div className="faq__list">
          {faqItems.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <FadeIn key={item.question} delay={index * 60} className="faq__item-wrapper">
                <div className={`faq__item ${isOpen ? "faq__item--open" : ""}`}>
                  <button
                    type="button"
                    className="faq__question"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <HiOutlineChevronDown className="faq__icon" size={22} />
                  </button>
                  <div className="faq__answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
