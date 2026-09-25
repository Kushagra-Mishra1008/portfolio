import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Container from "@/components/ui/Container";
import ProjectCard from "./ProjectCard";
import { projects } from "@/content/projects";

export default function SelectedWork() {
  return (
    <Container className="pt-24 lg:pt-32">
      <section>
        <Eyebrow num="01">Selected work</Eyebrow>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="pixel text-section leading-[0.9]">
            Built end to end.
          </h2>
          <Link href="/projects" className="btn btn-sm">
            All projects →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>
    </Container>
  );
}
