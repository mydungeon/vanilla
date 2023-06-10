import React, { lazy, Suspense } from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import ProtectedRoute from '../ProtectedRoute'
import heartPreloader from 'src/assets/gif/heart-preloader.gif'
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
const SearchPage = lazy(() => import('src/pages/SearchPage'))

function Loading() {
    console.log('isLoading')
    return (
        <div className="preloader">
            <img src={heartPreloader} alt="loading..." />
        </div>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                index
                element={
                    <Suspense fallback={<Loading />}>
                        <HomePage />
                    </Suspense>
                }
            />
            <Route element={<ProtectedRoute />}>
                <Route
                    path="admin"
                    element={
                        <Suspense fallback={<Loading />}>
                            <AdminPage />
                        </Suspense>
                    }
                />
                <Route
                    path="profile"
                    element={
                        <Suspense fallback={<Loading />}>
                            <ProfilePage />
                        </Suspense>
                    }
                />
            </Route>
            <Route
                path="blog"
                element={
                    <Suspense fallback={<Loading />}>
                        <Blog />
                    </Suspense>
                }
            />
            <Route
                path="forgot"
                element={
                    <Suspense fallback={<Loading />}>
                        <ForgotPasswordPage />
                    </Suspense>
                }
            />
            <Route
                path="otp"
                element={
                    <Suspense fallback={<Loading />}>
                        <OneTimePasscodePage />
                    </Suspense>
                }
            />
            <Route
                path="reset"
                element={
                    <Suspense fallback={<Loading />}>
                        <ResetPasswordPage />
                    </Suspense>
                }
            />
            <Route
                path="search"
                element={
                    <Suspense fallback={<Loading />}>
                        <SearchPage />
                    </Suspense>
                }
            />
            <Route
                path="signin"
                element={
                    <Suspense fallback={<Loading />}>
                        <SigninPage />
                    </Suspense>
                }
            />
            <Route
                path="signup"
                element={
                    <Suspense fallback={<Loading />}>
                        <SignupPage />
                    </Suspense>
                }
            />
            <Route path="profile">
                <Route
                    path="dob"
                    element={
                        <Suspense fallback={<Loading />}>
                            <MyDateOfBirthPage />
                        </Suspense>
                    }
                />
                <Route
                    path="location"
                    element={
                        <Suspense fallback={<Loading />}>
                            <MyLocationPage />
                        </Suspense>
                    }
                />
                <Route
                    path="gender"
                    element={
                        <Suspense fallback={<Loading />}>
                            <MyGenderPage />
                        </Suspense>
                    }
                />
                <Route
                    path="orientation"
                    element={
                        <Suspense fallback={<Loading />}>
                            <MyOrientationPage />
                        </Suspense>
                    }
                />
                <Route
                    path="pics"
                    element={
                        <Suspense fallback={<Loading />}>
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
