import { APP_NAME } from 'src/app/App.constants'

export function getCopyright() {
    const currentYear = new Date().getFullYear()
    return `© ${currentYear} ${APP_NAME}`
}
