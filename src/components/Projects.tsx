import { projects } from "@/content/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-mono text-accent">03. Projects</h2>

      <div
        className={
          projects.length > 1
            ? "mt-6 grid gap-6 sm:grid-cols-2"
            : "mt-6 grid gap-6 sm:max-w-md"
        }
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
