import Image from "next/image";
import Link from "next/link";
import Pill from "@/components/ui/Pill";

export default function ProjectRow({ project, index, reversed }) {
  const num = String(index + 1).padStart(2, "0");
  const href = `/projects/${project.slug}`;

  return (
    <article className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
      <Link
        href={href}
        className={`group block overflow-hidden rounded-[6px] border border-line bg-surface transition-colors hover:border-ash/40 ${
          reversed ? "lg:order-2" : ""
        }`}
      >
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
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top opacity-90 transition-opacity group-hover:opacity-100"
          />
        </div>
      </Link>

      <div className={reversed ? "lg:order-1" : ""}>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[12px] text-ash">{num}</span>
          <span className="font-mono text-[12px] text-ash">
            {project.year}
          </span>
          <span className="h-px w-6 bg-line" />
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            <span className="font-mono text-[12px] text-ember">
              {project.status}
            </span>
          </span>
        </div>

        <Link href={href} className="group block">
          <h2 className="mt-5 text-[34px] font-extrabold leading-tight tracking-[-0.025em] transition-colors group-hover:text-ember lg:text-[40px]">
            {project.name}
          </h2>
        </Link>

        <p className="mt-2 font-mono text-[14px] text-ash">
          {project.tagline}
        </p>

        <p className="mt-6 max-w-[58ch] text-[16px] leading-relaxed text-ash">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-baseline gap-8">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="flex items-baseline gap-2">
              <span className="text-[22px] font-bold tracking-tight text-bone">
                {metric.value}
              </span>
              <span className="font-mono text-[12px] text-ash">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-7">
          <Link
            href={href}
            className="group flex items-center gap-1.5 font-mono text-[13px] text-ember transition-colors hover:text-bone"
          >
            Read more
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>

          <Link
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-1.5 font-mono text-[13px] text-bone transition-colors hover:text-ember"
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
      </div>
    </article>
  );
}