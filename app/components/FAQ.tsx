"use client";

import { useState, type CSSProperties } from "react";
import { faqs } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

export function FAQ() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section shell" id="faq" ref={ref}>
      <div className="faq-layout">
        <div className={`faq-intro ${isInView ? "is-visible" : ""}`}>
          <p className="section-number">FAQ</p>
          <h2>Questions US hiring managers ask.</h2>
          <p>
            Straight answers — no fluff. If yours isn&apos;t here, email me and I&apos;ll respond
            within 24 hours.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              key={item.question}
              className={`faq-item ${open === index ? "is-open" : ""} ${isInView ? "is-visible" : ""}`}
              style={{ "--delay": `${index * 0.06}s` } as CSSProperties}
            >
              <button
                type="button"
                className="faq-question"
                aria-expanded={open === index}
                onClick={() => setOpen(open === index ? null : index)}
              >
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true" />
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
