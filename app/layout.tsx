import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { site } from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://imran-khan-batezai.vercel.app";

const title =
  "Dr. Imran Khan Batezai | Ph.D. Scholar | Research Analyst | Data Analyst";
const description =
  "Professional portfolio of Dr. Imran Khan Batezai, a Ph.D. Scholar in Education, Research Analyst, Survey Expert, Data Analyst, and Monitoring & Evaluation professional.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Research Analyst",
    "Data Analyst",
    "Monitoring and Evaluation",
    "Education Research",
    "Survey Expert",
    "Public Health Data",
    "Quantitative Research",
    "Qualitative Research",
    "Pakistan",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Peshawar",
    addressRegion: "Khyber Pakhtunkhwa",
    addressCountry: "PK",
  },
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of Peshawar",
  },
  knowsAbout: [
    "Monitoring and Evaluation",
    "Education Research",
    "Survey Design",
    "Data Analysis",
    "Public Health Data",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
