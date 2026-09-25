export const projects = [
  {
    slug: "review-swarm",
    name: "Review Swarm",
    year: "2026",
    url: "github.com/Kushagra-Mishra1008/review_swarm",
    tagline: "A multi-agent system that reviews GitHub pull requests",
    description:
      "Six agents across three tiers, coordinated by LangGraph, reviewing real pull requests inside an 8K tokens-per-minute free-tier budget. Evaluated against 19 merged scikit-learn PRs with human review comments, and benchmarked against a single-agent baseline to test whether the architecture earns its complexity.",
    body: [
      "A Review Lead triages each pull request and decides which specialists to wake — security, testing, performance, maintainability. Specialists decide which files are worth scanning, and cheap per-file workers on a smaller model do the narrow inspection in a separate rate-limit pool. Everything deterministic — routing, dedupe, ranking, diff parsing — is plain Python, and semgrep and ruff run first so their output reaches the specialists as evidence to judge rather than findings to trust.",
      "The whole thing runs on Groq's free tier, so every LLM call goes through one gateway that owns a sliding-window token bucket, a daily ledger, a disk cache, cache-friendly prompt ordering, and a concurrency cap. Specialists fan out in parallel and the gateway quietly meters them. The full evaluation finished with zero 429s. Retrieval comes from a Repo Index MCP server I wrote: tree-sitter chunks, MiniLM embeddings in ChromaDB, and ripgrep exact-match merged by reciprocal rank fusion.",
      "Measuring it was the most useful part. Against human review comments the swarm reached 17.3% precision versus 9.8% for a single-agent baseline, at lower recall and about 3.4x the tokens — and I report both sides. Building the eval harness also caught three bugs that all returned \"no issues found\" instead of failing: off-spec severity strings, reasoning-token exhaustion producing empty completions, and specialists selecting zero files. A silent pass is the worst failure mode a review tool can have.",
    ],
    highlights: [
      "Hierarchical LangGraph swarm — lead, four specialists, per-file workers — on two model sizes with separate rate-limit pools.",
      "Custom LLM gateway: token bucket, daily ledger, disk cache and concurrency cap. Zero 429s across the full eval run.",
      "Authored a Repo Index MCP server with hybrid vector + ripgrep search; consumes the official GitHub and Filesystem MCP servers.",
      "Eval harness over 19 scikit-learn PRs vs a single-agent baseline: 17.3% vs 9.8% precision, with caveats reported.",
      "React + SSE frontend streaming the agent graph live, plus a static replay mode that needs no backend or tokens.",
    ],
    stack: ["LangGraph", "Python", "FastAPI", "MCP", "ChromaDB", "tree-sitter", "React", "Groq"],
    metrics: [
      { value: "17.3%", label: "precision vs 9.8% baseline" },
      { value: "6 · 3", label: "agents · tiers" },
    ],
    status: "Open source",
    image: "/shots/swarm.jpg",
    links: {
      live: null,
      source: "https://github.com/Kushagra-Mishra1008/review_swarm",
    },
  },
  {
    slug: "microgpt",
    name: "MicroGPT",
    year: "2026",
    url: "https://microgpt-attention-xray.netlify.app/",
    tagline: "A transformer built from scratch, and a way to see inside it",
    description:
      "A decoder-only GPT written from first principles in PyTorch — attention, positional embeddings, training loop, sampler, no framework shortcuts. Attention X-Ray sits on top of it: type a sentence and watch which tokens each head reaches for, layer by layer.",
    body: [
      "Every tutorial hands you a pretrained model and a fine-tuning script. I wanted the part underneath, so I wrote the whole thing — scaled dot-product attention, multi-head projection, positional embeddings, residual stream, layer norm, the training loop, and the sampler. No transformers library, no lightning wrapper.",
      "Training runs on both a Colab T4 and locally on an RTX 4060, checkpointing as it goes. The small config is 384-dimensional across six layers and six heads; a medium config runs wider and deeper. Both exist in character-level and word-level tokenizer variants, which turned out to matter more than expected — a BPE tokenizer makes attention patterns legible in a way single characters never do.",
      "Attention X-Ray is the part that made the model teach me something. A FastAPI server exposes the attention tensors per layer and head, and the frontend draws them as arcs between token pills alongside a causal heat map. Watching a head in the middle of the stack quietly learn to attend one token backwards — nobody told it to — is the closest thing to seeing a model think.",
    ],
    highlights: [
      "Attention, embeddings, training loop, and sampler written by hand in PyTorch — no framework doing the interesting parts.",
      "Custom BPE tokenizer built to replace character-level tokens, with both variants kept side by side for comparison.",
      "FastAPI inference server exposing attention weights per layer and head, streaming generation over SSE.",
      "Browser visualiser rendering attention arcs, causal heat maps, and per-head entropy in real time.",
    ],
    stack: ["PyTorch", "Python", "FastAPI", "React", "BPE", "CUDA"],
    metrics: [
      { value: "384d", label: "embedding" },
      { value: "6L · 6H", label: "layers · heads" },
    ],
    status: "Actively developed",
    image: "/shots/micro.jpg",
    links: {
      live: "https://microgpt-attention-xray.netlify.app/",
      source: "https://github.com/Kushagra-Mishra1008/microgpt-attention-xray",
    },
  },
  {
    slug: "enterprise-ai-workspace",
    name: "Enterprise AI Workspace",
    year: "2026",
    url: "https://enterprise-ai-workspace.netlify.app/",
    tagline: "Ask questions of your own documents",
    description:
      "A retrieval-augmented document platform. Upload a PDF and it gets chunked, embedded, and stored, then answered against with citations back to the exact pages.",
    body: [
      "Most document chatbots fail the same way: you ask something slightly vague, retrieval returns the wrong chunks, and the model confidently answers from them. The fix isn't a bigger model, it's a better question — so a rewriting step widens the query before it ever touches the vector store.",
      "The pipeline is deliberately boring and inspectable. A PDF comes in, gets split into overlapping chunks, embedded, and persisted to ChromaDB, with metadata in MySQL alongside it. A question gets rewritten, embedded, matched, and passed to the model with the retrieved context and the page numbers it came from. Every answer carries its citations, so you can check the source rather than trusting the output.",
      "It's a full application rather than a notebook — FastAPI service, React frontend, document management, and separate views for chat, summarisation, and translation over the same corpus.",
    ],
    highlights: [
      "Query rewriting before retrieval, which is usually the difference between a useless answer and a good one.",
      "Page-level citations on every answer, so nothing has to be taken on trust.",
      "ChromaDB for vectors with MySQL for document metadata, persisted to disk rather than held in memory.",
      "Separate chat, summary, and translation views over the same indexed corpus.",
    ],
    stack: ["React", "FastAPI", "LangChain", "ChromaDB", "MySQL", "Groq"],
    metrics: [
      { value: "RAG", label: "with citations" },
      { value: "PDF", label: "chunk · embed · query" },
    ],
    status: "Live",
    image: "/shots/enterprise.jpg",
    links: {
      live: "https://enterprise-ai-workspace.netlify.app/",
      source: "https://github.com/Kushagra-Mishra1008/enterprise-ai-workspace",
    },
  },
  {
    slug: "mediavault",
    name: "MediaVault",
    year: "2026",
    url: "https://mediavault67.netlify.app/",
    tagline: "Track everything you're watching, playing, and reading",
    description:
      "A media library that treats games, films, and manga as one collection rather than three apps, with an LLM endpoint that suggests what to pick up next.",
    body: [
      "I was keeping three separate lists — one for games, one for films, one for manga — and none of them talked to each other. MediaVault collapses them into a single collection with shared status tracking, so everything moves through the same states regardless of what it is.",
      "The backend is Spring Boot with JWT authentication and a MySQL store, which made it the project where I learned the Java side of things properly — entity mapping, the security filter chain, token refresh. The frontend is React, with filtering by status and type across the whole library.",
      "The recommendation endpoint passes what you've finished and rated to a model and asks what fits next. It's a small feature, but it's the one that turns a list into something that suggests rather than just records.",
    ],
    highlights: [
      "One collection across games, films, and manga instead of three disconnected lists.",
      "Spring Boot backend with JWT auth, refresh tokens, and a MySQL persistence layer.",
      "LLM recommendation endpoint fed by completed and rated items.",
      "Status filtering — planned, in progress, completed, dropped, on hold — across the full library.",
    ],
    stack: ["Spring Boot", "Java", "React", "JWT", "MySQL"],
    metrics: [
      { value: "3", label: "media types" },
      { value: "JWT", label: "auth" },
    ],
    status: "Live",
    image: "/shots/media.jpg",
    links: {
      live: "https://mediavault67.netlify.app/",
      source: "https://github.com/Kushagra-Mishra1008/mediavault",
    },
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}