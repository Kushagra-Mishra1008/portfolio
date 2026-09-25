export const roles = [
  {
    title: "Software Engineering Intern",
    focus: "AI",
    org: "Tech Mahindra — Makers Lab",
    location: "Hyderabad, IN",
    mode: "On-site",
    start: "Jun 2026",
    end: "Aug 2026",
    current: false,
    summary:
      "Built an in-app AI guidance assistant for the Transition Workbench, an internal platform used across delivery teams — and owned it end to end: the LLM pipeline, the FastAPI backend, the React client, and the production deployment.",
    stack: ["LangGraph", "ChromaDB", "FastAPI", "React", "Render", "Netlify", "GCP"],
    groups: [
      {
        label: "AI",
        highlight: true,
        bullets: [
          "Designed a 4-node LangGraph pipeline — intent routing, knowledge retrieval, capability matching, response generation — behind the assistant.",
          "Replaced full-context prompt injection with semantic search over ChromaDB (all-MiniLM-L6-v2 embeddings), retrieving by relevance for both the knowledge base and capability matching.",
          "Cut the pipeline from 3 to 2 LLM calls per query (~33% fewer) by merging nodes behind a single intent router, lowering latency and token cost per turn.",
        ],
      },
      {
        label: "Backend",
        bullets: [
          "Built the FastAPI service that runs the pipeline and serves a React popup client embedded inside the host platform.",
          "Redesigned session management with server-side routing and session-scoped storage, with summarisation so the assistant keeps context across follow-up questions.",
        ],
      },
      {
        label: "SWE & delivery",
        bullets: [
          "Deployed the full stack to production on Render, ChromaDB Cloud and Netlify, with a documented migration path to GCP (Cloud Run, Firebase Hosting, Secret Manager).",
          "Authored technical reports on agentic frameworks, vector databases and GCP deployment — including a 14-page review of LangChain, LangGraph, CrewAI, AutoGen, OpenAI Agents SDK and Semantic Kernel used to pick the stack.",
        ],
      },
    ],
  },
];

export const education = {
  degree: "B.Tech, Computer Science and Engineering",
  school: "Vellore Institute of Technology",
  years: "2022 – 2026",
  location: "Vellore, IN",
  highlights: ["CGPA 8.19 / 10", "Graduated 2026"],
};

export const certifications = [
  {
    name: "Generative AI",
    issuer: "IBM",
    year: "2026",
    href: "#",
  },
];