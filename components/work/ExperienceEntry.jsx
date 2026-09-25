import Window from "@/components/ui/Window";
import Pill from "@/components/ui/Pill";

function Group({ group }) {
  return (
    <div
      className={
        group.highlight
          ? "border-2 border-ink bg-crt p-5 text-phosphor shadow-[var(--shadow-hard-sm)]"
          : "border-2 border-ink p-5"
      }
    >
      <h3
        className={`inline-block px-2 py-0.5 font-mono text-[11px] font-bold tracking-[0.14em] uppercase ${
          group.highlight ? "bg-accent text-ink" : "bg-ink text-paper"
        }`}
      >
        {group.label}
      </h3>
      <ul className="mt-4 space-y-3">
        {group.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="font-mono text-[13px] font-bold leading-relaxed text-accent">
              ▸
            </span>
            <span
              className={`max-w-[66ch] text-[15px] leading-relaxed ${
                group.highlight ? "font-mono text-[14px]" : ""
              }`}
            >
              {bullet}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceEntry({ role }) {
  return (
    <Window
      title={`${role.org.toLowerCase().replace(/[^a-z0-9]+/g, "_")}.log`}
      bodyClassName="grid gap-6 p-6 md:grid-cols-[0.7fr_2fr] md:gap-10 lg:p-8"
    >
      <div className="space-y-2 font-mono text-[12px] font-medium">
        <p className="bg-ink px-2 py-1 text-paper">
          {role.start} — {role.end}
        </p>
        <p className="border-2 border-ink px-2 py-0.5 uppercase tracking-[0.1em]">
          {role.location}
        </p>
        <p className="border-2 border-ink px-2 py-0.5 uppercase tracking-[0.1em]">
          {role.mode}
        </p>
      </div>

      <div>
        <h2 className="pixel text-[40px] leading-[0.95]">
          {role.title}
          {role.focus && (
            <span className="hl ml-3 text-[0.8em]">{role.focus}</span>
          )}
        </h2>
        <p className="mt-2 font-mono text-[14px] font-medium text-mute">
          {role.org}
        </p>

        <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed">
          {role.summary}
        </p>

        {role.stack && (
          <div className="mt-5 flex flex-wrap gap-2">
            {role.stack.map((tech) => (
              <Pill key={tech}>{tech}</Pill>
            ))}
          </div>
        )}

        <div className="mt-7 space-y-4">
          {role.groups.map((group) => (
            <Group key={group.label} group={group} />
          ))}
        </div>
      </div>
    </Window>
  );
}
