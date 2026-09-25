import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Container from "@/components/ui/Container";
import Window from "@/components/ui/Window";
import { site } from "@/content/site";

export const metadata = {
  title: "Résumé",
  description:
    "Résumé for Kushagra Mishra — software & AI engineer, VIT CS graduate, former AI engineering intern at Tech Mahindra.",
};

export default function ResumePage() {
  return (
    <Container narrow className="pt-14 lg:pt-20">
      <section>
        <Eyebrow>C:\Resume</Eyebrow>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-10">
          <div>
            <h1 className="pixel text-hero leading-[0.84]">
              Kushagra <span className="hl">Mishra</span>
            </h1>

            <p className="mt-6 max-w-[48ch] text-[17px] leading-relaxed text-mute">
              Software & AI engineer — open to AI/ML, backend, full-stack and
              SDE roles. The whole document is below, and the PDF is one click
              away.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href={site.resumeFile} download className="btn btn-primary">
              ↓ Download PDF
            </Link>
            <Link href={site.resumeFile} target="_blank" rel="noreferrer" className="btn">
              Open in new tab ↗
            </Link>
          </div>
        </div>

        <Window
          title="Kushagra-Mishra-Resume.pdf"
          className="mx-auto mt-14 hidden w-full max-w-[820px] md:flex"
        >
          <iframe
            src={`${site.resumeFile}#view=FitH&toolbar=0&navpanes=0`}
            title="Résumé"
            loading="lazy"
            className="block aspect-[8.5/11] w-full bg-white"
          />
        </Window>

        <Window title="resume.pdf" className="mt-12 md:hidden" bodyClassName="p-8 text-center">
          <p className="font-mono text-[13px] text-mute">
            The inline preview needs a wider screen.
          </p>
          <Link href={site.resumeFile} target="_blank" rel="noreferrer" className="btn btn-primary mt-5">
            Open the PDF ↗
          </Link>
        </Window>
      </section>
    </Container>
  );
}
