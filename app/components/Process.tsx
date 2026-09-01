"use client";

import { type CSSProperties } from "react";
import { processSteps } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { SpotlightSurface } from "./SpotlightSurface";

export function Process() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section shell" id="process" ref={ref}>
      <div className={`section-heading ${isInView ? "is-visible" : ""}`}>
        <div>
          <p className="section-number">How I work</p>
          <h2>Clear phases. Weekly progress. No surprises.</h2>
        </div>
        <p>
          Every engagement follows the same rhythm — diagnose before you build, ship in
          increments, and leave your team owning the result.
        </p>
      </div>

      <div className="process-track">
        {processSteps.map((step, index) => (
          <SpotlightSurface
            key={step.step}
            as="article"
            accent="#c9ff3d"
            className={`process-card ${isInView ? "is-visible" : ""}`}
            style={{ "--delay": `${index * 0.1}s` } as CSSProperties}
          >
            <div className="process-card-top">
              <span className="process-step">{step.step}</span>
              <span className="process-duration">{step.duration}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </SpotlightSurface>
        ))}
      </div>
    </section>
  );
}
