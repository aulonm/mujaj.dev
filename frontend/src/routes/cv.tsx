import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cv')({
  component: CvPage,
})

const experience = [
  {
    company: 'OBOS',
    location: 'Oslo, Norway',
    period: 'Jan 2022 — Present',
    roles: [
      {
        title: 'Software Engineer: Team Nettsted',
        dates: 'Sep 2025 — Present',
        description:
          'I am part of the Platform/Enabling team responsible for the web presence in Norway and Sweden and the Grunnmuren design system. I work closely with Sanity on enterprise CMS strategy and feedback-driven product improvements.',
      },
      {
        title: 'Technical Lead: Medlem',
        dates: 'Sep 2023 — Sep 2025',
        description:
          'I was tech lead for the Member business area with ownership of obos.no/medlem, obos.se/medlem, and the OBOS app. I led the migration from native apps to React Native, delivered Dec 2024 - Mar 2025.',
      },
      {
        title: 'Frontend Engineer',
        dates: 'Jan 2022 — Sep 2023',
        description:
          'I was the frontend developer for the Member team, responsible for operations across the Member business area.',
      },
    ],
  },
  {
    company: 'Knowit',
    location: 'Oslo, Norway',
    period: 'Jun 2016 — Jan 2022',
    roles: [
      {
        title: 'Frontend Engineer',
        dates: 'Aug 2017 — Jan 2022',
        description:
          'I was a consultant for SPK and Oslo Kommune (Origo). I worked on Bydelsfakta and OKR-tracker, and contributed to internal CreativeCrew initiatives.',
      },
      {
        title: 'Frontend Engineer',
        dates: 'Sep 2016 — Aug 2017',
        description:
          'I worked as a frontend engineer with a mix of consulting engagements and internal work.',
      },
      {
        title: 'Summer Intern',
        dates: 'Jun 2016 — Aug 2016',
        description: 'My summer internship focused on frontend development.',
      },
    ],
  },
  {
    company: 'University of Oslo',
    location: 'Oslo, Norway',
    period: 'Sep 2015 — Dec 2017',
    roles: [
      {
        title: 'Teaching Assistant (INF4331, INF3331)',
        dates: 'Sep 2015 — Dec 2017',
        description:
          'I was a teaching assistant for Python and computer science courses at UiO.',
      },
    ],
  },
]

const education = [
  {
    title: "Master's degree, Computer Science",
    detail: 'University of Oslo (UiO)',
    period: '2012 — 2017',
  },
  {
    title: 'Computer Science',
    detail: 'San Jose State University',
    period: '2013 — 2013',
  },
  {
    title: 'Kristiansand Katedralskole Gimle',
    detail: 'Secondary education',
    period: '2009 — 2012',
  },
]

const skills = [
  'Frontend Engineering',
  'Design Systems',
  'React + TypeScript',
  'React Native',
  'CMS Strategy',
  'Platform Enablement',
  'Vue'
]

function CvPage() {
  return (
    <section className="pb-16 pt-12">
      <div className="space-y-8 sm:space-y-10">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-(--muted-2) sm:text-xs sm:tracking-[0.4em]">
            Curriculum Vitae
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl">Aulon Mujaj</h1>
          <p className="mt-4 max-w-2xl text-base text-(--muted) sm:text-lg">
            I'm a frontend engineer at OBOS in Oslo, focused on design systems,
            platform enablement, and product delivery.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl">Experience</h2>
            <div className="divide-y divide-(--border) border-y border-(--border)">
              {experience.map((employer) => (
                <div key={employer.company} className="py-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-lg">{employer.company}</p>
                      <p className="text-xs uppercase tracking-[0.24em] text-(--muted-2)">
                        {employer.location}
                      </p>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-(--muted-2) sm:text-xs">
                      {employer.period}
                    </p>
                  </div>
                  <div className="mt-5 space-y-4 border-l border-(--border) pl-4">
                    {employer.roles.map((role) => (
                      <div
                        key={`${employer.company}-${role.title}-${role.dates}`}
                        className="space-y-2"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] uppercase tracking-[0.28em] text-(--muted-2) sm:text-xs">
                          <span>{role.title}</span>
                          <span>{role.dates}</span>
                        </div>
                        <p className="text-sm text-(--muted)">
                          {role.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl">Profile</h2>
              <p className="mt-4 text-sm text-(--muted)">
                Welcome to my page. I do frontend development and engineering.
                I have Java experience, but I am not looking for Java roles.
              </p>
              <div className="mt-5 space-y-2 text-sm text-(--muted)">
                <p>Oslo, Norway</p>
                <p>I'm a frontend engineer at OBOS</p>
                <a
                  href="mailto:aulon@mujaj.no"
                  className="block text-(--muted) transition hover:text-(--accent)"
                >
                  aulon@mujaj.no
                </a>
                <a
                  href="https://github.com/aulonm"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-(--muted) transition hover:text-(--accent)"
                >
                  github.com/aulonm
                </a>
                <a
                  href="https://www.linkedin.com/in/aulon-mujaj-585a3457/"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-(--muted) transition hover:text-(--accent)"
                >
                  linkedin.com/in/aulon-mujaj-585a3457
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-2xl">Skills</h2>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.28em] text-(--muted-2)">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-(--border) px-3 py-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl">Education</h2>
              <div className="mt-4 space-y-4 text-sm text-(--muted)">
                {education.map((item) => (
                  <div key={item.title}>
                    <p className="text-base text-(--text)">{item.title}</p>
                    <p className="text-(--muted-2)">{item.detail}</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-(--muted-2)">
                      {item.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
