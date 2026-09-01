"use client";

import { proofPoints } from "../data/portfolio";
import { useCountUp } from "../hooks/useCountUp";
import { useInView } from "../hooks/useInView";

function ProofItem({
  value,
  suffix,
  label,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const count = useCountUp({ end: value, decimals, active: isInView });
  const staticText = `${decimals > 0 ? value.toFixed(decimals) : value}${suffix}`;

  return (
    <div
      ref={ref}
      className={`proof-item ${isInView ? "is-visible" : ""}`}
      aria-label={`${staticText} ${label}`}
    >
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export function ProofBar() {
  return (
    <section className="proof" aria-label="Client outcomes">
      <div className="shell">
        <p className="proof-label">Outcomes clients care about</p>
        <div className="proof-grid">
          {proofPoints.map((point) => (
            <ProofItem
              key={point.label}
              value={point.value}
              suffix={point.suffix}
              label={point.label}
              decimals={"decimals" in point ? point.decimals : 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
