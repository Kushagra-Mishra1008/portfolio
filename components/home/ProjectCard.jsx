import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="overflow-hidden rounded-[6px] border border-line bg-surface transition-colors group-hover:border-ash/40">
        <div className="flex items-center gap-2 border-b border-line px-3 py-2.5">
          <span className="h-2 w-2 rounded-full bg-[#2A2A28]" />
          <span className="h-2 w-2 rounded-full bg-[#2A2A28]" />
          <span className="h-2 w-2 rounded-full bg-[#2A2A28]" />
          <span className="ml-2 truncate font-mono text-[11px] text-ash">
            {project.url}
          </span>
        </div>

        <div className="relative aspect-[16/10] w-full bg-ink">
          <Image
            src={project.image}
            alt={`${project.name} interface`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top opacity-90 transition-opacity group-hover:opacity-100"
          />
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-[20px] font-bold tracking-[-0.01em] transition-colors group-hover:text-ember">
            {project.name}
          </h3>
          <span className="font-mono text-[12px] text-ash">
            {project.year}
          </span>
        </div>

        <p className="mt-2 text-[15px] leading-snug text-ash">
          {project.tagline}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          <span className="font-mono text-[12px] text-ember">
            {project.status}
          </span>
        </div>
      </div>
    </Link>
  );
}