import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import type { RootState } from './store'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }

        return headers
    },
})

export const baseApi = createApi({
    baseQuery,
    endpoints: () => ({}),
})
