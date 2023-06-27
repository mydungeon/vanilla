import {
    APP_LINKS,
    PROFILE_LINKS,
    PROTECTED_LINKS,
} from 'src/app/App.constants'
import { getUserIdFromLocalStorage } from 'src/app/App.utils'
export function getNavLinks(isLoggedIn: any) {
    const protectedLinks = isLoggedIn
        ? [
              ...PROTECTED_LINKS,
              {
                  text: PROFILE_LINKS.INDEX.text,
                  to: `${
                      PROFILE_LINKS.INDEX.to
                  }/${getUserIdFromLocalStorage()}`,
              },
          ]
        : []
    return [...APP_LINKS, ...protectedLinks]
}
