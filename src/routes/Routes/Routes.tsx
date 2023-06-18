import React, { lazy, Suspense } from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import ProtectedRoute from '../ProtectedRoute'
import LoadingPage from 'src/pages/LoadingPage'
import NotFoundPage from 'src/pages/NotFoundPage'
import MyDateOfBirthPage from 'src/pages/MyDateOfBirthPage'
import MyLocationPage from 'src/pages/MyLocationPage'
import MyGenderPage from 'src/pages/MyGenderPage'
import MyOrientationPage from 'src/pages/MyOrientationPage'
import MyPicsPage from 'src/pages/MyPicsPage'
import './PagePreloader.styles.scss'

const AdminPage = lazy(() => import('src/pages/AdminPage'))
const Blog = lazy(() => import('src/blog/Blog'))
const ForgotPasswordPage = lazy(() => import('src/pages/ForgotPasswordPage'))
const HomePage = lazy(() => import('src/pages/HomePage'))
const OneTimePasscodePage = lazy(() => import('src/pages/OneTimePasscodePage'))
const ProfilePage = lazy(() => import('src/pages/ProfilePage'))
const ResetPasswordPage = lazy(() => import('src/pages/ResetPasswordPage'))
const SigninPage = lazy(() => import('src/pages/SigninPage'))
const SignupPage = lazy(() => import('src/pages/SignupPage'))

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                index
                element={
                    <Suspense fallback={<LoadingPage />}>
                        <HomePage />
                    </Suspense>
                }
            />
            <Route element={<ProtectedRoute />}>
                <Route
                    path="admin"
                    element={
                        <Suspense fallback={<LoadingPage />}>
                            <AdminPage />
                        </Suspense>
                    }
                />
                <Route
                    path="profile"
                    element={
                        <Suspense fallback={<LoadingPage />}>
                            <ProfilePage />
                        </Suspense>
                    }
                />
            </Route>
            <Route
                path="blog"
                element={
                    <Suspense fallback={<LoadingPage />}>
                        <Blog />
                    </Suspense>
                }
            />
            <Route
                path="forgot"
                element={
                    <Suspense fallback={<LoadingPage />}>
                        <ForgotPasswordPage />
                    </Suspense>
                }
            />
            <Route
                path="otp"
                element={
                    <Suspense fallback={<LoadingPage />}>
                        <OneTimePasscodePage />
                    </Suspense>
                }
            />
            <Route
                path="reset"
                element={
                    <Suspense fallback={<LoadingPage />}>
                        <ResetPasswordPage />
                    </Suspense>
                }
            />
            <Route
                path="signin"
                element={
                    <Suspense fallback={<LoadingPage />}>
                        <SigninPage />
                    </Suspense>
                }
            />
            <Route
                path="signup"
                element={
                    <Suspense fallback={<LoadingPage />}>
                        <SignupPage />
                    </Suspense>
                }
            />
            <Route path="profile">
                <Route
                    path="dob"
                    element={
                        <Suspense fallback={<LoadingPage />}>
                            <MyDateOfBirthPage />
                        </Suspense>
                    }
                />
                <Route
                    path="location"
                    element={
                        <Suspense fallback={<LoadingPage />}>
                            <MyLocationPage />
                        </Suspense>
                    }
                />
                <Route
                    path="gender"
                    element={
                        <Suspense fallback={<LoadingPage />}>
                            <MyGenderPage />
                        </Suspense>
                    }
                />
                <Route
                    path="orientation"
                    element={
                        <Suspense fallback={<LoadingPage />}>
                            <MyOrientationPage />
                        </Suspense>
                    }
                />
                <Route
                    path="pics"
                    element={
                        <Suspense fallback={<LoadingPage />}>
                            <MyPicsPage />
                        </Suspense>
                    }
                />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </>
    )
)

export default function Routes() {
    return <RouterProvider router={router} />
}
