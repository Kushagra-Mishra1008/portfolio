export default function Pill({ children }) {
  return (
    <span className="rounded-[4px] border border-line bg-surface px-2.5 py-1 font-mono text-[12px] text-ash">
      {children}
    </span>
  );
}