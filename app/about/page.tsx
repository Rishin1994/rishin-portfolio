import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Contact";
import {
  aboutBio,
  contact,
  employerTimeline,
  firstThirtyDays,
  hasValue,
  stack,
} from "../data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Rishin S Pradeep — Senior Data Architect for remote US contracts. First 30 days, employer timeline, and stack.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const photo = hasValue(contact.photo);

  return (
    <main className="site-main">
      <Header />
      <section className="page-hero shell about-hero">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="about-photo"
            src={contact.photo}
            alt="Rishin S Pradeep"
            width={160}
            height={160}
          />
        ) : null}
        <p className="section-number is-visible">About</p>
        <h1>Senior judgment. Delivery momentum.</h1>
        {aboutBio.split("\n\n").map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="about-bio">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="shell about-thirty">
        <h2>First 30 days on a US contract</h2>
        <p className="about-thirty-lead">
          You should see written diagnosis, explicit tradeoffs, and something in production before
          the first month ends — not a six-month discovery cloud.
        </p>
        <ol className="thirty-list">
          {firstThirtyDays.map((item) => (
            <li key={item.week}>
              <span className="thirty-week">{item.week}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="shell about-timeline">
        <h2>Employer timeline</h2>
        <ol className="timeline-list">
          {employerTimeline.map((item) => (
            <li key={item.company}>
              <div className="timeline-period">{item.period}</div>
              <div>
                <strong>
                  {item.role} · {item.company}
                </strong>
                <p>{item.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="shell about-stack">
        <h2>Core stack</h2>
        <div className="tag-list">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="shell about-cta">
        <a
          className="button button-primary magnetic"
          href={`mailto:${contact.email}?subject=US%20contract%20opportunity`}
        >
          Email me <span aria-hidden="true">↗</span>
        </a>
        <a className="button button-ghost magnetic" href={contact.resume} download>
          Download résumé
        </a>
      </section>
      <Footer />
    </main>
  );
}
