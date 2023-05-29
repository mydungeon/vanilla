import LOGO from 'src/assets/svg/vanilla.svg'
import FOOTER_LOGO from 'src/assets/svg/heart.svg'
const APP_NAME = 'vanilla'
export const PROFILE_LINK = { text: 'Profile', to: '/profile' }
export const SEARCH_LINK = { text: 'Search', to: '/search' }
export const HOME_LINK = { text: 'Home', to: '/' }
export const BLOG_LINK = { text: 'Blog', to: '/blog' }
export const ADMIN_LINK = { text: 'Admin', to: '/admin' }
export const SIGN_IN_LINK = { text: 'Sign in', to: '/signin' }
export const SIGN_UP_LINK = { text: 'Sign up', to: '/signup' }
const APP_LINKS = [PROFILE_LINK, SEARCH_LINK, HOME_LINK, BLOG_LINK, ADMIN_LINK]

const AUTH_LINKS = [SIGN_IN_LINK, SIGN_UP_LINK]

export { APP_NAME, APP_LINKS, AUTH_LINKS, FOOTER_LOGO, LOGO }
