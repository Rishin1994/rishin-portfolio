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
          Three Fortune-scale programs — CRM migration at Quantiphi, retail dbt governance at
          Tredence, finance warehouse modernization at Infosys.
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

              {study.diagram ? (
                <div className="work-card-diagram">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={study.diagram} alt="" />
                </div>
              ) : null}

              <div className="case-metric-display">
                <strong>{study.metric}</strong>
                <span>{study.metricLabel}</span>
              </div>

              <p className="work-card-meta">
                {[study.employer, study.year].filter(Boolean).join(" · ")}
              </p>

              <h2>{study.title}</h2>
              <p className="case-card-excerpt">{study.result}</p>
              <Link className="case-card-link" href={`/work/${study.id}`}>
                Read the full pitch <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
