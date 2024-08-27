import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//interface
import { ApiResponse } from 'interfaces/common.interface'
import { IFunction } from 'interfaces/systems/function.interface'

export const apiFunction = createApi({
  reducerPath: 'apiFunction',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem('token')!)?.accessToken
      headers.set('Content-Type', 'application/json')

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['Function'],
  endpoints: (builder) => ({
    getFunctions: builder.query<IFunction[], void>({
      query: () => ({
        url: '/functions',
        method: 'GET'
      }),
      providesTags: ['Function'],
      transformResponse: (response: ApiResponse<IFunction[]>) => response.data
    })
  })
})

export const { useGetFunctionsQuery } = apiFunction
