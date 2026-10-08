import { profile } from "@/content/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 text-center">
      <h2 className="text-sm font-mono text-accent">06. Contact</h2>
      <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Let&apos;s work together
      </h3>
      <p className="mx-auto mt-4 max-w-md text-muted">
        I&apos;m currently open to new opportunities. Whether you have a
        question or just want to say hi, my inbox is always open.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Say hello
      </a>
      <p className="mt-6 text-sm text-muted">
        <a
          href={`tel:${profile.phone.replace(/\s+/g, "")}`}
          className="transition-colors hover:text-foreground"
        >
          {profile.phone}
        </a>
        {" · "}
        {profile.location}
      </p>
    </section>
  );
}
