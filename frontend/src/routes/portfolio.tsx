import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio')({
  component: PortfolioPage,
})

const projects = [
  {
    title: 'Grunnmuren Design System',
    role: 'Platform/Enabling, OBOS',
    description:
      'Managing the official OBOS design system that powers the web presence in Norway and Sweden.',
    tags: ['Design Systems', 'React', 'Platform'],
  },
  {
    title: 'OBOS Member Platforms',
    role: 'Tech Lead: Member',
    description:
      'Ownership of obos.no/medlem, obos.se/medlem, and the OBOS app for Norway and Sweden.',
    tags: ['Product', 'React', 'Leadership'],
  },
  {
    title: 'React Native Migration',
    role: 'Strategic Tech Shift',
    description:
      'Led the rewrite of OBOS iOS and Android apps from native to React Native, delivered Dec 2024 - Mar 2025.',
    tags: ['React Native', 'Mobile', 'Delivery'],
  },
  {
    title: 'Bydelsfakta',
    role: 'Consultant, Oslo Kommune',
    description:
      'Worked on the Oslo municipality neighborhood statistics platform with public source code.',
    tags: ['Civic Tech', 'Frontend', 'Open Source'],
  },
  {
    title: 'OKR Tracker',
    role: 'Consultant, Oslo Kommune',
    description:
      'Built internal goal tracking tooling for the Digitaliseringsetaten Origo team.',
    tags: ['Productivity', 'Frontend', 'GovTech'],
  },
]

function PortfolioPage() {
  return (
    <section className="pb-16 pt-12">
      <div className="space-y-6 sm:space-y-8">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--muted-2)] sm:text-xs sm:tracking-[0.4em]">
            Portfolio
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl">Selected work</h1>
          <p className="mt-4 max-w-2xl text-base text-[var(--muted)] sm:text-lg">
            A selection of platform, product, and public sector work spanning
            design systems, member experiences, and civic tech.
          </p>
        </div>
        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {projects.map((project) => (
            <article key={project.title} className="py-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] uppercase tracking-[0.28em] text-[var(--muted-2)] sm:text-xs sm:tracking-[0.3em]">
                <span>{project.role}</span>
                <span>Recent</span>
              </div>
              <h2 className="mt-4 text-xl sm:text-2xl">{project.title}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.28em] text-[var(--muted-2)] sm:text-[11px]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
