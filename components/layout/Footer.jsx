"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, nav, socials } from "@/content/site";
import EmailButton from "@/components/ui/EmailButton";

const pages = [{ href: "/", label: "Home" }, ...nav];

export default function Footer() {
  const pathname = usePathname();
  const i = Math.max(
    0,
    pages.findIndex((p) => p.href === pathname)
  );
  const prev = pages[(i - 1 + pages.length) % pages.length];
  const next = pages[(i + 1) % pages.length];

  return (
    <footer
      style={{ viewTransitionName: "site-footer" }}
      className="mt-24 border-t-2 border-ink bg-paper lg:mt-32"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="pixel text-[44px] leading-[0.9]">
              Let&apos;s build
              <br />
              something<span className="text-accent">.</span>
            </p>
            <p className="mt-4 max-w-[40ch] text-[15px] leading-relaxed text-mute">
              Open to AI/ML, backend, full-stack and SDE roles. The fastest way
              to reach me is email.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <EmailButton className="btn btn-primary">
                {site.email}
              </EmailButton>
            </div>
          </div>

          <div>
            <p className="label">Pages</p>
            <ul className="mt-4 space-y-2">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="link">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label">Elsewhere</p>
            <ul className="mt-4 space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    {s.label} ↗
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="border-t-2 border-ink bg-sunk">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-4 py-2 font-mono text-[12px] sm:px-6 lg:px-10">
          <span className="border-2 border-ink bg-paper px-2 py-1">
            © {new Date().getFullYear()} Kushagra Mishra
          </span>

          <div className="flex items-center gap-1.5">
            <Link
              href={prev.href}
              aria-label={`Previous page: ${prev.label}`}
              className="border-2 border-ink bg-paper px-2 py-1 transition-colors hover:bg-accent"
            >
              ◄ {prev.label}
            </Link>
            <Link
              href={next.href}
              aria-label={`Next page: ${next.label}`}
              className="border-2 border-ink bg-paper px-2 py-1 transition-colors hover:bg-accent"
            >
              {next.label} ►
            </Link>
          </div>

          <Link
            href={site.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="border-2 border-ink bg-paper px-2 py-1 transition-colors hover:bg-accent"
          >
            {site.buildStamp}
          </Link>
        </div>
      </div>
    </footer>
  );
}
