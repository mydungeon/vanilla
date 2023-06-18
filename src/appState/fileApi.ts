import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from 'src/appState/baseApi'
export const fileApi = createApi({
    reducerPath: 'fileApi',
    baseQuery,
    endpoints: (builder) => ({
        uploadFile: builder.mutation<{}, FormData>({
            query: (body) => {
                console.log('uploadFile api', Object.fromEntries(body))
                return {
                    url: '/file/upload',
                    method: 'post',
                    body,
                    formData: true,
                }
            },
        }),
    }),
})

export const { useUploadFileMutation } = fileApi
