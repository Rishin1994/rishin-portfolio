import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rishin S Pradeep — Senior Data Architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#060908",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#c9ff3d",
            fontSize: 28,
            fontFamily: "ui-monospace, monospace",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#c9ff3d",
            }}
          />
          Remote US contracts
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              color: "#f5f7f4",
              fontWeight: 400,
            }}
          >
            Rishin S Pradeep
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#c9ff3d",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            Senior Data Architect
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.72)",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              maxWidth: 900,
            }}
          >
            Snowflake · dbt · Databricks · Azure
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
