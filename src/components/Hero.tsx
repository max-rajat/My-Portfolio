import { profile } from "@/content/data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <p className="font-mono text-sm text-accent">Hi, I&apos;m</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
        {profile.name}
      </h1>
      <h2 className="mt-2 text-2xl font-semibold text-muted sm:text-3xl">
        {profile.role}
      </h2>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        {profile.tagline}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
