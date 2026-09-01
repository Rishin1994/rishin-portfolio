import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Contact";
import { caseStudies, contact } from "../../data/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.id === slug);
  if (!study) return { title: "Case study" };

  return {
    title: study.title,
    description: study.result,
    alternates: { canonical: `/work/${study.id}` },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.id === slug);
  if (!study) notFound();

  const subject = encodeURIComponent(`Similar problem: ${study.title}`);

  return (
    <main className="site-main">
      <Header />
      <article className="case-detail shell">
        <p className="section-number is-visible">
          <Link href="/work">Work</Link> / {study.industry}
        </p>

        <div className="case-detail-hero">
          <div className="case-metric-display">
            <strong>{study.metric}</strong>
            <span>{study.metricLabel}</span>
          </div>
          <h1>{study.title}</h1>
          {(study.employer || study.year) && (
            <p className="case-detail-meta">
              {[study.employer, study.year].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>

        <div className="case-par-grid case-detail-par">
          <div className="case-par">
            <span>Problem</span>
            <p>{study.problem}</p>
          </div>
          <div className="case-par">
            <span>Approach</span>
            <p>{study.approach}</p>
          </div>
          <div className="case-par case-par-result">
            <span>Result</span>
            <p>{study.result}</p>
          </div>
        </div>

        <div className="tag-list">
          {study.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {study.diagram ? (
          <figure className="case-diagram">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={study.diagram} alt={`Architecture diagram for ${study.title}`} />
          </figure>
        ) : null}

        {study.repoUrl ? (
          <p className="case-repo">
            <a href={study.repoUrl} target="_blank" rel="noreferrer">
              Companion repository ↗
            </a>
          </p>
        ) : null}

        <div className="case-detail-cta">
          <a
            className="button button-primary magnetic"
            href={`mailto:${contact.email}?subject=${subject}`}
          >
            Discuss a similar problem <span aria-hidden="true">↗</span>
          </a>
          <Link className="button button-ghost magnetic" href="/work">
            All work
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
