import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from 'src/appState/baseApi'

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery,
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
