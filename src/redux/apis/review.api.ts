import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//interface
import { IReview } from '@interfaces/contents/review.interface'

export const apiReview = createApi({
  reducerPath: 'apiReview',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
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

    getReviewsByEventId: builder.query<IReview[], string>({
      query: (eventId) => ({
        url: `/reviews/get-by-event/${eventId}`,
        method: 'GET'
      }),
      providesTags: ['Review']
    }),

    getReviewsByUserId: builder.query<IReview[], string>({
      query: (userId) => ({
        url: `/reviews/get-by-user/${userId}`,
        method: 'GET'
      }),
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
  useLazyGetReviewsByUserIdQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation
} = apiReview
