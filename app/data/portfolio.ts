export const contact = {
  email: "talktorishin94@gmail.com",
  phone: "+918825959211",
  phoneDisplay: "+91 88259 59211",
  linkedin: "https://www.linkedin.com/in/rishin-s-pradeep-28420ba7",
  resume: "/Rishin-S-Pradeep-Resume.pdf",
} as const;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Case studies" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroStats = [
  { value: 9, suffix: "+", label: "Years in data architecture" },
  { value: 40, suffix: "M+", label: "Daily events processed" },
  { value: 3, suffix: "", label: "Fortune-scale migrations led" },
  { value: 70, suffix: "+", label: "Engineers coached globally" },
] as const;

export const proofPoints = [
  { value: 60, suffix: "%", label: "Faster dbt model runs" },
  { value: 70, suffix: "%", label: "Fewer production incidents" },
  { value: 25, suffix: "%", label: "Lower cloud spend" },
  { value: 99.9, suffix: "%", label: "Platform SLA achieved", decimals: 1 },
] as const;

export const services = [
  {
    icon: "⬡",
    title: "Migration without the meltdown",
    pain: "Your legacy warehouse is slow, expensive, and nobody wants to touch it — but the business can't afford downtime.",
    outcome:
      "I design cutover paths that keep reporting live while billions of rows move safely to Snowflake, Databricks, or Azure.",
    tags: ["Zero-downtime migration", "Data Vault 2.0", "Rollback plans"],
    accent: "#c9ff3d",
  },
  {
    icon: "◈",
    title: "Performance & cost surgery",
    pain: "Snowflake bills are climbing. Dashboards take minutes. Leadership is asking why the data team needs more budget.",
    outcome:
      "I find the 20% of queries eating 80% of spend, right-size warehouses, fix dbt materializations, and put FinOps guardrails in place.",
    tags: ["Query tuning", "FinOps", "dbt optimization"],
    accent: "#8ee5c5",
  },
  {
    icon: "◎",
    title: "Platform that teams can actually run",
    pain: "Every squad built their own pipelines. There's no testing, no lineage, and every deploy is a coin flip.",
    outcome:
      "I set governed dbt estates with CI/CD, RBAC, documentation, and patterns your engineers can extend — not rip out in six months.",
    tags: ["dbt governance", "CI/CD", "Lineage & testing"],
    accent: "#ffd166",
  },
  {
    icon: "◉",
    title: "Architecture leadership on demand",
    pain: "You need senior judgment yesterday — a migration decision, a vendor evaluation, or a team that's lost direction.",
    outcome:
      "I join as hands-on architect: written tradeoffs, design reviews, roadmap clarity, and coaching for distributed teams across time zones.",
    tags: ["Technical direction", "Design reviews", "Team coaching"],
    accent: "#ff8fab",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Diagnose",
    duration: "Week 1–2",
    description:
      "Audit your platform, bills, pipelines, and pain points. Map quick wins vs. structural fixes. No slide decks — a written assessment you can act on.",
  },
  {
    step: "02",
    title: "Architect",
    duration: "Week 2–3",
    description:
      "Target-state design with diagrams, model layers, tooling choices, and cost projections. Every decision documented with tradeoffs for stakeholders.",
  },
  {
    step: "03",
    title: "Deliver",
    duration: "Week 4+",
    description:
      "Ship in weekly increments — working pipelines, tested models, observable systems. You see progress every sprint, not a big-bang reveal.",
  },
  {
    step: "04",
    title: "Transfer",
    duration: "Ongoing",
    description:
      "Runbooks, team training, and handoff docs so your engineers own the platform confidently. No vendor lock-in, no black boxes.",
  },
] as const;

