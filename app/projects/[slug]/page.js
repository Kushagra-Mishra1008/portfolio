import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Pill from "@/components/ui/Pill";
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

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <section className="mx-auto max-w-[1180px] px-6 pt-14 lg:px-10 lg:pt-20">
      <Link
        href="/projects"
        className="group flex items-center gap-2 font-mono text-[13px] text-ash transition-colors hover:text-bone"
      >
        <span className="transition-transform group-hover:-translate-x-0.5">
          ←
        </span>
        All projects
      </Link>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <span className="font-mono text-[12px] text-ember">
          {project.year}
        </span>
        <span className="h-px w-6 bg-line" />
        <span className="font-mono text-[12px] text-ash">
          {project.tagline}
        </span>
        <span className="h-px w-6 bg-line" />
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          <span className="font-mono text-[12px] text-ember">
            {project.status}
          </span>
        </span>
      </div>

      <h1 className="mt-6 text-hero font-extrabold leading-[1.0] tracking-[-0.03em]">
        {project.name}
      </h1>

      <p className="mt-7 max-w-[62ch] text-[17px] leading-relaxed text-ash">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-7">
        <Link
          href={project.links.live}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-1.5 font-mono text-[13px] text-ember transition-colors hover:text-bone"
        >
          Live
          <span className="transition-transform group-hover:translate-x-0.5">
            ↗
          </span>
        </Link>

        <Link
          href={project.links.source}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-1.5 font-mono text-[13px] text-ash transition-colors hover:text-bone"
        >
          Source
          <span className="transition-transform group-hover:translate-x-0.5">
            ↗
          </span>
        </Link>
      </div>

      <div className="mt-10 flex flex-wrap items-baseline gap-10">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="flex items-baseline gap-2">
            <span className="text-[30px] font-bold tracking-tight text-bone">
              {metric.value}
            </span>
            <span className="font-mono text-[12px] text-ash">
              {metric.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-14 overflow-hidden rounded-[6px] border border-line bg-surface">
        <div className="flex items-center gap-2 border-b border-line px-3 py-2.5">
          <span className="h-2 w-2 rounded-full bg-[#2A2A28]" />
          <span className="h-2 w-2 rounded-full bg-[#2A2A28]" />
          <span className="h-2 w-2 rounded-full bg-[#2A2A28]" />
          <span className="ml-2 truncate font-mono text-[11px] text-ash">
            {project.url}
          </span>
        </div>

        <div className="relative aspect-[16/9] w-full bg-ink">
          <Image
            src={project.image}
            alt={`${project.name} interface`}
            fill
            sizes="(max-width: 1180px) 100vw, 1180px"
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      <div className="mt-20 grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
        <div className="space-y-6">
          {project.body.map((para) => (
            <p
              key={para.slice(0, 24)}
              className="max-w-[64ch] text-[16px] leading-relaxed text-ash"
            >
              {para}
            </p>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-ember" />
            <span className="label">Highlights</span>
          </div>

          <ul className="mt-6 space-y-5">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-2.5 h-px w-4 shrink-0 bg-ember" />
                <span className="text-[15px] leading-relaxed text-ash">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex items-center gap-3">
            <span className="h-px w-4 bg-ember" />
            <span className="label">Built with</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Pill key={tech}>{tech}</Pill>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 border-t border-line pt-10">
        <Link
          href={`/projects/${next.slug}`}
          className="group flex items-center justify-between gap-6"
        >
          <span className="label">Next project</span>
          <span className="flex items-center gap-3 text-[24px] font-bold tracking-[-0.02em] transition-colors group-hover:text-ember lg:text-[30px]">
            {next.name}
            <span className="text-[18px] transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}