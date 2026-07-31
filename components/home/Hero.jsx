import Link from "next/link";
import NeuralAnchor from "./NeuralAnchor";
import { site } from "@/content/site";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-10">
      <div className="grid min-h-[calc(85vh-72px)] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-0">
        <div>
          <h1 className="text-hero font-extrabold leading-[0.98] tracking-[-0.03em]">
            I build the model,
            <br />
            and the product
            <br />
            <span className="text-ember">around it.</span>
          </h1>

          <p className="mt-8 max-w-[46ch] text-[17px] leading-relaxed text-ash">
            I wrote a transformer from scratch — attention, training loop,
            sampler, no shortcuts — and I ship the systems that sit on top of
            models like it.{" "}
            <span className="text-bone">
              I&apos;d rather understand the layer underneath
            </span>{" "}
            than call an API and hope.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="/projects"
              className="group flex items-center gap-2 rounded-[4px] border border-line px-5 py-3 font-mono text-[13px] text-bone transition-colors hover:border-ember hover:text-ember"
            >
              See the work
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>

            <Link
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[13px] text-ash transition-colors hover:text-bone"
            >
              Résumé ↗
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <NeuralAnchor />
        </div>
      </div>
    </section>
  );
}