"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { contact, hasValue, heroStats } from "../data/portfolio";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? (scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}

export function Hero() {
  const primaryHref = hasValue(contact.calendarUrl)
    ? contact.calendarUrl
    : `mailto:${contact.email}?subject=US%20contract%20opportunity`;
  const primaryLabel = hasValue(contact.calendarUrl) ? "Book 20 minutes" : "Email Rishin";
  const primaryExternal = hasValue(contact.calendarUrl);

  return (
    <section className="hero shell" id="top">
      <div className="hero-content is-mounted">
        <div className="availability reveal" style={{ "--delay": "0s" } as CSSProperties}>
          <span className="pulse-dot" />
          Available now for remote US contracts
        </div>

        <h1>
          <span className="reveal" style={{ "--delay": "0.08s" } as CSSProperties}>
            Your data platform
          </span>
          <span className="reveal hero-accent-line" style={{ "--delay": "0.2s" } as CSSProperties}>
            shouldn&apos;t be your <em>biggest risk.</em>
          </span>
        </h1>

        <p className="hero-lead reveal" style={{ "--delay": "0.34s" } as CSSProperties}>
          I&apos;m Rishin — a Senior Data Architect who fixes migrations, runaway cloud bills,
          and fragile pipelines for US teams. Architecture decisions <strong>and</strong> hands-on
          delivery. No handoff gap.
        </p>

        <div className="hero-actions reveal" style={{ "--delay": "0.46s" } as CSSProperties}>
          <a
            className="button button-primary magnetic"
            href={primaryHref}
            {...(primaryExternal ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {primaryLabel} <span aria-hidden="true">↗</span>
          </a>
          {hasValue(contact.calendarUrl) ? (
            <a
              className="button button-ghost magnetic"
              href={`mailto:${contact.email}?subject=US%20contract%20opportunity`}
            >
              Email Rishin
            </a>
          ) : (
            <Link className="button button-ghost magnetic" href="/work">
              See the proof <span aria-hidden="true">↓</span>
            </Link>
          )}
        </div>

        <div className="hero-stats reveal" style={{ "--delay": "0.58s" } as CSSProperties}>
          {heroStats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <strong>
                {stat.value}
                {stat.suffix}
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
