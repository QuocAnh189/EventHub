import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//interface
import { IReview } from '@interfaces/contents/review.interface'
import { IListData } from '@interfaces/common.interface'

export const apiReview = createApi({
  reducerPath: 'apiReview',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem('token')!)?.accessToken
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['Review'],
  endpoints: (builder) => ({
    getReviews: builder.query<IReview[], void>({
      query: () => ({
        url: '/reviews',
        method: 'GET'
      }),
      providesTags: ['Review']
    }),

    getReviewsByEventId: builder.query<IListData<IReview>, { eventId: string; params: any }>({
      query: ({ eventId, params }) => ({
        url: `/reviews/get-by-event/${eventId}`,
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['Review']
    }),

    getReviewsByUserId: builder.query<IReview[], string>({
      query: (userId) => ({
        url: `/reviews/get-by-user/${userId}`,
        method: 'GET'
      }),
      providesTags: ['Review']
    }),

    getReviewsByCreatedEvents: builder.query<IListData<IReview>, any>({
      query: (params) => ({
        url: '/reviews/get-by-created-events',
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['Review']
    }),

    updateReview: builder.mutation<IReview, IReview>({
      query: (data) => ({
        url: `/reviews/${data.id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Review']
    }),

    deleteReview: builder.mutation<string, IReview>({
      query: (data) => ({
        url: `/reviews/${data.id}`,
        method: 'DELETE',
        body: data
      }),
      invalidatesTags: ['Review']
    })
  })
})

export const {
  useGetReviewsQuery,
  useGetReviewsByEventIdQuery,
  useGetReviewsByUserIdQuery,
  useGetReviewsByCreatedEventsQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation
} = apiReview
