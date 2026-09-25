import Eyebrow from "@/components/ui/Eyebrow";
import Container from "@/components/ui/Container";
import Window from "@/components/ui/Window";
import ExperienceEntry from "@/components/work/ExperienceEntry";
import { roles, education, certifications } from "@/content/experience";

export const metadata = {
  title: "Work",
  description:
    "Software engineering internship (AI) at Tech Mahindra's Makers Lab, and a B.Tech in computer science from VIT.",
};

export default function WorkPage() {
  return (
    <Container className="pt-14 lg:pt-20">
      <section>
        <Eyebrow>C:\Work</Eyebrow>

        <h1 className="pixel mt-8 text-hero leading-[0.84]">
          Shipping AI where
          <br />
          <span className="hl">people use it.</span>
        </h1>

        <p className="mt-8 max-w-[54ch] text-[17px] leading-relaxed text-mute">
          An AI assistant I built end to end at Tech Mahindra — pipeline,
          backend, frontend and deployment — plus a computer science degree
          and a habit of building models from scratch on my own time.
        </p>

        <div className="mt-14 space-y-8">
          {roles.map((role) => (
            <ExperienceEntry key={role.title} role={role} />
          ))}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <Window title="education.txt" bodyClassName="p-6 lg:p-8">
            <h2 className="pixel text-[36px] leading-[0.95]">
              {education.degree}
            </h2>
            <p className="mt-3 font-mono text-[13px] text-mute">
              {education.school} · {education.years} · {education.location}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {education.highlights.map((item) => (
                <li key={item} className="chip bg-desk">
                  {item}
                </li>
              ))}
            </ul>
          </Window>

          <Window title="certs.txt" bodyClassName="p-6 lg:p-8">
            {certifications.length === 0 ? (
              <p className="font-mono text-[13px] text-mute">
                Nothing here yet.
              </p>
            ) : (
              <ul className="divide-y-2 divide-ink border-y-2 border-ink">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-baseline justify-between gap-6 py-4"
                  >
                    <span>
                      <span className="pixel text-[30px] leading-none">
                        {cert.name}
                      </span>
                      <span className="ml-2 font-mono text-[13px] text-mute">
                        · {cert.issuer}
                      </span>
                    </span>
                    <span className="bg-ink px-2 py-0.5 font-mono text-[12px] text-paper">
                      {cert.year}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </Window>
        </div>
      </section>
    </Container>
  );
}
