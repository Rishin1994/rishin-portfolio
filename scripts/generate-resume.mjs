import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "public", "Rishin-S-Pradeep-Resume.pdf");

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const MARGIN_X = 42;
const MARGIN_TOP = 32;
const MARGIN_BOTTOM = 28;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;

function wrap(text, font, size, maxWidth) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(next, size) <= maxWidth) {
      current = next;
    } else {
      if (current) lines.push(current);
      // Hard-break extremely long tokens instead of clipping
      if (font.widthOfTextAtSize(word, size) > maxWidth) {
        let chunk = "";
        for (const ch of word) {
          const trial = chunk + ch;
          if (font.widthOfTextAtSize(trial, size) <= maxWidth) chunk = trial;
          else {
            if (chunk) lines.push(chunk);
            chunk = ch;
          }
        }
        current = chunk;
      } else {
        current = word;
      }
    }
  }
  if (current) lines.push(current);
  return lines;
}

async function main() {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);

  let y = PAGE_HEIGHT - MARGIN_TOP;
  const ink = rgb(0.08, 0.08, 0.08);
  const muted = rgb(0.32, 0.32, 0.32);
  const rule = rgb(0.72, 0.72, 0.72);

  const draw = (text, { size = 9.5, face = font, color = ink, gap = 11.5 } = {}) => {
    const lines = wrap(text, face, size, CONTENT_WIDTH);
    for (const line of lines) {
      if (y < MARGIN_BOTTOM + 14) {
        throw new Error(`Content overflow while drawing: ${line.slice(0, 48)}`);
      }
      page.drawText(line, { x: MARGIN_X, y, size, font: face, color });
      y -= gap;
    }
  };

  const section = (title) => {
    y -= 4;
    if (y < MARGIN_BOTTOM + 30) throw new Error(`Section overflow: ${title}`);
    page.drawText(title.toUpperCase(), {
      x: MARGIN_X,
      y,
      size: 9.5,
      font: bold,
      color: ink,
    });
    y -= 3;
    page.drawLine({
      start: { x: MARGIN_X, y },
      end: { x: PAGE_WIDTH - MARGIN_X, y },
      thickness: 0.6,
      color: rule,
    });
    y -= 12;
  };

  const job = (title, dates) => {
    page.drawText(title, { x: MARGIN_X, y, size: 10, font: bold, color: ink });
    y -= 11;
    page.drawText(dates, { x: MARGIN_X, y, size: 8.5, font, color: muted });
    y -= 12;
  };

  const bullet = (text) => {
    const lines = wrap(text, font, 9, CONTENT_WIDTH - 14);
    lines.forEach((line, index) => {
      if (y < MARGIN_BOTTOM + 14) {
        throw new Error(`Bullet overflow: ${line.slice(0, 48)}`);
      }
      if (index === 0) {
        page.drawText("•", { x: MARGIN_X, y, size: 9, font, color: ink });
      }
      page.drawText(line, {
        x: MARGIN_X + 12,
        y,
        size: 9,
        font,
        color: ink,
      });
      y -= 11;
    });
    y -= 1;
  };

  page.drawText("Rishin S Pradeep", {
    x: MARGIN_X,
    y,
    size: 18,
    font: bold,
    color: ink,
  });
  y -= 16;
  page.drawText("Senior Data Architect", {
    x: MARGIN_X,
    y,
    size: 11,
    font,
    color: ink,
  });
  y -= 13;
  draw("Bengaluru, India  |  Remote US contracts  |  9+ years (June 2017-present)", {
    size: 8.5,
    color: muted,
    gap: 10,
  });
  draw("talktorishin94@gmail.com  |  github.com/Rishin1994  |  rishinspradeep.vercel.app", {
    size: 8.5,
    color: muted,
    gap: 10,
  });
  y -= 1;
  page.drawLine({
    start: { x: MARGIN_X, y },
    end: { x: PAGE_WIDTH - MARGIN_X, y },
    thickness: 1,
    color: ink,
  });
  y -= 14;

  section("Summary");
  draw(
    "Senior Data Architect for remote US contracts. I make the architecture call and implement it: Snowflake migrations with Data Vault 2.0, governed dbt estates, Azure Synapse modernization, FinOps guardrails, and weekly written delivery. No handoff gap between strategy and code.",
    { size: 9, gap: 11 },
  );

  section("Experience");
  job("Quantiphi - Senior Data Architect", "08/2025 - Present");
  bullet(
    "Led architecture for a global CRM/SaaS program migrating 10B+ records onto Snowflake with Data Vault 2.0 hubs, links, and satellites.",
  );
  bullet(
    "Designed a six-week parallel-run cutover with external stages, idempotent Python loads, hash/row-count parity, and a rehearsed rollback window so finance reporting never went dark.",
  );
  bullet(
    "Stood up GitHub Actions promotion gates and runbooks; guided a 70+ engineer coalition on lineage, warehouse sizing, and clustering for micro-partition pruning.",
  );
  bullet(
    "Owned the target-state tradeoffs for platform vs analytics squads - marts stayed stable while source CRM keys kept changing underneath.",
  );
  bullet(
    "Left the program with documented cutover playbooks, dashboard parity packs, and a platform team that could operate without a hero weekend.",
  );

  job("Tredence - Data Architect", "12/2021 - 12/2024");
  bullet(
    "Governed a 350+ model retail analytics dbt estate into staging -> intermediate -> marts with ownership tags and materialization standards.",
  );
  bullet(
    "Implemented Slim CI, source freshness contracts, and test gates on every PR so broken changes died before the nightly SLA window.",
  );
  bullet(
    "Right-sized Snowflake warehouses with auto-suspend/auto-scale profiles by workload class; incremental models and clustering cut queue time.",
  );
  bullet(
    "Delivered 60% faster dbt model runs and 70% fewer production incidents on the same retail analytics program.",
  );
  bullet(
    "Made deploys boring: Power BI marts stayed thin, Airflow orchestration stayed predictable, and squads stopped shipping circular refs.",
  );

  job("Infosys - Data Engineer to Senior", "06/2017 - 12/2021");
  bullet(
    "Modernized an enterprise finance warehouse on Azure Synapse - distribution-aware dimensional models tuned to the real join graph.",
  );
  bullet(
    "Replaced nightly full reloads with ADF incremental watermark loads; failures became local instead of catastrophic.",
  );
  bullet(
    "Shipped row-level security and Terraform-managed observability so audit and controllers shared the same control story.",
  );
  bullet(
    "Improved query performance 4x and reduced infrastructure cost 25% while sustaining 99.9% platform SLA over 12 months.",
  );
  bullet(
    "Cleared internal audit on first review with documented RLS, pipeline health boards, and Power BI regression packs.",
  );

  section("Selected outcomes");
  bullet("10B+ records migrated with zero reporting blackout (global CRM/SaaS program at Quantiphi).");
  bullet("70% fewer production incidents and 60% faster dbt runs (retail analytics estate at Tredence).");
  bullet("4x query speed, 25% lower cloud spend, 99.9% SLA (enterprise finance warehouse at Infosys).");

  section("Core stack");
  draw(
    "Snowflake | dbt | Databricks | Delta Lake | PySpark | Azure Synapse | ADF | Data Vault 2.0 | Airflow | Python | SQL | Terraform | GitHub Actions | Power BI | CI/CD | FinOps | RBAC | lineage",
    { size: 8.5, gap: 10 },
  );

  section("Engagement");
  draw(
    "Available as an independent contractor for remote US work. Architecture decisions and hands-on delivery in the same engagement. Weekly written increments. US-hours overlap from Bengaluru. W-8BEN and tax paperwork on request.",
    { size: 9, gap: 11 },
  );

  const bytes = await pdf.save();
  writeFileSync(outPath, bytes);
  console.log(`Wrote ${outPath} (${bytes.length} bytes, 1 page)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
