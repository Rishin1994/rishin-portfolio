"use client";

import { useRef, useState } from "react";
import { caseStudies } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { SpotlightSurface } from "./SpotlightSurface";

const accents = ["#c9ff3d", "#6ee7b7", "#fbbf24", "#fb7185", "#a78bfa"];

export function CaseStudies() {
  const { ref, isInView } = useInView({ threshold: 0.04 });
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slides = track.querySelectorAll<HTMLElement>(".case-slide");
    slides[index]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActive(index);
  };

  return (
    <section className="section" id="work" ref={ref}>
      <div className="shell">
        <div className={`section-heading ${isInView ? "is-visible" : ""}`}>
          <div>
            <p className="section-number">Case studies</p>
            <h2>Proof, not promises.</h2>
          </div>
          <p>
            Drag or click through real migration, cost, and platform scenarios. Hover each card —
            the spotlight follows your cursor.
          </p>
        </div>
      </div>

      <div
        className={`case-carousel-wrap ${isInView ? "is-visible" : ""}`}
        ref={trackRef}
        onScroll={(event) => {
          const track = event.currentTarget;
          const slides = Array.from(track.querySelectorAll<HTMLElement>(".case-slide"));
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
        <div className="case-carousel">
          {caseStudies.map((study, index) => (
            <SpotlightSurface
              key={study.id}
              as="article"
              accent={accents[index % accents.length]}
              active={active === index}
              className="case-slide"
              onClick={() => scrollTo(index)}
            >
              <span className="case-watermark" aria-hidden="true">
                {study.metric}
              </span>

              <div className="case-slide-top">
                <span className="case-industry">{study.industry}</span>
                <span className="case-index">0{index + 1}</span>
              </div>

              <div className="case-metric-display">
                <strong>{study.metric}</strong>
                <span>{study.metricLabel}</span>
              </div>

              <h3>{study.title}</h3>

              <div className="case-par-grid">
                <div className="case-par">
                  <span>Problem</span>
                  <p>{study.problem}</p>
                </div>
                <div className="case-par">
                  <span>Approach</span>
                  <p>{study.approach}</p>
                </div>
                <div className="case-par case-par-result">
                  <span>Result</span>
                  <p>{study.result}</p>
                </div>
              </div>

              <div className="tag-list">
                {study.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </SpotlightSurface>
          ))}
        </div>
      </div>

      <div className="shell">
        <div className="case-dots" aria-label="Case study navigation">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              type="button"
              className={active === index ? "is-active" : ""}
              aria-label={`View: ${study.title}`}
              onClick={() => scrollTo(index)}
            >
              <span className="case-dot-label">{study.industry}</span>
              <span className="case-dot-metric">{study.metric}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
