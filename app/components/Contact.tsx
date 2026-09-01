"use client";

import {
  contact,
  hasValidLinkedIn,
  hasValue,
} from "../data/portfolio";
import { useInView } from "../hooks/useInView";

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const calendar = hasValue(contact.calendarUrl);
  const linkedin = hasValidLinkedIn(contact.linkedin);
  const github = hasValue(contact.github);
  const resume = hasValue(contact.resume);
  const photo = hasValue(contact.photo);

  return (
    <section className="contact-section shell" id="contact" ref={ref}>
      <div className="contact-inner">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="contact-photo"
            src={contact.photo}
            alt="Rishin S Pradeep"
            width={160}
            height={160}
          />
        ) : null}

        <p className={`section-number ${isInView ? "is-visible" : ""}`}>Let&apos;s talk</p>
        <h2 className={isInView ? "is-visible" : ""}>
          Have a platform problem worth solving?
        </h2>
        <p className={`contact-copy ${isInView ? "is-visible" : ""}`}>
          Send the role, the problem, and your timezone overlap needs. I&apos;ll reply with a direct
          view on fit — no recruiter middleman, no generic pitch deck.
        </p>

        <div className={`contact-cards ${isInView ? "is-visible" : ""}`}>
          {calendar ? (
            <a
              className="contact-card contact-card-primary magnetic"
              href={contact.calendarUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-card-label">Schedule</span>
              <strong>Book 20 minutes</strong>
              <span className="contact-card-cta">Open calendar ↗</span>
            </a>
          ) : null}

          <a
            className={`contact-card magnetic ${calendar ? "" : "contact-card-primary"}`}
            href={`mailto:${contact.email}?subject=US%20contract%20opportunity`}
          >
            <span className="contact-card-label">Email Rishin</span>
            <strong>{contact.email}</strong>
            <span className="contact-card-cta">Start a conversation ↗</span>
          </a>

          {resume ? (
            <a className="contact-card magnetic" href={contact.resume} download>
              <span className="contact-card-label">Résumé</span>
              <strong>Download PDF</strong>
              <span className="contact-card-cta">Full work history ↓</span>
            </a>
          ) : null}

          {linkedin ? (
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
          ) : null}

          {github ? (
            <a
              className="contact-card magnetic"
              href={contact.github}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-card-label">GitHub</span>
              <strong>Rishin1994</strong>
              <span className="contact-card-cta">View repositories ↗</span>
            </a>
          ) : null}
        </div>

        <div className={`contact-meta ${isInView ? "is-visible" : ""}`}>
          <span>{contact.location}</span>
          <span>Available immediately</span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const linkedin = hasValidLinkedIn(contact.linkedin);
  const github = hasValue(contact.github);
  const resume = hasValue(contact.resume);

  return (
    <footer className="site-footer shell">
      <div className="footer-identity">
        <strong>Rishin S Pradeep</strong>
        <span>Senior Data Architect · Remote US Contracts</span>
      </div>
      <div className="footer-links">
        <a href={`mailto:${contact.email}`}>Email Rishin</a>
        {linkedin ? (
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        ) : null}
        {github ? (
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        ) : null}
        {resume ? (
          <a href={contact.resume} download>
            Résumé
          </a>
        ) : null}
      </div>
      <span className="footer-copy">© {year} Rishin S Pradeep</span>
    </footer>
  );
}
