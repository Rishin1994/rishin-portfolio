/** Dead LinkedIn slug — never render a button for this URL. */
export const DEAD_LINKEDIN =
  "https://www.linkedin.com/in/rishin-s-pradeep-28420ba7";

export const siteUrl = "https://rishinspradeep.vercel.app";

export const contact = {
  email: "talktorishin94@gmail.com",
  /** Leave empty until a working LinkedIn slug exists. */
  linkedin: "",
  github: "https://github.com/Rishin1994",
  resume: "/Rishin-S-Pradeep-Resume.pdf",
  /** Optional — render buttons only when non-empty. */
  website: "",
  calendarUrl: "",
  photo: "",
  location: "Bengaluru, India · US-hours overlap",
} as const;

export function hasValidLinkedIn(url: string | undefined | null): boolean {
  if (!url?.trim()) return false;
  return url.trim() !== DEAD_LINKEDIN;
}

export function hasValue(value: string | undefined | null): boolean {
  return Boolean(value?.trim());
}

export const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
] as const;

/** Freeze years at 9 (Jun 2017–present). Do not invent daily-event volume. */
export const heroStats = [
  { value: 9, suffix: "+", label: "Years in data architecture" },
  { value: 3, suffix: "", label: "Fortune-scale migrations led" },
  {
    value: 70,
    suffix: "+",
    label: "Engineers in coalitions led",
  },
] as const;

/** 60% / 70% are from the same retail dbt governance program. */
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

export type CaseStudy = {
  id: string;
  industry: string;
  title: string;
  metric: string;
  metricLabel: string;
  problem: string;
  approach: string;
  result: string;
  stack: readonly string[];
  featured: boolean;
  employer?: string;
  year?: string;
  diagram?: string;
  repoUrl?: string;
};

export const caseStudies: CaseStudy[] = [
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
    featured: true,
    employer: "Quantiphi",
    year: "2025",
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
    featured: true,
    employer: "Tredence",
    year: "2021–2024",
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
    featured: true,
    employer: "Infosys",
    year: "2017–2021",
  },
];

export const featuredCaseStudies = caseStudies.filter((study) => study.featured);

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
      "Immediately. I'm available for remote US contracts now. Send the role, the problem, and expected overlap — I'll reply with a direct view on fit within 24 hours.",
  },
  {
    question: "What industries have you worked in?",
    answer:
      "CRM/SaaS, retail analytics, and enterprise finance — always on platforms where reliability, cost, and governance matter under real production pressure.",
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

export const publicWork = [
  {
    name: "azure-medallion-university-chapters",
    url: "https://github.com/Rishin1994/azure-medallion-university-chapters",
    description:
      "Medallion Bronze→Silver→Gold on Azure with DQ quarantine, product contract, and tests.",
  },
  {
    name: "datavault-implementation",
    url: "https://github.com/Rishin1994/datavault-implementation",
    description: "Data Vault 2.0 implementation patterns that support the migration claim on this site.",
  },
  {
    name: "automate-dv-demo-5.4",
    url: "https://github.com/Rishin1994/automate-dv-demo-5.4",
    description: "AutomateDV demo work — companion proof for Data Vault delivery.",
  },
] as const;

export const aboutBio = `I'm Rishin — a Senior Data Architect available for remote US contracts. I make architecture decisions and implement them myself: migrations, FinOps, governed dbt estates, and platform leadership for teams that cannot afford a handoff gap between strategy and code.

I've led architecture for a 70-member global data engineering coalition at Quantiphi, modernized retail analytics platforms at Tredence, and rebuilt finance warehouses at Infosys. I work in weekly increments, write tradeoffs down, and leave teams owning the result.`;

export const employerTimeline = [
  {
    company: "Quantiphi",
    role: "Senior Data Architect",
    period: "2025–present",
    summary:
      "Architecture leadership for large-scale CRM/SaaS migration programs — Snowflake, Data Vault 2.0, zero-downtime cutover paths.",
  },
  {
    company: "Tredence",
    role: "Data Architect",
    period: "2021–2024",
    summary:
      "Governed dbt estates, retail analytics platforms, and delivery patterns for squads shipping under SLA pressure.",
  },
  {
    company: "Infosys",
    role: "Data Engineer → Senior roles",
    period: "2017–2021",
    summary:
      "Azure warehouse modernization, performance and cost work, and production platforms for enterprise finance.",
  },
] as const;
