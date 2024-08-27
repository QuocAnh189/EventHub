import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiCommand = createApi({
  reducerPath: 'apiCommand',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    getCommand: builder.query<any, void>({
      query: () => ({
        url: '/commands',
        method: 'GET'
      })
    })
  })
})

export const { useGetCommandQuery } = apiCommand
