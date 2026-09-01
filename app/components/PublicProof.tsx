"use client";

import { publicWork } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

export function PublicProof() {
  const items = [...publicWork];
  const { ref, isInView } = useInView({ threshold: 0.15 });

  if (items.length === 0) return null;

  return (
    <section className="section public-proof" id="public-proof" ref={ref}>
      <div className="shell">
        <div className={`section-heading ${isInView ? "is-visible" : ""}`}>
          <div>
            <p className="section-number">Public proof</p>
            <h2>Code you can inspect.</h2>
          </div>
          <p>
            Open repositories that back the architecture claims on this site — medallion, data
            quality, and Data Vault patterns.
          </p>
        </div>

        <div className={`public-proof-grid ${isInView ? "is-visible" : ""}`}>
          {items.map((item) => (
            <a
              key={item.name}
              className="public-proof-card"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="public-proof-name">{item.name}</span>
              <p>{item.description}</p>
              <span className="public-proof-cta">View on GitHub ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
