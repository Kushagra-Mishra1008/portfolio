export const projects = [
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