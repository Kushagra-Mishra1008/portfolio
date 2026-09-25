import Link from "next/link";

export const metadata = { title: "404" };

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1180px] px-4 pt-16 sm:px-6 lg:px-10 lg:pt-24">
      <div className="border-2 border-ink bg-title p-8 font-mono text-paper shadow-[var(--shadow-hard)] sm:p-12">
        <p className="inline-block bg-paper px-2 py-0.5 text-[13px] font-bold text-title">
          KUSHAGRA.EXE
        </p>
        <p className="pixel mt-8 text-[clamp(3rem,8vw,6rem)] leading-[0.85]">
          404 — page not found
        </p>
        <p className="mt-6 max-w-[60ch] text-[14px] leading-relaxed">
          A fatal exception 0E has occurred at this URL. The page you were
          looking for has been moved, deleted, or never existed.
        </p>
        <p className="mt-2 text-[14px]">* Press any link below to continue.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn">
            Go home
          </Link>
          <Link href="/projects" className="btn btn-primary">
            See projects
          </Link>
        </div>
      </div>
    </div>
  );
}
