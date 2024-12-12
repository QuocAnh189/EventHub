import { IListData } from '@interfaces/common.interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//type
import { IParamsEvent, IParamsReview, IReviewEventPayload } from '@type/event.type'

//interface
import { IEvent, IEventFavorite } from 'interfaces/contents/event.interface'
import queryString from 'query-string'

export const apiEvent = createApi({
  reducerPath: 'apiEvent',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    paramsSerializer: (params: Record<string, unknown>) => queryString.stringify(params, { arrayFormat: 'none' }),
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem('token')!)?.accessToken

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  keepUnusedDataFor: 20,

  tagTypes: ['Event', 'Review'],
  endpoints: (builder) => ({
    getEvents: builder.query<IListData<any>, IParamsEvent | any>({
      query: (params) => ({
        url: '/events/',
        method: 'GET',
        params
      }),
      providesTags: ['Event'],
      transformResponse: (response: any) => {
        return response.data
      }
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

    updateEvent: builder.mutation<IEvent, FormData>({
      query: (data) => ({
        url: `/events/${data.get('id')}`,
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

    deleteMultipleEvent: builder.mutation<any, string[]>({
      query: (ids) => ({
        url: `/events/`,
        method: 'DELETE',
        body: { ids }
      }),
      invalidatesTags: ['Event']
    }),

    getEventByCreator: builder.query<IListData<any>, any>({
      query: (params) => ({
        url: `/events/get-created-events`,
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['Event']
    }),

    getEventAnalysisByCreator: builder.query<IListData<any>, any>({
      query: (params) => ({
        url: '/events/get-created-events-analysis',
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['Event']
    }),

    deletePermanentEvent: builder.mutation<any, string>({
      query: (eventId) => ({
        url: `/events/delete-permanently/${eventId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Event']
    }),

    restoreEvent: builder.mutation<any, string[]>({
      query: (ids) => ({
        url: '/events/restore',
        method: 'PATCH',
        body: { ids }
      }),
      invalidatesTags: ['Event']
    }),

    getTrashEvents: builder.query<IListData<any>, IParamsEvent | any>({
      query: (params) => ({
        url: `/events/get-deleted-events`,
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['Event']
    }),

    addReview: builder.mutation<any, { eventId: string; data: IReviewEventPayload }>({
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

    updateReview: builder.mutation<any, { eventId: string; reviewId: string; data: IReviewEventPayload }>({
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

    favouriteEvent: builder.mutation<any, string>({
      query: (eventId) => ({
        url: `/events/favourite/${eventId}`,
        method: 'PATCH'
      }),
      invalidatesTags: ['Event']
    }),

    unfavouriteEvent: builder.mutation<any, string>({
      query: (eventId) => ({
        url: `/events/unfavourite/${eventId}`,
        method: 'PATCH'
      }),
      invalidatesTags: ['Event']
    }),

    getFavouriteEvent: builder.query<IListData<IEventFavorite>, IParamsEvent | any>({
      query: (params) => ({
        url: `/events/get-favourite-events`,
        method: 'GET',
        params: params
      }),
      providesTags: ['Event'],
      transformResponse: (response: any) => {
        return response.data
      }
    }),

    makeEventPrivate: builder.mutation<any, string[]>({
      query: (ids) => ({
        url: `/events/make-events-private`,
        method: 'PATCH',
        body: { ids }
      }),
      invalidatesTags: ['Event']
    }),

    makeEventPublic: builder.mutation<any, string[]>({
      query: (ids) => ({
        url: `/events/make-events-public`,
        method: 'PATCH',
        body: { ids }
      }),
      invalidatesTags: ['Event']
    }),

    checkFavourite: builder.query<any, string>({
      query: (eventId) => ({
        url: `/events/check-favourite/${eventId}`,
        method: 'GET'
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['Event']
    })
  })
})

export const {
  useGetEventsQuery,
  useGetEventByIdQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
  useDeleteMultipleEventMutation,
  useGetEventByCreatorQuery,
  useGetEventAnalysisByCreatorQuery,
  useDeletePermanentEventMutation,
  useRestoreEventMutation,
  useGetTrashEventsQuery,
  useAddReviewMutation,
  useGetReviewsByEventIdQuery,
  useGetReviewByIdQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useFavouriteEventMutation,
  useUnfavouriteEventMutation,
  useGetFavouriteEventQuery,
  useMakeEventPrivateMutation,
  useMakeEventPublicMutation,
  useCheckFavouriteQuery
} = apiEvent
