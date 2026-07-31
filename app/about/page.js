import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import Pill from "@/components/ui/Pill";
import { facts, bio, toolGroups } from "@/content/about";

export const metadata = {
  title: "About",
  description:
    "Final-year CS student building transformers from scratch and the systems that put them in front of people.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pt-20 lg:px-10 lg:pt-24">
      <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[6px] border border-line bg-surface">
            <Image
              src="/me.png"
              alt="Kushagra"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </div>

          <dl className="mt-10 divide-y divide-line border-t border-line">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[auto_1fr] gap-6 py-4"
              >
                <dt className="label pt-0.5">{fact.label}</dt>
                <dd className="text-right font-mono text-[13px] text-bone">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h1 className="text-[clamp(2rem,3.6vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.028em]">
            I wanted to know what was
            <br />
            behind the API call, so I
            <br />
            <span className="text-ember">built the thing myself.</span>
          </h1>

          <div className="mt-10 space-y-6">
            {bio.map((para) => (
              <p
                key={para.slice(0, 24)}
                className="max-w-[64ch] text-[16px] leading-relaxed text-ash"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-28 lg:mt-36">
        <Eyebrow>Tools I reach for</Eyebrow>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {toolGroups.map((group) => (
            <div key={group.title}>
              <div className="flex items-center gap-3">
                <span className="h-px w-4 bg-ember" />
                <span className="label">{group.title}</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}   