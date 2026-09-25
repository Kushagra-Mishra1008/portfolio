"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, nav } from "@/content/site";
import Clock from "./Clock";
import EmailButton from "@/components/ui/EmailButton";

function NavItem({ item, active }) {
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={`flex h-9 items-center justify-center gap-2 border-2 border-ink px-3 font-mono text-[12px] font-medium uppercase tracking-[0.06em] transition-[background-color,color] duration-100 ${
        active
          ? "bg-ink text-paper"
          : "bg-paper text-ink hover:bg-accent"
      }`}
    >
      <span className={active ? "text-accent" : "text-mute"}>{item.num}</span>
      {item.label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const items = [...nav, { num: "04", label: "Résumé", href: site.resumeUrl }];
  // Only echo known routes — the prerendered 404 can't know the real URL.
  const segment = items.some((item) => pathname.startsWith(item.href))
    ? pathname
    : "";

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className="sticky top-0 z-50 border-b-2 border-ink bg-paper"
    >
      <div className="mx-auto flex h-[60px] max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5 font-mono text-[14px] font-bold"
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 shrink-0 place-items-center border-2 border-ink bg-accent pixel text-[22px] leading-none transition-transform duration-150 group-hover:-rotate-6"
          >
            K
          </span>
          <span className="truncate">
            {site.wordmark.toUpperCase()}.EXE
            <span className="font-medium text-mute">{segment}</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-2 lg:flex">
          {items.map((item) => (
            <NavItem
              key={item.href}
              item={item}
              active={pathname.startsWith(item.href)}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden h-9 items-center gap-2 border-2 border-ink bg-paper px-2.5 font-mono text-[12px] font-medium xl:flex">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-ping bg-ok opacity-60" />
              <span className="relative h-2.5 w-2.5 bg-ok" />
            </span>
            {site.availability}
          </span>
          <span className="hidden sm:block">
            <Clock />
          </span>
          <EmailButton className="btn btn-primary btn-sm">Hire me</EmailButton>
        </div>
      </div>

      <nav
        aria-label="Primary"
        className="grid grid-cols-4 gap-1.5 border-t-2 border-ink bg-sunk px-4 py-2 sm:px-6 lg:hidden"
      >
        {items.map((item) => (
          <NavItem
            key={item.href}
            item={item}
            active={pathname.startsWith(item.href)}
          />
        ))}
      </nav>
    </header>
  );
}
