import { SITE_NAME } from 'src/app/App.constants'

export function getCopyright() {
    const currentYear = new Date().getFullYear()
    return `© ${currentYear} ${SITE_NAME}`
}
