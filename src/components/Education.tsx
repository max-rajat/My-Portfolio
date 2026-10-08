import { education } from "@/content/data";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-mono text-accent">05. Education</h2>

      <div className="mt-6 space-y-6">
        {education.map((item) => (
          <div
            key={`${item.degree}-${item.period}`}
            className="grid gap-1 border-l border-border pl-6 sm:grid-cols-4 sm:gap-6"
          >
            <p className="text-sm text-muted sm:col-span-1">{item.period}</p>
            <div className="sm:col-span-3">
              <h3 className="font-semibold">{item.degree}</h3>
              <p className="mt-1 text-sm text-muted">
                {item.institution}
                {item.detail ? ` · ${item.detail}` : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
