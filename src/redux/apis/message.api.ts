import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//type
import { IMessageParams } from '@type/message.type'

export const apiMessage = createApi({
  reducerPath: 'apiMessage',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  keepUnusedDataFor: 20,
  endpoints: (builder) => ({
    getMessage: builder.query<any, IMessageParams>({
      query: (params) => ({
        url: '/messages',
        method: 'GET',
        params
      })
    })
  })
})

export const { useGetMessageQuery } = apiMessage
