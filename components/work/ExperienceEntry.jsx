export default function ExperienceEntry({ role }) {
  return (
    <article className="grid gap-6 border-b border-line py-12 md:grid-cols-[0.8fr_2fr] md:gap-12 lg:py-16">
      <div>
        <div className="flex items-center gap-2">
          {role.current && (
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          )}
          <span className="font-mono text-[13px] text-bone">
            {role.start} — {role.end}
          </span>
        </div>
        <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.14em] text-ash">
          {role.location}
        </p>
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-ash">
          {role.mode}
        </p>
      </div>

      <div>
        <h2 className="text-[24px] font-bold tracking-[-0.015em]">
          {role.title}
          <span className="text-ash"> · {role.org}</span>
        </h2>

        <p className="mt-3 max-w-[62ch] text-[16px] leading-relaxed text-ash">
          {role.summary}
        </p>

        <ul className="mt-6 space-y-4">
          {role.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-4">
              <span className="mt-3 h-px w-4 shrink-0 bg-ember" />
              <span className="max-w-[64ch] text-[15px] leading-relaxed text-ash">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}