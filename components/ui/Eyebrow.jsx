export default function Eyebrow({ children, num }) {
  return (
    <div className="flex items-center gap-3">
      <span className="bg-ink px-2 py-1 font-mono text-[11px] font-medium tracking-[0.14em] text-paper uppercase">
        {num ? `${num} · ` : ""}
        {children}
      </span>
      <span aria-hidden="true" className="h-[2px] flex-1 bg-ink" />
    </div>
  );
}
