import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Contact";
import {
  aboutBio,
  contact,
  employerTimeline,
  hasValue,
  stack,
} from "../data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Rishin S Pradeep — Senior Data Architect for remote US contracts. Employer timeline, stack, and approach.",
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
          <p key={paragraph.slice(0, 24)} className="about-bio">
            {paragraph}
          </p>
        ))}
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
      <Footer />
    </main>
  );
}
