import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        signIn: builder.mutation({
            query: (body: { email: string; password: string }) => {
                return {
                    url: '/users/signin',
                    method: 'post',
                    body,
                }
            },
        }),
        signUp: builder.mutation({
            query: (body: {
                email: string
                firstName: string
                password: string
            }) => {
                return {
                    url: '/users/signup',
                    method: 'post',
                    body,
                }
            },
        }),
        forgot: builder.mutation({
            query: (body: { email: string }) => {
                return {
                    url: '/users/forgot',
                    method: 'post',
                    body,
                }
            },
        }),
        reset: builder.mutation({
            query: (body: { email: string; password: string }) => {
                return {
                    url: '/users/reset',
                    method: 'post',
                    body,
                }
            },
        }),
    }),
})

export const {
    useSignInMutation,
    useSignUpMutation,
    useForgotMutation,
    useResetMutation,
} = authApi
