"use client";

import { type CSSProperties } from "react";
import { engagementModels, philosophy } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { SpotlightSurface } from "./SpotlightSurface";

export function WhyMe() {
  const { ref, isInView } = useInView({ threshold: 0.12 });

  return (
    <section className="section shell" ref={ref}>
      <div className="why-layout">
        <div className={`why-copy ${isInView ? "is-visible" : ""}`}>
          <p className="section-number">Why me</p>
          <h2>Senior judgment. Delivery momentum. No drama.</h2>
          <p className="why-lead">
            I&apos;ve led architecture for a 70-member global data engineering coalition at
            Quantiphi. I know what breaks at scale — and I know how to explain it to your CFO
            without losing your engineers&apos; trust.
          </p>
          <ul className="philosophy-list">
            {philosophy.map((item) => (
              <li key={item.text}>
                <span>{item.icon}</span> {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="engagement-grid">
          {engagementModels.map((model, index) => (
            <SpotlightSurface
              key={model.title}
              accent="#6ee7b7"
              className={`engagement-card ${isInView ? "is-visible" : ""}`}
              style={{ "--delay": `${index * 0.1}s` } as CSSProperties}
            >
              <span className="engagement-label">{model.label}</span>
              <strong>{model.title}</strong>
              <p>{model.description}</p>
            </SpotlightSurface>
          ))}
        </div>
      </div>
    </section>
  );
}
