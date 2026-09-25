import ProjectRow from "@/components/projects/ProjectRow";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Projects",
  description:
    "A transformer built from scratch, a retrieval platform, and a media library — each one shipped and documented.",
};

export default function ProjectsPage() {
  return (
    <Container className="pt-14 lg:pt-20">
      <section>
        <Eyebrow>C:\Projects</Eyebrow>

        <h1 className="pixel mt-8 text-hero leading-[0.84]">
          Things I&apos;ve built,
          <br />
          <span className="hl">end to end.</span>
        </h1>

        <p className="mt-8 max-w-[56ch] text-[17px] leading-relaxed text-mute">
          A transformer written from first principles, a retrieval platform for
          documents, and a media library with a Spring Boot backend — each one
          shipped, running, and open source.
        </p>

        <div className="mt-8 divide-y-2 divide-ink border-t-2 border-ink">
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
    </Container>
  );
}
