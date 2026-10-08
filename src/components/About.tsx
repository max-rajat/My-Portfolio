import { about } from "@/content/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-sm font-mono text-accent">01. {about.heading}</h2>

      <div className="mt-6 grid gap-12 sm:grid-cols-3">
        <div className="space-y-4 sm:col-span-2">
          {about.paragraphs.map((p) => (
            <p key={p} className="leading-relaxed text-muted">
              {p}
            </p>
          ))}

          <ul className="flex flex-wrap gap-2 pt-2">
            {about.strengths.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <dl className="grid grid-cols-3 gap-4 sm:grid-cols-1 sm:gap-6">
          {about.stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border p-4">
              <dd className="text-2xl font-bold">{stat.value}</dd>
              <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
