import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Currently() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pt-28 lg:px-10 lg:pt-40">
      <Eyebrow>Currently</Eyebrow>

      <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
        <div>
          <h2 className="text-section font-extrabold leading-[1.05] tracking-[-0.025em]">
            AI Engineering Intern
            <span className="text-ash"> at Tech Mahindra.</span>
          </h2>

          <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-ash">
            Building an agentic guidance assistant at Makers Lab, while
            finishing a B.Tech in CS at VIT.
          </p>
        </div>

        <Link
          href="/work"
          className="group flex items-center gap-1.5 font-mono text-[13px] text-ash transition-colors hover:text-bone"
        >
          See the full path
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}