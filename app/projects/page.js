import ProjectRow from "@/components/projects/ProjectRow";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Projects",
  description:
    "A transformer built from scratch, a retrieval platform, and a media library — each one shipped and documented.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pt-20 lg:px-10 lg:pt-24">
      <h1 className="text-hero font-extrabold leading-[1.0] tracking-[-0.03em]">
        Things I&apos;ve built,
        <br />
        end to end.
      </h1>

      <p className="mt-8 max-w-[56ch] text-[17px] leading-relaxed text-ash">
        A transformer written from first principles, a retrieval platform for
        documents, and a media library — each one shipped, running, and open
        source.
      </p>

      <div className="mt-10 divide-y divide-line border-t border-line">
        {projects.map((project, i) => (
          <ProjectRow
            key={project.slug}
            project={project}
            index={i}
            reversed={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}