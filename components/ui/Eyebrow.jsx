export default function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px w-8 bg-line" />
      <span className="label">{children}</span>
    </div>
  );
}