import { ViewTransition } from "react";
import { IBM_Plex_Mono, IBM_Plex_Sans, VT323 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const pixel = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plex-mono",
  display: "swap",
});

const description =
  "Software engineer and VIT CS graduate. I build transformers from scratch and the backends and products around them. Open to AI/ML, backend, full-stack and SDE roles.";

export const metadata = {
  metadataBase: new URL("https://kushagra.dev"),
  title: {
    default: "Kushagra — Software & AI engineer",
    template: "%s — Kushagra",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "Kushagra",
    title: "Kushagra — Software & AI engineer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushagra — Software & AI engineer",
    description,
  },
};

export const viewport = {
  themeColor: "#E4DFD1",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${pixel.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="desk flex min-h-dvh flex-col">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <ViewTransition default="page">
          <main id="content" className="flex-1">
            {children}
          </main>
        </ViewTransition>
        <Footer />
      </body>
    </html>
  );
}
