import { i18n as defaultI18n } from '@lingui/core'
import type { I18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { type PropsWithChildren } from 'react'
import { routeTree } from './routeTree.gen'

export function getRouter(options?: { i18n?: I18n }) {
  const i18n = options?.i18n ?? defaultI18n

  const router = createTanStackRouter({
    routeTree,

    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    Wrap: ({ children }: PropsWithChildren) => {
      return <I18nProvider i18n={i18n}>{children}</I18nProvider>
    },
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
