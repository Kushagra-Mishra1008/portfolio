import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://kushagra.dev"),
  title: {
    default: "Kushagra — AI/ML engineer",
    template: "%s — Kushagra",
  },
  description:
    "Final-year CS student and AI engineering intern. I build transformers from scratch and the products around them.",
  openGraph: {
    type: "website",
    siteName: "Kushagra",
    title: "Kushagra — AI/ML engineer",
    description:
      "Final-year CS student and AI engineering intern. I build transformers from scratch and the products around them.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushagra — AI/ML engineer",
    description:
      "Final-year CS student and AI engineering intern. I build transformers from scratch and the products around them.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${jetbrains.variable}`}
    >
      <body className="bg-ink text-bone">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}