"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, nav, socials } from "@/content/site";

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
    <footer className="mt-32 border-t border-line">
      <div className="mx-auto max-w-[1440px] px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href="/"
              className="font-mono text-[15px] transition-colors hover:text-ember"
            >
              <span className="text-bone">{site.wordmark}</span>
            </Link>
            <p className="mt-2 font-mono text-[13px] text-ash">
              {site.tagline}
            </p>
          </div>

          <nav className="flex gap-7">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[13px] text-ash transition-colors hover:text-bone"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-6">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[13px] text-ash transition-colors hover:text-ember"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 border-t border-line pt-7 sm:flex-row sm:justify-between">
          <p className="font-mono text-[12px] text-ash">
            © {new Date().getFullYear()} Kushagra
          </p>

          <div className="flex items-center gap-5">
            <Link
              href={prev.href}
              aria-label={`Previous page: ${prev.label}`}
              className="font-mono text-[14px] text-ash transition-colors hover:text-bone"
            >
              ←
            </Link>

            <Link href="/" aria-label="Home" className="group">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-ash transition-colors group-hover:text-ember"
              >
                <rect
                  x="7"
                  y="0.6"
                  width="9"
                  height="9"
                  transform="rotate(45 7 0.6)"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </Link>

            <Link
              href={next.href}
              aria-label={`Next page: ${next.label}`}
              className="font-mono text-[14px] text-ash transition-colors hover:text-bone"
            >
              →
            </Link>
          </div>

          <Link
            href={site.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[12px] text-ash transition-colors hover:text-bone"
          >
            {site.buildStamp}
          </Link>
        </div>
      </div>
    </footer>
  );
}