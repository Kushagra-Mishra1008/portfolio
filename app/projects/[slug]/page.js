import Link from "next/link";
import { notFound } from "next/navigation";
import Pill from "@/components/ui/Pill";
import Container from "@/components/ui/Container";
import ProjectShot from "@/components/projects/ProjectShot";
import { projects, getProject } from "@/content/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.name,
    description: project.tagline,
  };
}

function SideHeading({ children }) {
  return (
    <h2 className="bg-ink px-2 py-1 font-mono text-[11px] font-medium tracking-[0.14em] text-paper uppercase">
      {children}
    </h2>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <Container narrow className="pt-10 lg:pt-14">
      <section>
        <Link href="/projects" className="btn btn-sm">
          ← All projects
        </Link>

        <div className="mt-10 flex flex-wrap items-center gap-2 font-mono text-[12px] font-medium">
          <span className="bg-ink px-2 py-0.5 text-paper">{project.year}</span>
          <span className="border-2 border-ink bg-paper px-2 py-px">
            {project.tagline}
          </span>
          <span className="flex items-center gap-2 border-2 border-ink bg-paper px-2 py-px">
            <span className="h-2 w-2 bg-ok" />
            {project.status}
          </span>
        </div>

        <h1 className="pixel mt-6 text-hero leading-[0.84]">{project.name}</h1>

        <p className="mt-7 max-w-[62ch] text-[17px] leading-relaxed text-mute">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href={project.links.live} target="_blank" rel="noreferrer" className="btn btn-primary">
            Live ↗
          </Link>
          <Link href={project.links.source} target="_blank" rel="noreferrer" className="btn btn-dark">
            Source ↗
          </Link>
          {project.metrics.map((metric) => (
            <span key={metric.label} className="flex items-baseline gap-2 border-2 border-ink bg-paper px-3 py-1.5">
              <span className="pixel text-[26px] leading-none">{metric.value}</span>
              <span className="font-mono text-[11px] text-mute">{metric.label}</span>
            </span>
          ))}
        </div>

        <div className="win mt-12">
          <div className="win-title">
            <span aria-hidden="true" className="inline-block h-2.5 w-2.5 bg-accent" />
            <span className="min-w-0 flex-1 truncate">{project.url}</span>
            <span aria-hidden="true" className="flex gap-1">
              <span className="win-ctrl">_</span>
              <span className="win-ctrl">□</span>
              <span className="win-ctrl">×</span>
            </span>
          </div>
          <ProjectShot
            project={project}
            aspect="aspect-[16/9]"
            sizes="(max-width: 1180px) 100vw, 1180px"
            priority
          />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="space-y-6">
            {project.body.map((para) => (
              <p
                key={para.slice(0, 24)}
                className="max-w-[64ch] text-[16px] leading-relaxed text-ink/80"
              >
                {para}
              </p>
            ))}
          </div>

          <aside className="space-y-10">
            <div className="border-2 border-ink bg-paper">
              <SideHeading>Highlights</SideHeading>
              <ul className="divide-y-2 divide-ink">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3 px-4 py-3">
                    <span className="font-mono text-[13px] font-bold text-accent">▸</span>
                    <span className="text-[14px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SideHeading>Built with</SideHeading>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Pill key={tech}>{tech}</Pill>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <Link
          href={`/projects/${next.slug}`}
          className="win win-link group mt-20 flex items-center justify-between gap-6 p-6"
        >
          <span className="label">Next project</span>
          <span className="pixel flex items-center gap-3 text-[40px] leading-none lg:text-[52px]">
            {next.name}
            <span className="transition-transform duration-150 group-hover:translate-x-1.5">→</span>
          </span>
        </Link>
      </section>
    </Container>
  );
}
