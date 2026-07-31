import Eyebrow from "@/components/ui/Eyebrow";

const rows = [
  {
    num: "01",
    title: "Model internals",
    body: "Transformers written from first principles — attention, positional embeddings, tokenizers, training loops. I build them to understand them, then use that to debug the ones I didn't write.",
  },
  {
    num: "02",
    title: "Applied AI systems",
    body: "Retrieval pipelines, agent orchestration, and guidance assistants that go to real users inside an enterprise, where being wrong has a cost and latency is somebody's complaint.",
  },
  {
    num: "03",
    title: "The product around it",
    body: "FastAPI and Spring Boot services, React frontends, auth, persistence, deployment. A model that nobody can reach isn't finished.",
  },
];

export default function WhatIDo() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pt-28 lg:px-10 lg:pt-40">
      <Eyebrow>What I do</Eyebrow>

      <div className="mt-12 border-t border-line">
        {rows.map((row) => (
          <div
            key={row.num}
            className="grid gap-4 border-b border-line py-8 md:grid-cols-[0.9fr_1.6fr] md:gap-12 lg:py-10"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[13px] text-ember">
                {row.num}
              </span>
              <h3 className="text-[21px] font-bold tracking-[-0.01em]">
                {row.title}
              </h3>
            </div>

            <p className="max-w-[62ch] text-[16px] leading-relaxed text-ash">
              {row.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}