"use client";

import { useState } from "react";
import { services } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { SpotlightSurface } from "./SpotlightSurface";

export function Services() {
  const { ref, isInView } = useInView({ threshold: 0.06 });
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="section shell" id="services" ref={ref}>
      <div className={`section-heading ${isInView ? "is-visible" : ""}`}>
        <div>
          <p className="section-number">What I solve</p>
          <h2>Problems worth hiring a senior architect for.</h2>
        </div>
        <p>
          Hover to explore. Click a card to dive in. Every engagement starts with a problem
          your team is stuck on — not a tool you want installed.
        </p>
      </div>

      <div className={`services-bento ${isInView ? "is-visible" : ""}`}>
        {services.map((service, index) => (
          <SpotlightSurface
            key={service.title}
            as="button"
            accent={service.accent}
            active={active === index}
            className={`service-card ${active === index ? "is-selected" : ""}`}
            onClick={() => setActive(index)}
          >
            <span className="service-card-index">0{index + 1}</span>
            <span className="service-card-icon" aria-hidden="true">
              {service.icon}
            </span>
            <h3>{service.title}</h3>
            <p className="service-card-teaser">{service.pain}</p>
            <span className="service-card-hint">Explore ↗</span>
          </SpotlightSurface>
        ))}
      </div>

      <SpotlightSurface
        key={current.title}
        accent={current.accent}
        className={`service-stage ${isInView ? "is-visible" : ""}`}
        tilt={false}
      >
        <div className="service-stage-grid">
          <div className="service-stage-block">
            <span className="stage-label">The pain</span>
            <p className="stage-pain">{current.pain}</p>
          </div>
          <div className="service-stage-divider" aria-hidden="true" />
          <div className="service-stage-block">
            <span className="stage-label">What you get</span>
            <p className="stage-outcome">{current.outcome}</p>
            <div className="tag-list">
              {current.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </SpotlightSurface>
    </section>
  );
}
