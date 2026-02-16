import { i18n } from '@lingui/core'
import {
  createStartHandler,
  defaultStreamHandler,
  defineEventHandler,
} from '@tanstack/react-start/server'
import { getRouterManifest } from '@tanstack/react-start/router-manifest'

import { getRouter } from './router'
import { setupLocaleFromRequest } from './modules/lingui/i18n.server'

export default defineEventHandler(async (event) => {
  await setupLocaleFromRequest()

  return createStartHandler({
    createRouter: () => {
      return getRouter({ i18n })
    },
    getRouterManifest,
  })(defaultStreamHandler)(event)
})
