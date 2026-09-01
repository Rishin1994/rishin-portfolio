import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishin S Pradeep | Senior Data Architect",
  description:
    "Senior Data Architect available for remote US contracts across Snowflake, dbt, Databricks, Azure, and modern data platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
