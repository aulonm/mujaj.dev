import { Trans } from '@lingui/react/macro'
import { createFileRoute } from '@tanstack/react-router'
import { FaGithub } from 'react-icons/fa'

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
    url: 'https://grunnmuren.obos.no',
    sourceUrl: 'https://github.com/codeobos/grunnmuren',
    date: '2022 - Present',
  },
  {
    title: 'Generate National Identity Numbers',
    role: 'Freelance frontend engineer',
    description:
      'Built a tool to generate national identity numbers for testing purposes. For both Norwegian and Swedish formats, with options for valid/invalid numbers and various edge cases. All synthetic numbers that cannot be used for real identities.',
    tags: ['Frontend', 'Vue', 'Freelance'],
    url: 'https://fnr.mujaj.dev',
    date: '2025',
  },
  {
    title: 'React Native Migration',
    role: 'Strategic Tech Shift',
    description:
      'Led the rewrite of OBOS iOS and Android apps from native to React Native, delivered Dec 2024 - Mar 2025.',
    tags: ['React Native', 'Mobile', 'Delivery'],
    date: '2024 - 2025',
  },
  {
    title: 'Bydelsfakta',
    role: 'Consultant, Oslo Kommune',
    description:
      'Worked on the Oslo municipality neighborhood statistics platform with public source code.',
    tags: ['Civic Tech', 'Vue'],
    url: 'https://bydelsfakta.oslo.kommune.no',
    sourceUrl: 'https://github.com/oslokommune/bydelsfakta',
    date: '2019',
  },
  {
    title: 'OKR Tracker',
    role: 'Consultant, Oslo Kommune',
    description:
      'Built internal goal tracking tooling for the Digitaliseringsetaten Origo team.',
    tags: ['Productivity', 'GovTech', 'Vue'],
    url: 'https://okr.oslo.systems',
    sourceUrl: 'https://github.com/oslokommune/okr-tracker',
    date: '2019-2022',
  },
]

function PortfolioPage() {
  return (
    <section className="pb-16 pt-12">
      <div className="space-y-6 sm:space-y-8">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-(--muted-2) sm:text-xs sm:tracking-[0.4em]">
            <Trans>Portfolio</Trans>
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
            <Trans>Selected work</Trans>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-(--muted) sm:text-lg">
            <Trans>
              A selection of platform, product, and public sector work spanning
              design systems, products, and civic tech.
            </Trans>
          </p>
        </div>
        <div className="divide-y divide-(--border) border-y border-(--border)">
          {projects.map((project) => (
            <article key={project.title} className="py-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] uppercase tracking-[0.28em] text-(--muted-2) sm:text-xs sm:tracking-[0.3em]">
                <span>{project.role}</span>
                <span>{project.date}</span>
              </div>
              <h2 className="mt-4 text-xl sm:text-2xl">{project.title}</h2>
              <p className="mt-2 text-sm text-(--muted)">
                {project.description}
              </p>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--accent) underline"
                >
                  {project.url}
                </a>
              )}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-(--accent) underline"
                >
                  <FaGithub /> <Trans>Source</Trans>
                </a>
              )}
              <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.28em] text-(--muted-2) sm:text-[11px]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-(--border) px-3 py-1"
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
