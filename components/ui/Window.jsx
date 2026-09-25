/**
 * A 95-style window: navy title bar, hard black border, offset shadow.
 * `crt` swaps the body for a black amber-phosphor screen.
 */
export default function Window({
  title,
  children,
  crt = false,
  className = "",
  bodyClassName = "",
  titleRight,
}) {
  return (
    <div className={`win flex flex-col ${className}`}>
      <div className="win-title">
        <span aria-hidden="true" className="inline-block h-2.5 w-2.5 bg-accent" />
        <span className="min-w-0 flex-1 truncate">{title}</span>
        {titleRight}
        <span aria-hidden="true" className="flex gap-1">
          <span className="win-ctrl">_</span>
          <span className="win-ctrl">□</span>
          <span className="win-ctrl">×</span>
        </span>
      </div>
      <div className={`${crt ? "crt" : ""} flex-1 ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
}
