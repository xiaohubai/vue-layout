import settings from '@/settings'
export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${settings.config.appName}`
  }
  return `${settings.config.appName}`
}
