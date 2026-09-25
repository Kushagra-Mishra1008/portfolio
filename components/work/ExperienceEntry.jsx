import Window from "@/components/ui/Window";

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
          <span className="text-mute"> · {role.org}</span>
        </h2>

        <p className="mt-3 max-w-[62ch] text-[16px] leading-relaxed text-mute">
          {role.summary}
        </p>

        <ul className="mt-6 space-y-3">
          {role.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="font-mono text-[13px] font-bold leading-relaxed text-accent">
                ▸
              </span>
              <span className="max-w-[66ch] text-[15px] leading-relaxed">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Window>
  );
}
