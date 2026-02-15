import {
  HeadContent,
  Scripts,
  createRootRoute,
  Link,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { useEffect, useState } from 'react'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Frontend | Portfolio',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,700&family=Space+Grotesk:wght@300;400;500;600;700&display=optional',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

type Theme = 'light' | 'dark'

function RootDocument({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = window.localStorage.getItem('theme') as Theme | null
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored)
      document.documentElement.setAttribute('data-theme', stored)
      return
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = prefersDark ? 'dark' : 'light'
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.documentElement.setAttribute('data-theme', theme)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme)
    }
  }, [theme])

  return (
    <html lang="en" data-theme="dark">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);return;}var m=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',m?'dark':'light');}catch(e){}})();",
          }}
        />
      </head>
      <body>
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
          <header className="border-b border-[var(--border)]">
            <nav className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm font-semibold tracking-[0.18em] uppercase text-[var(--muted)]">
                Aulon Mujaj
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-[var(--muted-2)]">
                <Link to="/" className="transition hover:text-[var(--accent)]">
                  Home
                </Link>
                <Link
                  to="/portfolio"
                  className="transition hover:text-[var(--accent)]"
                >
                  Portfolio
                </Link>
                <Link to="/cv" className="transition hover:text-[var(--accent)]">
                  CV
                </Link>
                <button
                  type="button"
                  onClick={() =>
                    setTheme((current) =>
                      current === 'dark' ? 'light' : 'dark'
                    )
                  }
                  className="rounded-full border border-[var(--border)] px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[var(--muted-2)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {theme === 'dark' ? 'Light' : 'Dark'}
                </button>
              </div>
            </nav>
          </header>
          <main className="mx-auto w-full max-w-4xl px-6">{children}</main>
        </div>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-start justify-center gap-6 py-16">
      <div className="text-xs uppercase tracking-[0.5em] text-[var(--muted-2)]">
        404
      </div>
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)]">
          This route does not exist.
        </h1>
        <p className="max-w-xl text-base text-[var(--muted)]">
          The page you are looking for has moved, or the link is not correct.
          Try heading back to the home page.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em]">
        <Link
          to="/"
          className="rounded-full border border-[var(--border)] px-4 py-2 text-[10px] text-[var(--muted-2)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          Back Home
        </Link>
        <Link
          to="/portfolio"
          className="text-[10px] text-[var(--muted-2)] transition hover:text-[var(--accent)]"
        >
          View Portfolio
        </Link>
      </div>
    </section>
  )
}
