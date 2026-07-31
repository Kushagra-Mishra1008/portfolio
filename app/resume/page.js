import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import { site } from "@/content/site";

export const metadata = {
  title: "Résumé",
  description:
    "Résumé for Kushagra — AI/ML engineer, final-year CS student, AI engineering intern at Tech Mahindra.",
};

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-[1180px] px-6 pt-20 lg:px-10 lg:pt-24">
      <Eyebrow>Résumé</Eyebrow>

      <div className="mt-8 flex flex-wrap items-end justify-between gap-10">
        <div>
          <h1 className="text-hero font-extrabold leading-[1.0] tracking-[-0.03em]">
            Kushagra
          </h1>

          <p className="mt-6 max-w-[44ch] text-[17px] leading-relaxed text-ash">
            AI/ML engineer, full stack when it needs to be. The whole document
            is below, and the PDF is one tap away.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            href={site.resumeFile}
            download
            className="rounded-[4px] border border-line bg-surface px-5 py-3 font-mono text-[13px] text-bone transition-colors hover:border-ember hover:text-ember"
          >
            Download PDF
          </Link>

          <Link
            href={site.resumeFile}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-1.5 font-mono text-[13px] text-ash transition-colors hover:text-bone"
          >
            Open in new tab
            <span className="transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-16 hidden w-full max-w-[760px] overflow-hidden rounded-[6px] border border-line bg-surface md:block">
        <iframe
          src={`${site.resumeFile}#view=FitH&toolbar=0&navpanes=0`}
          title="Résumé"
          className="aspect-[8.5/11] w-full"
        />
      </div>

      <div className="mt-16 rounded-[6px] border border-line bg-surface p-8 text-center md:hidden">
        <p className="font-mono text-[13px] text-ash">
          The inline preview needs a wider screen.
        </p>
        <Link
          href={site.resumeFile}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block rounded-[4px] border border-line px-5 py-3 font-mono text-[13px] text-bone transition-colors hover:border-ember hover:text-ember"
        >
          Open the PDF ↗
        </Link>
      </div>
    </section>
  );
}