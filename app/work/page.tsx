import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Contact";
import { caseStudies } from "../data/portfolio";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies in migration, dbt governance, and Azure warehouse modernization by Rishin S Pradeep.",
  alternates: { canonical: "/work" },
};

export default function WorkIndexPage() {
  return (
    <main className="site-main">
      <Header />
      <section className="page-hero shell">
        <p className="section-number is-visible">Work</p>
        <h1>Selected engagements.</h1>
        <p>
          Problem → Approach → Result across CRM migration, retail dbt governance, and finance
          warehouse modernization.
        </p>
      </section>

      <section className="shell work-index">
        <div className="case-grid is-visible">
          {caseStudies.map((study, index) => (
            <article key={study.id} className="case-card work-index-card">
              <div className="case-slide-top">
                <span className="case-industry">{study.industry}</span>
                <span className="case-index">0{index + 1}</span>
              </div>
              <div className="case-metric-display">
                <strong>{study.metric}</strong>
                <span>{study.metricLabel}</span>
              </div>
              <h2>{study.title}</h2>
              <p className="case-card-excerpt">{study.result}</p>
              <Link className="case-card-link" href={`/work/${study.id}`}>
                Read case study <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