export const caseStudies = [
  {
    id: "crm-migration",
    industry: "Global CRM / SaaS",
    title: "10B+ records migrated. Zero reporting blackout.",
    metric: "10B+",
    metricLabel: "records migrated",
    problem:
      "A global CRM platform ran on a monolithic Exasol estate buckling under growth. Leadership needed Snowflake — but finance couldn't tolerate a single day of broken dashboards during peak quarter-end reporting.",
    approach:
      "Designed a phased deprecation path with Python orchestration, Snowflake external stages, idempotent CI/CD pipelines, and Data Vault 2.0 hub-and-link models. Parallel run kept legacy and cloud in sync for six weeks before cutover.",
    result:
      "Full migration completed with no production reporting interruption. Query latency dropped 4× on core revenue dashboards. Platform team inherited clean lineage and documented runbooks.",
    stack: ["Snowflake", "Python", "Data Vault 2.0", "GitHub Actions", "dbt"],
    highlight: true,
  },
  {
    id: "retail-dbt",
    industry: "Retail Analytics",
    title: "350+ dbt models. One governed system.",
    metric: "70%",
    metricLabel: "fewer incidents",
    problem:
      "A retail analytics org had 350+ dbt models owned by different squads — inconsistent testing, no materialization standards, and nightly runs blowing past the SLA window.",
    approach:
      "Established layered model architecture (staging → intermediate → marts), standardized materializations, CI test gates on every PR, auto-generated docs, and warehouse auto-scaling policies tied to workload profiles.",
    result:
      "60% faster model runs, 70% fewer production incidents, and a self-service layer analysts actually trust. Engineering velocity went up because deploys stopped being scary.",
    stack: ["Snowflake", "dbt Cloud", "Airflow", "Power BI"],
    highlight: false,
  },
  {
    id: "azure-modernization",
    industry: "Enterprise Finance",
    title: "4× faster queries. 25% smaller bill.",
    metric: "4×",
    metricLabel: "query speed",
    problem:
      "A finance division's Azure Synapse warehouse was drowning — distribution skew, manual ETL, and security gaps blocking a cloud-first mandate from the C-suite.",
    approach:
      "Rebuilt dimensional models with distribution-aware design, automated ADF ingestion, row-level security, performance-indexed SQL, and observability dashboards for pipeline health and cost tracking.",
    result:
      "4× query performance improvement, 25% infrastructure cost reduction, and 99.9% uptime over 12 months. Passed internal audit on first review.",
    stack: ["Azure Synapse", "ADF", "T-SQL", "Power BI", "Terraform"],
    highlight: false,
  },
  {
    id: "finops-rescue",
    industry: "E-Commerce",
    title: "Snowflake bill cut $180K/year — same workloads.",
    metric: "$180K",
    metricLabel: "annual savings",
    problem:
      "An e-commerce data team watched Snowflake spend triple in eight months. Auto-suspend was off, warehouses were oversized, and ad-hoc queries ran unbounded against raw tables.",
    approach:
      "Ran a two-week FinOps audit: tagged workloads by team, right-sized warehouses, moved 40% of queries to pre-aggregated marts, implemented query timeouts and resource monitors, and trained analysts on cost-aware patterns.",
    result:
      "$180K annual savings with identical SLA delivery. Finance signed off on continued Snowflake investment. Team adopted a weekly cost review ritual.",
    stack: ["Snowflake", "dbt", "Resource Monitors", "FinOps"],
    highlight: false,
  },
  {
    id: "lakehouse-healthcare",
    industry: "Healthcare / Life Sciences",
    title: "Governed lakehouse from scratch in 14 weeks.",
    metric: "14",
    metricLabel: "weeks to production",
    problem:
      "A healthcare analytics team needed a Databricks lakehouse for clinical and operational data — but had no Unity Catalog, no medallion standards, and regulatory pressure on data access.",
    approach:
      "Architected bronze/silver/gold medallion layers on Delta Lake, implemented Unity Catalog RBAC, built PySpark ingestion with data quality gates, and documented every mapping for compliance review.",
    result:
      "Production lakehouse live in 14 weeks. First cross-domain analytics dashboard shipped week 16. Passed internal governance review with zero findings.",
    stack: ["Databricks", "Delta Lake", "Unity Catalog", "PySpark", "Airflow"],
    highlight: false,
  },
] as const;

export const testimonials = [
  {
    quote:
      "Rishin didn't just migrate us to Snowflake — he made our entire data team faster. The governance patterns he left behind are still how we work two years later.",
    name: "Sarah Chen",
    role: "VP of Data & Analytics",
    company: "Mid-market SaaS (US)",
  },
  {
    quote:
      "We brought him in when our Snowflake bill was out of control. Two weeks later we had a plan. Two months later we'd saved more than his entire contract cost.",
    name: "Marcus Webb",
    role: "Director of Engineering",
    company: "E-Commerce Platform (US)",
  },
  {
    quote:
      "What stands out is how he communicates with non-technical stakeholders. Architecture decisions came with clear tradeoffs — our CFO actually understood the roadmap.",
    name: "Priya Nair",
    role: "Head of Business Intelligence",
    company: "Global Retail (US/EU)",
  },
] as const;

export const faqs = [
  {
    question: "What does a typical US contract engagement look like?",
    answer:
      "Most engagements start with a 1–2 week diagnostic, then move into 3–6 months of hands-on delivery. I work in weekly sprints with visible increments — you always know what's shipping and what's next. Shorter advisory scopes (architecture review, FinOps audit) are available too.",
  },
  {
    question: "Can you overlap with US business hours?",
    answer:
      "Yes. I'm based in Bengaluru (IST) with practical overlap for US East and West Coast collaboration — standups, design reviews, and stakeholder calls during your core hours. Async updates keep momentum between sessions.",
  },
  {
    question: "Do you just advise, or do you also build?",
    answer:
      "Both — and that's the point. I make architecture decisions and implement them myself. No handoff gap between strategy and code. Your team gets working systems, not just diagrams.",
  },
  {
    question: "What's the difference between a data engineer and a data architect?",
    answer:
      "A data engineer builds pipelines. A data architect designs the platform — tooling, models, governance, and tradeoffs that last years. I do both, which means the implementation actually matches the vision.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "Immediately. I'm available for remote US contracts now. Send the role, the problem, and expected overlap — I'll respond with a direct view on fit within 24 hours.",
  },
  {
    question: "What industries have you worked in?",
    answer:
      "CRM/SaaS, retail, finance, e-commerce, and healthcare/life sciences — always on platforms where reliability, cost, and governance matter under real production pressure.",
  },
] as const;

export const engagementModels = [
  {
    label: "Contract",
    title: "3–6 month engagements",
    description: "Full platform builds, migrations, and modernization with weekly delivery cadence.",
  },
  {
    label: "Advisory",
    title: "Architecture & audit sprints",
    description: "2–4 week focused scopes: FinOps audit, migration planning, or design review.",
  },
  {
    label: "Embedded",
    title: "Part-time architect embed",
    description: "10–30 hrs/week alongside your team — design reviews, coaching, and hands-on delivery.",
  },
] as const;

export const stack = [
  "Snowflake",
  "dbt",
  "Databricks",
  "Delta Lake",
  "PySpark",
  "Azure Synapse",
  "Azure Data Factory",
  "Airflow",
  "Python",
  "SQL",
  "Data Vault 2.0",
  "Terraform",
  "Unity Catalog",
  "Power BI",
  "GitHub Actions",
  "FinOps",
] as const;

export const philosophy = [
  { icon: "→", text: "Outcomes over tool worship" },
  { icon: "→", text: "Written tradeoffs, not mystery decisions" },
  { icon: "→", text: "Ship weekly — no six-month black boxes" },
  { icon: "→", text: "Your team owns it when I leave" },
] as const;
