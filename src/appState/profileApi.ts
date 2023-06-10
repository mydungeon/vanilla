import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { baseQuery } from 'src/appState/baseQuery'

export const profileApi = createApi({
    reducerPath: 'profileApi',
    //TODO: import baseQuery with auth headers from ./baseQuery.ts
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        createProfile: builder.mutation({
            query: (body: {
                dob: string
                gender: string
                orientation: string
                zipCode: string
            }) => {
                return {
                    url: '/profile/create',
                    method: 'post',
                    body,
                }
            },
        }),
    }),
})

export const { useCreateProfileMutation } = profileApi
