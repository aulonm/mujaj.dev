import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <section className="flex min-h-[calc(100vh-96px)] flex-col justify-center py-12 sm:py-16">
      <div className="space-y-6 sm:space-y-8">
        <p className="text-[11px] uppercase tracking-[0.32em] text-(--muted-2) sm:text-xs sm:tracking-[0.4em]">
          Frontend Engineer
        </p>
        <h1 className="text-3xl leading-[1.15] sm:text-4xl md:text-5xl">
          I build resilient frontend platforms for real-world teams.
        </h1>
        <p className="max-w-2xl text-base text-(--muted) sm:text-lg">
          I'm a frontend engineer at OBOS in Oslo. I focus on design systems,
          platform enablement, and product delivery.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/portfolio"
            className="rounded-full border border-(--border-strong) px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-(--accent) transition hover:border-(--accent) hover:bg-(--accent) hover:text-(--accent-contrast) sm:px-6 sm:text-xs"
          >
            Portfolio
          </Link>
          <Link
            to="/cv"
            className="rounded-full border border-(--border) px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-(--muted) transition hover:border-(--accent) hover:text-(--accent) sm:px-6 sm:text-xs"
          >
            CV
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-(--muted-2) sm:gap-6 sm:text-xs sm:tracking-[0.3em]">
          <span>Oslo, Norway</span>
          <span className="h-px w-12 bg-(--border)"></span>
          <span>OBOS</span>
        </div>
      </div>
    </section>
  )
}
