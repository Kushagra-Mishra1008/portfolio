import { site } from "@/content/site";

const words = [
  "Open to work",
  ...site.roles,
  "PyTorch",
  "FastAPI",
  "Spring Boot",
  "React / Next.js",
  "LangGraph",
  "RAG",
];

function Row({ hidden }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex shrink-0">
      {words.map((w) => (
        <span
          key={w}
          className="pixel flex items-center gap-6 px-6 text-[30px] leading-none whitespace-nowrap"
        >
          {w}
          <span className="text-accent">✱</span>
        </span>
      ))}
    </div>
  );
}

// Pure CSS transform loop — runs on the compositor, pauses on hover.
export default function Marquee() {
  return (
    <div className="marquee-wrap overflow-hidden border-y-2 border-ink bg-ink py-3 text-paper">
      <div className="marquee">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
