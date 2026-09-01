"use client";

import { useEffect, useState } from "react";
import { testimonials } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { SpotlightSurface } from "./SpotlightSurface";

export function Testimonials() {
  const { ref, isInView } = useInView({ threshold: 0.15 });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!isInView || testimonials.length === 0) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isInView]);

  if (testimonials.length === 0) return null;

  return (
    <section className="section shell" ref={ref}>
      <div className={`section-heading centered ${isInView ? "is-visible" : ""}`}>
        <p className="section-number">Client voice</p>
        <h2>What hiring managers say after we work together.</h2>
      </div>

      <div className={`testimonial-stage ${isInView ? "is-visible" : ""}`}>
        {testimonials.map((item, index) => (
          <SpotlightSurface
            key={item.name}
            as="article"
            accent="#6ee7b7"
            active={active === index}
            className={`testimonial-card ${active === index ? "is-active" : ""}`}
            tilt={false}
          >
            <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
            <footer>
              <strong>{item.name}</strong>
              <span>
                {item.role} · {item.company}
              </span>
            </footer>
          </SpotlightSurface>
        ))}
      </div>

      <div className="testimonial-dots" aria-label="Testimonial navigation">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            className={active === index ? "is-active" : ""}
            aria-label={`View testimonial from ${item.name}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}
