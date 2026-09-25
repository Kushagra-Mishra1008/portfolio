import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import Container from "@/components/ui/Container";
import Window from "@/components/ui/Window";
import Pill from "@/components/ui/Pill";
import { facts, bio, toolGroups } from "@/content/about";

export const metadata = {
  title: "About",
  description:
    "CS graduate building transformers from scratch and the systems that put them in front of people.",
};

export default function AboutPage() {
  return (
    <Container className="pt-14 lg:pt-20">
      <section>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <Window title="me.png">
              <div className="relative aspect-[4/5] w-full bg-sunk">
                <Image
                  src="/me.png"
                  alt="Kushagra"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Window>

            <dl className="mt-8 border-2 border-ink bg-paper">
              {facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`grid grid-cols-[auto_1fr] gap-6 px-4 py-3 ${
                    i > 0 ? "border-t-2 border-ink" : ""
                  }`}
                >
                  <dt className="label pt-0.5">{fact.label}</dt>
                  <dd className="text-right font-mono text-[13px] font-medium">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <Eyebrow>C:\About\readme.txt</Eyebrow>

            <h1 className="pixel mt-8 text-[clamp(2.8rem,5.5vw,4.75rem)] leading-[0.88]">
              I wanted to know what was behind the API call, so I{" "}
              <span className="hl">built the thing myself.</span>
            </h1>

            <div className="mt-10 space-y-6">
              {bio.map((para) => (
                <p
                  key={para.slice(0, 24)}
                  className="max-w-[64ch] text-[16px] leading-relaxed text-ink/80"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 lg:mt-32">
          <Eyebrow>Tools I reach for</Eyebrow>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {toolGroups.map((group) => (
              <Window key={group.title} title={`${group.title}.dir`} bodyClassName="p-5">
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </Window>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
