import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//type
import {
  IFavoriteEventPayload,
  IParamsEvent,
  IParamsReview,
  IReviewEventPayload
} from '@type/event.type'

//interface
import { IEvent } from 'interfaces/contents/event.interface'
import queryString from 'query-string'

export const apiEvent = createApi({
  reducerPath: 'apiEvent',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    paramsSerializer: (params: Record<string, unknown>) =>
      queryString.stringify(params, { arrayFormat: 'none' }),
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem('token')!)?.accessToken

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  keepUnusedDataFor: 2,

  tagTypes: ['Event', 'Review'],
  endpoints: (builder) => ({
    getEvents: builder.query<any, IParamsEvent | any>({
      query: (params) => ({
        url: '/events',
        method: 'GET',
        params
      }),
      providesTags: ['Event'],
      transformResponse: (response: any) => {
        return response.data
      }
    }),

    getEventsByCreatorId: builder.query<Partial<IEvent>[], string>({
      query: (userId) => ({
        url: `/events/users/${userId}`,
        method: 'GET'
      }),
      providesTags: ['Event']
    }),

    getEventById: builder.query<IEvent, string>({
      query: (eventId) => ({
        url: `/events/${eventId}`,
        method: 'GET'
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['Event']
    }),

    createEvent: builder.mutation<IEvent, FormData>({
      query: (data) => ({
        url: '/events',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Event']
    }),

    updateEvent: builder.mutation<IEvent, { eventId: string; data: FormData }>({
      query: ({ eventId, data }) => ({
        url: `/events/${eventId}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Event']
    }),

    deleteEvent: builder.mutation<any, string>({
      query: (eventId) => ({
        url: `/events/${eventId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Event']
    }),

    deleteEvents: builder.mutation<any, string[]>({
      query: (ids) => ({
        url: `/events/delele-events`,
        method: 'PATCH',
        body: ids
      }),
      invalidatesTags: ['Event']
    }),

    addReview: builder.mutation<
      any,
      { eventId: string; data: IReviewEventPayload }
    >({
      query: ({ eventId, data }) => ({
        url: `/events/${eventId}/reviews`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Review']
    }),

    getReviewsByEventId: builder.query<any, IParamsReview>({
      query: (params) => ({
        url: `/events/${params.eventId}/reviews`,
        method: 'GET',
        params
      }),
      providesTags: ['Review'],
      transformResponse: (response: any) => {
        return response.data
      }
    }),

    getReviewById: builder.query<any, { eventId: string; reviewId: string }>({
      query: ({ eventId, reviewId }) => ({
        url: `/events/${eventId}/reviews/${reviewId}`,
        method: 'GET'
      }),
      providesTags: ['Review']
    }),

    updateReview: builder.mutation<
      any,
      { eventId: string; reviewId: string; data: IReviewEventPayload }
    >({
      query: ({ eventId, reviewId, data }) => ({
        url: `/events/${eventId}/reviews/${reviewId}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Review']
    }),

    deleteReview: builder.mutation<any, { eventId: string; reviewId: string }>({
      query: ({ eventId, reviewId }) => ({
        url: `/events/${eventId}/reviews/${reviewId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Review']
    }),

    favoriteEvent: builder.mutation<any, IFavoriteEventPayload>({
      query: (data) => ({
        url: `/events/${data.eventId}/favorites/subscribe`,
        method: 'POST',
        body: data
      })
      // invalidatesTags: ['Event']
    }),

    unfavoriteEvent: builder.mutation<any, IFavoriteEventPayload>({
      query: (data) => ({
        url: `/events/${data.eventId}/favorites/unsubscribe`,
        method: 'POST',
        body: data
      })
      // invalidatesTags: ['Event']
    }),

    moveEventPublic: builder.mutation<any, string[]>({
      query: (ids) => ({
        url: `/events/move-to-public`,
        method: 'PATCH',
        body: ids
      }),
      invalidatesTags: ['Event']
    }),

    moveEventPrivate: builder.mutation<any, string[]>({
      query: (ids) => ({
        url: `/events/move-to-private`,
        method: 'PATCH',
        body: ids
      }),
      invalidatesTags: ['Event']
    }),

    moveEventTrash: builder.mutation<any, string[]>({
      query: (ids) => ({
        url: `/events/move-to-trash`,
        method: 'PATCH',
        body: ids
      }),
      invalidatesTags: ['Event']
    }),

    restoreEvent: builder.mutation<any, string[]>({
      query: (ids) => ({
        url: `/events/recover`,
        method: 'PATCH',
        body: ids
      }),
      invalidatesTags: ['Event']
    })
  })
})

export const {
  useGetEventsQuery,
  useGetEventsByCreatorIdQuery,
  useGetEventByIdQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
  useDeleteEventsMutation,
  useAddReviewMutation,
  useGetReviewsByEventIdQuery,
  useGetReviewByIdQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useFavoriteEventMutation,
  useUnfavoriteEventMutation,
  useMoveEventPublicMutation,
  useMoveEventPrivateMutation,
  useMoveEventTrashMutation,
  useRestoreEventMutation
} = apiEvent
