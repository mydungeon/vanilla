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
    }),
})

export const { useSignInMutation } = authApi
