import VANILLA_LOGO from 'src/assets/svg/vanilla.svg'
import GAIM_LOGO from 'src/assets/svg/gaim.svg'
import HEART from 'src/assets/svg/heart.svg'

const VANILLA = 'vanilla'
const VANILLA_TAGLINES = [
    `What's ur flavor?`,
    `Goes great with chocolate`,
    `With a cherry on top`,
    `The gateway drug to all flavors`,
    `2 scoops w/ rainbow sprinkles`,
    `All melty and sweet`,
    `It's sooooo yummy`,
    `Do u wanna cup or cone?`,
]
const GAIM = 'gaim'
const GAIM_TAGLINES = [
    `Wanna play?`,
    `Don't h8 the player`,
    `Play or b played`,
    `R u down to win`,
    `Everyone wins here`,
    `We all luv a gud one`,
    `R u more chess or checkers?`,
    `It never ends`,
]
const LOGO = VANILLA_LOGO
const FOOTER_LOGO = HEART
const SITE_NAME = VANILLA
const TAGLINES = VANILLA_TAGLINES

export const ADMIN_LINK = { text: 'Admin', to: '/admin' }
export const BLOG_LINK = { text: 'Blog', to: '/blog' }
export const FORGOT_LINK = { text: 'Forgot password?', to: '/forgot' }
export const HOME_LINK = { text: 'Home', to: '/' }
export const OTP_LINK = { text: 'One Time Passcode', to: '/otp' }
export const PROFILE_LINKS = {
    DOB: {
        text: 'My Date of Birth',
        to: '/profile/dob',
    },
    GENDER: {
        text: 'My Gender',
        to: '/profile/gender',
    },
    INDEX: {
        text: 'My Profile',
        to: '/profile',
    },
    LOCATION: {
        text: 'My DoB',
        to: '/profile/location',
    },
    ORIENTATION: {
        text: 'My Sexual Orientation',
        to: '/profile/orientation',
    },
    PICS: {
        text: 'My Profile Pics',
        to: '/profile/pics',
    },
}
export const RESET_LINK = { text: 'Reset password?', to: '/reset' }
export const SEARCH_LINK = { text: 'Search', to: '/search' }
export const SIGN_IN_LINK = { text: 'Sign in', to: '/signin' }
export const SIGN_UP_LINK = { text: 'Sign up', to: '/signup' }

const APP_LINKS = [HOME_LINK, BLOG_LINK]

const AUTH_LINKS = [SIGN_IN_LINK, SIGN_UP_LINK]

const PROTECTED_LINKS = [ADMIN_LINK, PROFILE_LINKS.DOB, SEARCH_LINK]

export {
    APP_LINKS,
    AUTH_LINKS,
    FOOTER_LOGO,
    LOGO,
    PROTECTED_LINKS,
    SITE_NAME,
    TAGLINES,
}
