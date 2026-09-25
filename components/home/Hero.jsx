import Link from "next/link";
import NeuralAnchor from "./NeuralAnchor";
import Window from "@/components/ui/Window";
import Container from "@/components/ui/Container";
import { site } from "@/content/site";
import EmailButton from "@/components/ui/EmailButton";

const boot = [
  ["name", "Kushagra Mishra"],
  ["role", "Software / AI engineer"],
  ["open_to", site.roles.join(" · ")],
  ["edu", "B.Tech CSE, VIT — 2026"],
  ["prev", "SWE Intern (AI), Tech Mahindra"],
];

export default function Hero() {
  return (
    <Container>
      <section className="grid items-center gap-12 py-12 lg:min-h-[calc(92vh-60px)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-16">
        <div>
          <p className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-2.5 py-1 font-mono text-[12px] font-medium">
            <span className="text-mute">C:\&gt;</span> whoami
          </p>

          <h1 className="pixel mt-6 text-hero leading-[0.84]">
            I build the model,
            <br />
            and the product
            <br />
            <span className="hl">around it.</span>
          </h1>

          <p className="mt-8 max-w-[50ch] text-[17px] leading-relaxed text-mute">
            I wrote a transformer from scratch — attention, training loop,
            sampler, no shortcuts — and I ship the APIs, services and frontends
            that sit on top of models like it.{" "}
            <span className="font-medium text-ink">
              I&apos;d rather understand the layer underneath
            </span>{" "}
            than call an API and hope.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/projects" className="btn btn-primary">
              See the work →
            </Link>
            <Link href={site.resumeUrl} className="btn">
              Résumé
            </Link>
            <EmailButton className="btn btn-dark">Email me</EmailButton>
          </div>
        </div>

        <Window
          title="model.exe — live"
          crt
          className="w-full lg:max-w-[560px] lg:justify-self-end"
          titleRight={
            <span className="hidden font-mono text-[11px] opacity-80 sm:inline">
              4·6·6·3
            </span>
          }
        >
          <div className="boot border-b border-phosphor-dim/60 px-4 py-3.5 text-[12px] leading-[1.7] sm:text-[13px]">
            {boot.map(([k, v], i) => (
              <p key={k} style={{ "--i": i }} className="flex gap-2">
                <span className="w-[9ch] shrink-0 text-phosphor-dim">{k}</span>
                <span className="min-w-0">{v}</span>
              </p>
            ))}
            <p style={{ "--i": boot.length }} className="mt-1">
              <span className="text-phosphor-dim">$</span>{" "}
              <span className="cursor">status: available</span>
            </p>
          </div>
          <NeuralAnchor />
          <p className="px-4 pb-3 text-[11px] text-phosphor-dim">
            hover the input layer to fire a forward pass
          </p>
        </Window>
      </section>
    </Container>
  );
}
