"use client";

import { useRef, useState } from "react";
import { testimonials } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { SpotlightSurface } from "./SpotlightSurface";

export function Testimonials() {
  const { ref, isInView } = useInView({ threshold: 0.12 });
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slides = track.querySelectorAll<HTMLElement>(".testimonial-slide");
    slides[index]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActive(index);
  };

  return (
    <section className="section" ref={ref}>
      <div className="shell">
        <div className={`section-heading centered ${isInView ? "is-visible" : ""}`}>
          <p className="section-number">Client voice</p>
          <h2>What hiring managers say after we work together.</h2>
          <p className="testimonial-lead">
            Drag or click through quotes — each card follows your cursor.
          </p>
        </div>
      </div>

      <div
        className={`testimonial-carousel-wrap ${isInView ? "is-visible" : ""}`}
        ref={trackRef}
        onScroll={(event) => {
          const track = event.currentTarget;
          const slides = Array.from(track.querySelectorAll<HTMLElement>(".testimonial-slide"));
          const center = track.scrollLeft + track.clientWidth / 2;
          let closest = 0;
          let minDistance = Infinity;
          slides.forEach((slide, index) => {
            const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
            const distance = Math.abs(center - slideCenter);
            if (distance < minDistance) {
              minDistance = distance;
              closest = index;
            }
          });
          setActive(closest);
        }}
      >
        <div className="testimonial-carousel">
          {testimonials.map((item, index) => (
            <SpotlightSurface
              key={item.name}
              as="article"
              accent="#6ee7b7"
              active={active === index}
              className="testimonial-slide"
              onClick={() => scrollTo(index)}
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
      </div>

      <div className="shell">
        <div className="testimonial-dots" aria-label="Testimonial navigation">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={active === index ? "is-active" : ""}
              aria-label={`View testimonial from ${item.name}`}
              onClick={() => scrollTo(index)}
            >
              <span className="testimonial-dot-label">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
