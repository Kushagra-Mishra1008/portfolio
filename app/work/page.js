import Eyebrow from "@/components/ui/Eyebrow";
import ExperienceEntry from "@/components/work/ExperienceEntry";
import { roles, education, certifications } from "@/content/experience";

export const metadata = {
  title: "Work",
  description:
    "AI engineering internship at Tech Mahindra's Makers Lab, and a B.Tech in computer science at VIT.",
};

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pt-20 lg:px-10 lg:pt-24">
      <Eyebrow>Experience</Eyebrow>

      <h1 className="mt-8 text-hero font-extrabold leading-[1.0] tracking-[-0.03em]">
        Shipping AI where
        <br />
        people actually use it.
      </h1>

      <p className="mt-8 max-w-[54ch] text-[17px] leading-relaxed text-ash">
        Enterprise agentic systems by day, transformers from scratch by night,
        and a computer science degree tying the two together.
      </p>

      <div className="mt-16 border-t border-line">
        {roles.map((role) => (
          <ExperienceEntry key={role.title} role={role} />
        ))}
      </div>

      <div className="mt-24 grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>Education</Eyebrow>

          <h2 className="mt-6 text-[24px] font-bold tracking-[-0.015em]">
            {education.degree}
          </h2>

          <p className="mt-2 font-mono text-[13px] text-ash">
            {education.school} · {education.years} · {education.location}
          </p>

          <ul className="mt-6 space-y-3">
            {education.highlights.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-2.5 h-px w-4 shrink-0 bg-ember" />
                <span className="text-[15px] leading-relaxed text-ash">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Eyebrow>Certifications</Eyebrow>

          {certifications.length === 0 ? (
            <p className="mt-6 font-mono text-[13px] text-ash">
              Nothing here yet.
            </p>
          ) : (
            <ul className="mt-6 divide-y divide-line border-t border-line">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-baseline justify-between gap-6 py-4"
                >
                  <span>
                    <span className="text-[16px] font-bold">{cert.name}</span>
                    <span className="ml-2 font-mono text-[13px] text-ash">
                      · {cert.issuer}
                    </span>
                  </span>
                  <span className="font-mono text-[12px] text-ash">
                    {cert.year}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}