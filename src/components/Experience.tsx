import { experience } from "@/content/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-mono text-accent">04. Experience</h2>

      <div className="mt-6 space-y-8">
        {experience.map((job) => (
          <div
            key={`${job.company}-${job.role}`}
            className="grid gap-2 border-l border-border pl-6 sm:grid-cols-4 sm:gap-6"
          >
            <p className="text-sm text-muted sm:col-span-1">{job.period}</p>
            <div className="sm:col-span-3">
              <h3 className="font-semibold">
                {job.role} <span className="text-muted">· {job.company}</span>
              </h3>
              <ul className="mt-3 space-y-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
