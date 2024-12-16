import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiMessage = createApi({
  reducerPath: 'apiMessage',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    getMessage: builder.query<any, any>({
      query: (params) => ({
        url: '/messages',
        method: 'GET',
        params
      })
    })
  })
})

export const { useGetMessageQuery } = apiMessage
