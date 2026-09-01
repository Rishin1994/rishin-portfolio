"use client";

import Link from "next/link";
import { featuredCaseStudies } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { SpotlightSurface } from "./SpotlightSurface";

const accents = ["#c9ff3d", "#6ee7b7", "#fbbf24"];

export function CaseStudies() {
  const { ref, isInView } = useInView({ threshold: 0.04 });

  return (
    <section className="section" id="work" ref={ref}>
      <div className="shell">
        <div className={`section-heading ${isInView ? "is-visible" : ""}`}>
          <div>
            <p className="section-number">Case studies</p>
            <h2>Proof, not promises.</h2>
          </div>
          <p>
            Three engagements mapped to real delivery — migration, governance, and warehouse
            modernization. Open any study for the full Problem → Approach → Result.
          </p>
        </div>

        <div className={`case-grid ${isInView ? "is-visible" : ""}`}>
          {featuredCaseStudies.map((study, index) => (
            <SpotlightSurface
              key={study.id}
              as="article"
              accent={accents[index % accents.length]}
              className="case-card"
            >
              <div className="case-slide-top">
                <span className="case-industry">{study.industry}</span>
                <span className="case-index">0{index + 1}</span>
              </div>

              <div className="case-metric-display">
                <strong>{study.metric}</strong>
                <span>{study.metricLabel}</span>
              </div>

              <h3>{study.title}</h3>

              <p className="case-card-excerpt">{study.result}</p>

              <div className="tag-list">
                {study.stack.slice(0, 4).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <Link className="case-card-link magnetic" href={`/work/${study.id}`}>
                Read case study <span aria-hidden="true">↗</span>
              </Link>
            </SpotlightSurface>
          ))}
        </div>

        <div className={`case-grid-footer ${isInView ? "is-visible" : ""}`}>
          <Link className="button button-ghost magnetic" href="/work">
            All work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
