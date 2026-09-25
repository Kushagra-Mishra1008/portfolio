export const roles = [
  {
    title: "AI Engineering Intern",
    org: "Tech Mahindra — Makers Lab",
    location: "Hyderabad, IN",
    mode: "On-site",
    start: "Jun 2026",
    end: "Aug 2026",
    current: false,
    summary:
      "Built an agentic guidance assistant for the Transition Workbench, an internal platform used across delivery teams.",
    bullets: [
      "Built the TWB Assistant end to end — a LangGraph pipeline behind a FastAPI service, with a React popup client embedded in the host platform.",
      "Redesigned the pipeline from a multi-hop chain into a two-call architecture — an intent router feeding a merged capability node — cutting latency and token cost per turn.",
      "Added session summarisation and follow-up handling so the assistant holds context across a conversation instead of treating every question as new.",
      "Wrote a 14-page technical review of agentic frameworks — LangChain, LangGraph, CrewAI, AutoGen, OpenAI Agents SDK, Semantic Kernel — used internally to pick the stack.",
    ],
  },
];

export const education = {
  degree: "B.Tech, Computer Science and Engineering",
  school: "Vellore Institute of Technology",
  years: "2022 – 2026",
  location: "Vellore, IN",
  highlights: ["CGPA 8.16 / 10", "Graduated August 2026"],
};

export const certifications = [
  {
    name: "Generative AI",
    issuer: "IBM",
    year: "2026",
    href: "#",
  },
];