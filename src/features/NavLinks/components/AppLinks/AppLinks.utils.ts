import { APP_LINKS, PROTECTED_LINKS } from 'src/app/App.constants'
export function getNavLinks(isLoggedIn: any) {
    const protectedLinks = isLoggedIn ? PROTECTED_LINKS : []
    return [...APP_LINKS, ...protectedLinks]
}
