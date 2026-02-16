import { i18n } from '@lingui/core'

export const locales = {
  en: 'English',
  nb: 'Norsk',
}

export const isLocaleValid = (locale: string) =>
  Object.keys(locales).includes(locale)

export const defaultLocale = 'en'

export async function dynamicActivate(locale: string) {
  const { messages } = await import(`../../locales/${locale}/messages.po`)
  i18n.load(locale, messages)
  i18n.activate(locale)
}
