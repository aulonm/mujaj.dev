import { i18n } from '@lingui/core'
import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/react-start/client'
import {
  defaultLocale,
  dynamicActivate,
  isLocaleValid,
} from './modules/lingui/i18n'

import { getRouter } from './router'

async function bootstrap() {
  const locale = document.documentElement.lang
  try {
    await dynamicActivate(isLocaleValid(locale) ? locale : defaultLocale)
  } catch {
    await dynamicActivate(defaultLocale)
  }

  const router = getRouter({ i18n })

  hydrateRoot(document, <StartClient router={router} />)
}

void bootstrap()
