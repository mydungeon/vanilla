import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import ProtectedRoute from 'src/routes/ProtectedRoute'
import { Pages, Suspended } from 'src/pages'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                index
                element={
                    <Suspended>
                        <Pages.HomePage />
                    </Suspended>
                }
            />
            <Route element={<ProtectedRoute />}>
                Pages.
                <Route
                    path="admin"
                    element={
                        <Suspended>
                            <Pages.AdminPage />
                        </Suspended>
                    }
                />
                <Route
                    path="profile/:userId"
                    element={
                        <Suspended>
                            <Pages.ProfilePage />
                        </Suspended>
                    }
                />
            </Route>
            <Route
                path="blog"
                element={
                    <Suspended>
                        <Pages.Blog />
                    </Suspended>
                }
            />
            <Route
                path="forgot"
                element={
                    <Suspended>
                        <Pages.ForgotPasswordPage />
                    </Suspended>
                }
            />
            <Route
                path="otp"
                element={
                    <Suspended>
                        <Pages.OneTimePasscodePage />
                    </Suspended>
                }
            />
            <Route
                path="reset"
                element={
                    <Suspended>
                        <Pages.ResetPasswordPage />
                    </Suspended>
                }
            />
            <Route
                path="signin"
                element={
                    <Suspended>
                        <Pages.SigninPage />
                    </Suspended>
                }
            />
            <Route
                path="signup"
                element={
                    <Suspended>
                        <Pages.SignupPage />
                    </Suspended>
                }
            />
            <Route path="profile">
                <Route
                    path="dob"
                    element={
                        <Suspended>
                            <Pages.MyProfile.DateOfBirthPage />
                        </Suspended>
                    }
                />
                <Route
                    path="location"
                    element={
                        <Suspended>
                            <Pages.MyProfile.LocationPage />
                        </Suspended>
                    }
                />
                <Route
                    path="gender"
                    element={
                        <Suspended>
                            <Pages.MyProfile.GenderPage />
                        </Suspended>
                    }
                />
                <Route
                    path="orientation"
                    element={
                        <Suspended>
                            <Pages.MyProfile.OrientationPage />
                        </Suspended>
                    }
                />
                <Route
                    path="pics"
                    element={
                        <Suspended>
                            <Pages.MyProfile.PicsPage />
                        </Suspended>
                    }
                />
            </Route>
            <Route path="*" element={<Pages.NotFoundPage />} />
        </>
    )
)

export default function Routes() {
    return <RouterProvider router={router} />
}
