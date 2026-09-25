import Link from "next/link";
import ProjectShot from "@/components/projects/ProjectShot";

export default function ProjectCard({ project, index }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="win win-link group flex flex-col"
    >
      <div className="win-title">
        <span aria-hidden="true" className="inline-block h-2.5 w-2.5 bg-accent group-hover:bg-ink" />
        <span className="min-w-0 flex-1 truncate">{project.slug}.exe</span>
        <span className="font-mono text-[11px] opacity-80">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="border-b-2 border-ink">
        <ProjectShot
          project={project}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="pixel text-[36px] leading-none">{project.name}</h3>
          <span className="font-mono text-[12px] text-mute">{project.year}</span>
        </div>

        <p className="mt-3 text-[15px] leading-snug text-mute">
          {project.tagline}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="flex items-center gap-2 font-mono text-[12px] font-medium">
            <span className="h-2.5 w-2.5 border-2 border-ink bg-ok" />
            {project.status}
          </span>
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.06em] transition-transform duration-150 group-hover:translate-x-1">
            Open →
          </span>
        </div>
      </div>
    </Link>
  );
}
