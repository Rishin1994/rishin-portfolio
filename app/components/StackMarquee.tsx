"use client";

import { stack } from "../data/portfolio";

export function StackMarquee() {
  const items = [...stack, ...stack];

  return (
    <section className="stack-section" aria-label="Technology stack">
      <div className="shell stack-header">
        <p>Core stack</p>
        <span>Drag-free marquee · hover to pause</span>
      </div>
      <div className="marquee-wrap">
        <div className="marquee-track">
          {items.map((item, index) => (
            <span key={`${item}-${index}`} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
