import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Manrope } from "next/font/google";
import { InteractiveBackdrop } from "./components/InteractiveBackdrop";
import { MagneticButtons } from "./components/MagneticButtons";
import {
  contact,
  hasValidLinkedIn,
  hasValue,
  siteUrl,
} from "./data/portfolio";
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

const title = "Rishin S Pradeep | Senior Data Architect";
const description =
  "Senior Data Architect for remote US contracts — Snowflake, dbt, Databricks, Azure. Architecture decisions and hands-on delivery. No handoff gap.";

const sameAs = [
  hasValidLinkedIn(contact.linkedin) ? contact.linkedin : null,
  hasValue(contact.github) ? contact.github : null,
].filter(Boolean) as string[];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Rishin S Pradeep",
  },
  description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Rishin S Pradeep",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#060908",
};

function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rishin S Pradeep",
    jobTitle: "Senior Data Architect",
    url: siteUrl,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
    ...(sameAs.length ? { sameAs } : {}),
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Rishin S Pradeep — Data Architecture",
    description,
    url: siteUrl,
    areaServed: "United States",
    serviceType: "Data architecture consulting",
    provider: {
      "@type": "Person",
      name: "Rishin S Pradeep",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
    </>
  );
}

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
      <body>
        <JsonLd />
        <InteractiveBackdrop />
        <div className="grain" aria-hidden="true" />
        <MagneticButtons />
        {children}
      </body>
    </html>
  );
}
