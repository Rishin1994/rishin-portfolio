const proofPoints = [
  { value: "60%", label: "faster dbt model runs" },
  { value: "70%", label: "fewer production incidents" },
  { value: "25%", label: "lower infrastructure cost" },
  { value: "99.9%", label: "data platform SLA" },
];

const capabilities = [
  {
    number: "01",
    title: "Snowflake + dbt",
    description:
      "Warehouse architecture, cost and query tuning, modular dbt estates, CI/CD test gates, RBAC, and production governance.",
    tags: ["Snowflake", "dbt Core / Cloud", "Data Vault 2.0", "GitHub Actions"],
  },
  {
    number: "02",
    title: "Databricks Lakehouse",
    description:
      "Scalable Spark and Delta Lake platforms with performance tuning, medallion architecture, orchestration, and reliable delivery patterns.",
    tags: ["Databricks", "PySpark", "Delta Lake", "Unity Catalog"],
  },
  {
    number: "03",
    title: "Azure Data Platforms",
    description:
      "Enterprise ELT architecture across Synapse and Data Factory, from dimensional models and security to observability and SLA design.",
    tags: ["Azure Synapse", "ADF", "SQL / T-SQL", "Power BI"],
  },
  {
    number: "04",
    title: "Architecture Leadership",
    description:
      "Hands-on technical direction, roadmap decisions, design reviews, executive communication, and mentorship for distributed engineering teams.",
    tags: ["Data strategy", "Governance", "FinOps", "Team leadership"],
  },
];

const caseStudies = [
  {
    eyebrow: "Migration architecture",
    title: "Billions of CRM records. Zero downtime.",
    body: "Designed the deprecation path from a monolithic Exasol estate to Snowflake, using resilient Python orchestration, external stages, idempotent CI/CD, and Data Vault 2.0 patterns.",
    result: "A controlled cloud modernization without interrupting production reporting.",
  },
  {
    eyebrow: "Analytics performance",
    title: "350+ dbt models under one governed system.",
    body: "Set the Snowflake and dbt architecture for a retail analytics platform, standardizing model layers, testing, documentation, lineage, materializations, and warehouse sizing.",
    result: "60% faster model runs and 70% fewer production incidents.",
  },
  {
    eyebrow: "Platform modernization",
    title: "A faster warehouse with a smaller bill.",
    body: "Modernized a legacy warehouse on Azure Synapse with distribution-aware models, optimized ingestion, security controls, and performance-focused SQL design.",
    result: "4× faster queries, 25% lower infrastructure cost, and 99.9% uptime.",
  },
];

const stack = [
  "Snowflake",
  "dbt",
  "Databricks",
  "Apache Spark",
  "PySpark",
  "Delta Lake",
  "Azure Synapse",
  "Azure Data Factory",
  "Airflow",
  "Python",
  "SQL",
  "Data Vault 2.0",
  "Terraform",
  "AWS",
  "GCP",
  "Power BI",
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Rishin S Pradeep, home">
          <span className="brand-mark">RS</span>
          <span>
            Rishin S Pradeep
            <small>Senior Data Architect</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#expertise">Expertise</a>
          <a href="#work">Selected work</a>
          <a className="nav-cta" href="mailto:talktorishin94@gmail.com?subject=US%20contract%20opportunity">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="availability"><span /> Available immediately for remote US contracts</div>
        <p className="hero-kicker">Data architecture that earns its keep.</p>
        <h1>
          I build data platforms that run <em>faster</em>, cost <em>less</em>, and stay <em>reliable</em>.
        </h1>
        <div className="hero-bottom">
          <p className="hero-copy">
            Senior Data Architect with 9 years of experience turning complex Snowflake, dbt, Databricks, and Azure estates into dependable business systems.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:talktorishin94@gmail.com?subject=US%20contract%20opportunity">
              Discuss a contract <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="/Rishin-S-Pradeep-Resume.pdf" download>
              Download résumé <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="hero-meta" aria-label="Engagement details">
          <span>Based in Bengaluru, India</span>
          <span>US-hours overlap</span>
          <span>Architecture + hands-on delivery</span>
        </div>
      </section>

      <section className="proof" aria-label="Career impact">
        <div className="shell proof-grid">
          {proofPoints.map((point) => (
            <div className="proof-item" key={point.label}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell" id="expertise">
        <div className="section-heading">
          <div>
            <p className="section-number">01 / Expertise</p>
            <h2>Where I create leverage.</h2>
          </div>
          <p>
            I can own the architecture, stay close to the code, and give stakeholders a clear path from platform problem to measurable outcome.
          </p>
        </div>
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article className="capability" key={capability.title}>
              <span className="capability-number">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <div className="tag-list" aria-label={`${capability.title} technologies`}>
                {capability.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark" id="work">
        <div className="shell">
          <div className="section-heading inverted">
            <div>
              <p className="section-number">02 / Selected work</p>
              <h2>Proof, not promises.</h2>
            </div>
            <p>
              A few examples of the migration, performance, and reliability challenges I have led from architecture through production.
            </p>
          </div>
          <div className="case-grid">
            {caseStudies.map((item, index) => (
              <article className="case-card" key={item.title}>
                <div className="case-topline">
                  <span>{item.eyebrow}</span>
                  <span>0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="case-result">
                  <span>Outcome</span>
                  <strong>{item.result}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="section-number">03 / Contract fit</p>
            <h2>Senior judgment. Delivery momentum.</h2>
          </div>
          <p>
            Best suited to teams that need an experienced architect to de-risk a migration, untangle performance and cost, or set a platform direction that engineers can execute.
          </p>
        </div>
        <div className="fit-grid">
          <div className="fit-card accent-card">
            <p>Ready now</p>
            <strong>Immediate availability</strong>
            <span>Remote from India with practical overlap for US collaboration.</span>
          </div>
          <div className="fit-card">
            <p>How I work</p>
            <strong>Clear, calm, accountable</strong>
            <span>Architecture decisions, written tradeoffs, visible progress, and no handoff gap between strategy and delivery.</span>
          </div>
          <div className="fit-card">
            <p>Team impact</p>
            <strong>Scale the people, too</strong>
            <span>Technical leadership and coaching experience across a 70-member global data engineering coalition.</span>
          </div>
        </div>
      </section>

      <section className="stack-section" aria-label="Technology stack">
        <div className="shell stack-wrap">
          <p>Core stack</p>
          <div className="stack-list">
            {stack.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <p className="section-number">04 / Let&apos;s work together</p>
        <h2>Have a data platform problem worth solving?</h2>
        <p className="contact-copy">
          Send the role, problem, and expected overlap. I&apos;ll respond with a direct view on fit and how I can help.
        </p>
        <a className="contact-link" href="mailto:talktorishin94@gmail.com?subject=US%20contract%20opportunity">
          talktorishin94@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-details">
          <a href="tel:+918825959211">+91 88259 59211</a>
          <a href="https://www.linkedin.com/in/rishin-s-pradeep-28420ba7" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="/Rishin-S-Pradeep-Resume.pdf" download>Résumé ↓</a>
        </div>
      </section>

      <footer className="site-footer shell">
        <span>© {new Date().getFullYear()} Rishin S Pradeep</span>
        <span>Senior Data Architect · Bengaluru, India</span>
      </footer>
    </main>
  );
}
