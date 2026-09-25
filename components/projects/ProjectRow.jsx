import Link from "next/link";
import Pill from "@/components/ui/Pill";
import ProjectShot from "./ProjectShot";

export default function ProjectRow({ project, index, reversed }) {
  const num = String(index + 1).padStart(2, "0");
  const href = `/projects/${project.slug}`;

  return (
    <article className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
      <Link
        href={href}
        className={`win win-link group block ${reversed ? "lg:order-2" : ""}`}
      >
        <div className="win-title">
          <span aria-hidden="true" className="inline-block h-2.5 w-2.5 bg-accent group-hover:bg-ink" />
          <span className="min-w-0 flex-1 truncate">{project.url}</span>
        </div>
        <ProjectShot project={project} sizes="(max-width: 1024px) 100vw, 50vw" />
      </Link>

      <div className={reversed ? "lg:order-1" : ""}>
        <div className="flex flex-wrap items-center gap-2 font-mono text-[12px] font-medium">
          <span className="bg-ink px-2 py-0.5 text-paper">{num}</span>
          <span className="border-2 border-ink px-2 py-px">{project.year}</span>
          <span className="flex items-center gap-2 border-2 border-ink bg-paper px-2 py-px">
            <span className="h-2 w-2 bg-ok" />
            {project.status}
          </span>
        </div>

        <Link href={href} className="group block">
          <h2 className="pixel mt-5 text-[52px] leading-[0.9] lg:text-[64px]">
            <span className="transition-colors group-hover:bg-accent">
              {project.name}
            </span>
          </h2>
        </Link>

        <p className="mt-3 font-mono text-[14px] font-medium">
          {project.tagline}
        </p>

        <p className="mt-5 max-w-[58ch] text-[16px] leading-relaxed text-mute">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </div>

        <dl className="mt-6 flex flex-wrap gap-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="border-2 border-ink bg-paper px-3 py-2">
              <dt className="label">{metric.label}</dt>
              <dd className="pixel text-[28px] leading-none">{metric.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link href={href} className="btn btn-primary btn-sm">
            Read more →
          </Link>
          {project.links.live && (
            <Link href={project.links.live} target="_blank" rel="noreferrer" className="btn btn-sm">
              Live ↗
            </Link>
          )}
          <Link href={project.links.source} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">
            Source ↗
          </Link>
        </div>
      </div>
    </article>
  );
}
