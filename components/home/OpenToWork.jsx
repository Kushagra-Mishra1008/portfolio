import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Container from "@/components/ui/Container";
import Window from "@/components/ui/Window";
import { site } from "@/content/site";

export default function OpenToWork() {
  return (
    <Container className="pt-24 lg:pt-32">
      <section>
        <Eyebrow num="03">Status</Eyebrow>

        <Window title="status.txt" className="mt-10" bodyClassName="p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <h2 className="pixel text-section leading-[0.9]">
                Graduated. <span className="hl">Open to work.</span>
              </h2>
              <p className="mt-6 max-w-[56ch] text-[16px] leading-relaxed text-mute">
                B.Tech in Computer Science from VIT, class of 2026, with an AI
                engineering internship at Tech Mahindra&apos;s Makers Lab behind
                me. I&apos;m looking for my first full-time role and I&apos;m
                happy anywhere between the model and the product.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {site.roles.map((r) => (
                  <li key={r} className="chip bg-desk">
                    ✓ {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <Link href={`mailto:${site.email}`} className="btn btn-primary justify-center">
                Email me →
              </Link>
              <Link href={site.resumeUrl} className="btn justify-center">
                View résumé
              </Link>
              <Link href="/work" className="btn btn-dark justify-center">
                Experience
              </Link>
            </div>
          </div>
        </Window>
      </section>
    </Container>
  );
}
