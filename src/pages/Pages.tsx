import React, { lazy, Suspense } from 'react'
import LoadingPage from 'src/pages/LoadingPage'
import DateOfBirthPage from 'src/pages/DateOfBirthPage'
import GenderPage from 'src/pages/GenderPage'
import LocationPage from 'src/pages/LocationPage'
import OrientationPage from 'src/pages/OrientationPage'
import PicsPage from 'src/pages/PicsPage'
import NotFoundPage from 'src/pages/NotFoundPage'

const AdminPage = lazy(() => import('src/pages/AdminPage'))
const Blog = lazy(() => import('src/blog/Blog'))
const ForgotPasswordPage = lazy(() => import('src/pages/ForgotPasswordPage'))
const HomePage = lazy(() => import('src/pages/HomePage'))
const OneTimePasscodePage = lazy(() => import('src/pages/OneTimePasscodePage'))
const ProfileEditPage = lazy(() => import('src/pages/ProfileEditPage'))
const ProfilePage = lazy(() => import('src/pages/ProfilePage'))
const ProfilePreferencesPage = lazy(
    () => import('src/pages/ProfilePreferencesPage')
)
const ProfileSettingsPage = lazy(() => import('src/pages/ProfileSettingsPage'))
const ResetPasswordPage = lazy(() => import('src/pages/ResetPasswordPage'))
const SigninPage = lazy(() => import('src/pages/SigninPage'))
const SignupPage = lazy(() => import('src/pages/SignupPage'))

const MyProfile = {
    DateOfBirthPage,
    GenderPage,
    LocationPage,
    OrientationPage,
    PicsPage,
}

export const Pages = {
    NotFoundPage,
    AdminPage,
    Blog,
    ForgotPasswordPage,
    HomePage,
    OneTimePasscodePage,
    MyProfile,
    ProfileEditPage,
    ProfilePage,
    ProfilePreferencesPage,
    ProfileSettingsPage,
    ResetPasswordPage,
    SigninPage,
    SignupPage,
}

export function Suspended({
    children,
}: {
    children: JSX.Element | JSX.Element[]
}) {
    return <Suspense fallback={<LoadingPage />}>{children}</Suspense>
}
