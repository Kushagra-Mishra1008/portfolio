import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import ProjectCard from "./ProjectCard";
import { projects } from "@/content/projects";

export default function SelectedWork() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pt-28 lg:px-10 lg:pt-40">
      <Eyebrow>Selected work</Eyebrow>

      <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-section font-extrabold leading-[1.02] tracking-[-0.025em]">
          Built end to end.
        </h2>

        <Link
          href="/projects"
          className="group flex items-center gap-1.5 font-mono text-[13px] text-ash transition-colors hover:text-bone"
        >
          All projects
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}