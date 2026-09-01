import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Rishin S Pradeep | Senior Data Architect",
  description:
    "Senior Data Architect available for remote US contracts across Snowflake, dbt, Databricks, Azure, and modern data platforms.",
  openGraph: {
    title: "Rishin S Pradeep | Senior Data Architect",
    description:
      "I build data platforms that run faster, cost less, and stay reliable. Available for remote US contracts.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080b09",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${manrope.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
