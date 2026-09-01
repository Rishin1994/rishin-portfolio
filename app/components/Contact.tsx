"use client";

import { contact } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="contact-section shell" id="contact" ref={ref}>
      <div className="contact-inner">
        <p className={`section-number ${isInView ? "is-visible" : ""}`}>Let&apos;s talk</p>
        <h2 className={isInView ? "is-visible" : ""}>
          Have a platform problem worth solving?
        </h2>
        <p className={`contact-copy ${isInView ? "is-visible" : ""}`}>
          Send the role, the problem, and your timezone overlap needs. I&apos;ll reply with a direct
          view on fit — no recruiter middleman, no generic pitch deck.
        </p>

        <div className={`contact-cards ${isInView ? "is-visible" : ""}`}>
          <a
            className="contact-card contact-card-primary magnetic"
            href={`mailto:${contact.email}?subject=US%20contract%20opportunity`}
          >
            <span className="contact-card-label">Email me</span>
            <strong>{contact.email}</strong>
            <span className="contact-card-cta">Start a conversation ↗</span>
          </a>
          <a className="contact-card magnetic" href={contact.resume} download>
            <span className="contact-card-label">Résumé</span>
            <strong>Download PDF</strong>
            <span className="contact-card-cta">Full work history ↓</span>
          </a>
          <a
            className="contact-card magnetic"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-card-label">LinkedIn</span>
            <strong>Connect</strong>
            <span className="contact-card-cta">View profile ↗</span>
          </a>
        </div>

        <div className={`contact-meta ${isInView ? "is-visible" : ""}`}>
          <span>{contact.phoneDisplay}</span>
          <span>Bengaluru, India · US-hours overlap</span>
          <span>Available immediately</span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer shell">
      <span>© {new Date().getFullYear()} Rishin S Pradeep</span>
      <span>Senior Data Architect · Remote US Contracts</span>
    </footer>
  );
}
