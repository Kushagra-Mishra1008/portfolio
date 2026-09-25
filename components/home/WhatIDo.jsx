import Eyebrow from "@/components/ui/Eyebrow";
import Container from "@/components/ui/Container";

const rows = [
  {
    num: "01",
    title: "Model internals",
    tags: ["PyTorch", "Transformers", "Tokenizers"],
    body: "Transformers written from first principles — attention, positional embeddings, tokenizers, training loops. I build them to understand them, then use that to debug the ones I didn't write.",
  },
  {
    num: "02",
    title: "Applied AI systems",
    tags: ["RAG", "LangGraph", "Agents"],
    body: "Retrieval pipelines, agent orchestration, and guidance assistants that go to real users inside an enterprise, where being wrong has a cost and latency is somebody's complaint.",
  },
  {
    num: "03",
    title: "Backend & full-stack",
    tags: ["FastAPI", "Spring Boot", "React"],
    body: "FastAPI and Spring Boot services, SQL schemas, auth, React frontends, deployment. A model that nobody can reach isn't finished — and plenty of good software has no model in it at all.",
  },
];

export default function WhatIDo() {
  return (
    <Container className="pt-24 lg:pt-32">
      <section>
        <Eyebrow num="02">What I do</Eyebrow>

        <div className="mt-10 grid border-2 border-ink bg-paper shadow-[var(--shadow-hard)] md:grid-cols-3">
          {rows.map((row, i) => (
            <div
              key={row.num}
              className={`group flex flex-col p-6 transition-colors duration-150 hover:bg-ink hover:text-paper lg:p-8 ${
                i > 0 ? "border-t-2 border-ink md:border-t-0 md:border-l-2" : ""
              }`}
            >
              <span className="pixel text-[64px] leading-none text-accent">
                {row.num}
              </span>
              <h3 className="mt-4 font-mono text-[18px] font-bold uppercase tracking-[0.02em]">
                {row.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mute transition-colors group-hover:text-paper/75">
                {row.body}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 pt-1">
                {row.tags.map((t) => (
                  <span
                    key={t}
                    className="border-2 border-current px-2 py-0.5 font-mono text-[11px] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
