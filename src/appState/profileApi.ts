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
            }) => ({
                url: '/profile/create',
                method: 'post',
                body,
            }),
        }),
        getProfile: builder.query({
            query: ({ userId }) => ({
                url: `/profile/${userId}`,
                method: 'get',
            }),
        }),
    }),
})

export const { useCreateProfileMutation, useLazyGetProfileQuery } = profileApi
