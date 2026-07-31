"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, nav } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const segment = pathname === "/" ? "" : pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6 px-6 lg:px-10">
        <Link
          href="/"
          className="font-mono text-[15px] tracking-tight transition-colors hover:text-ember"
        >
          <span className="text-bone">{site.wordmark}</span>
          <span className="text-ash">{segment}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-2 font-mono text-[13px]"
              >
                <span className={active ? "text-ember" : "text-ash"}>
                  {item.num}
                </span>
                <span
                  className={`border-b pb-0.5 transition-colors ${
                    active
                      ? "border-ember text-bone"
                      : "border-transparent text-ash group-hover:text-bone"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 font-mono text-[12px] text-ash lg:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            {site.availability}
          </span>

          <Link
            href={site.resumeUrl}
            className={`rounded-[4px] border px-4 py-2 font-mono text-[13px] transition-colors ${
              pathname === "/resume"
                ? "border-ember text-ember"
                : "border-line text-ash hover:border-ash hover:text-bone"
            }`}
          >
            Résumé
          </Link>

          <Link
            href={`mailto:${site.email}`}
            className="rounded-[4px] border border-line px-4 py-2 font-mono text-[13px] text-bone transition-colors hover:border-ember hover:text-ember"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}