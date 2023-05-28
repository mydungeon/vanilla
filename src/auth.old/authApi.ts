import { baseApi } from 'src/auth.old/baseAuth'

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth',
                method: 'POST',
                body: { ...credentials },
            }),
        }),
    }),
})

export const { useLoginMutation } = authApi
