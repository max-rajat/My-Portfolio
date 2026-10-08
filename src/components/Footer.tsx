"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/content/data";

const socialLinks = [
  { label: "GitHub", href: profile.socials.github },
  { label: "LinkedIn", href: profile.socials.linkedin },
];

const BUILD_YEAR = 2026;

export default function Footer() {
  const yearRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const current = new Date().getFullYear();
    if (yearRef.current && current !== BUILD_YEAR) {
      yearRef.current.textContent = String(current);
    }
  }, []);

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          © <span ref={yearRef}>{BUILD_YEAR}</span> {profile.name}. All
          rights reserved.
        </p>
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
