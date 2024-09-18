import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//type
import { IParamsConservationHost, IParamsConservationUser } from '@type/conversation.type'
import { IParamsEvent } from '@type/event.type'
import { IChangePasswordPayload, IFollowPayload } from '@type/user.type'

//interface
import { ApiListResponse, IListData } from 'interfaces/common.interface'
import { IPaymentAccount } from 'interfaces/contents/payment.interface'
import { IUser } from 'interfaces/systems/user.interface'

export const apiUser = createApi({
  reducerPath: 'apiUser',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem('token')!)?.accessToken

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['User', 'Event'],
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => ({
        url: '/users',
        method: 'GET'
      }),
      providesTags: ['User']
    }),

    getUserById: builder.query<any, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'GET'
      }),
      providesTags: ['User']
    }),

    getEventsByUserId: builder.query<any, { userId: string; params: IParamsEvent }>({
      query: ({ userId, params }) => ({
        url: `/users/${userId}/events`,
        method: 'GET',
        params
      }),
      providesTags: ['Event'],
      transformResponse: (response: any) => {
        return response.data
      }
    }),

    createUser: builder.mutation<IUser, Partial<IUser>>({
      query: (data) => ({
        url: '/users',
        method: 'GET',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    updateUser: builder.mutation<IUser, { userId: string; data: any }>({
      query: ({ userId, data }) => ({
        url: `/users/${userId}`,
        method: 'PUT',
        body: data
      })
    }),

    deleteUser: builder.mutation<any, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['User']
    }),

    changePassword: builder.mutation<any, IChangePasswordPayload>({
      query: (data) => ({
        url: `/users/${data.userId}/change-password`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    getMenuByUserId: builder.query<any, string>({
      query: (userId) => ({
        url: `/users/${userId}/menu`,
        method: 'GET'
      }),
      providesTags: ['User']
    }),

    getReviewsByUserId: builder.query<any, string>({
      query: (userId) => ({
        url: `/users/${userId}/reviews`,
        method: 'GET',
        params: { size: 5 }
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['User']
    }),

    getEventsFavouriteByUserId: builder.query<any, string>({
      query: (userId) => ({
        url: `/users/${userId}/events/favorites`,
        method: 'GET'
      }),
      providesTags: ['User']
    }),

    getEventsTrashByUserId: builder.query<any, { userId: string; params: IParamsEvent }>({
      query: ({ userId, params }) => ({
        url: `/users/${userId}/events/trash`,
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['User', 'Event']
    }),

    getConversationByUser: builder.query<any, { userId: string; params: IParamsConservationUser }>({
      query: ({ userId, params }) => ({
        url: `/users/${userId}/conversations-by-user`,
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response.data
      }
    }),

    getConversationByHost: builder.query<any, { userId: string; params: IParamsConservationHost }>({
      query: ({ userId, params }) => ({
        url: `/users/${userId}/conversations-by-host`,
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response.data
      }
    }),

    followUser: builder.mutation<any, IFollowPayload>({
      query: (data) => ({
        url: `/users/followers/follow`,
        method: 'POST',
        body: data
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      invalidatesTags: ['User']
    }),

    unfollowUser: builder.mutation<any, IFollowPayload>({
      query: (data) => ({
        url: `/users/followers/unfollow`,
        method: 'POST',
        body: data
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      invalidatesTags: ['User']
    }),

    getPaymentAccounts: builder.query<IListData<IPaymentAccount[]>, string>({
      query: (userId) => ({
        url: `/users/${userId}/payments/accounts`,
        method: 'GET'
      }),
      transformResponse: (response: ApiListResponse<IPaymentAccount[]>) => response.data,
      providesTags: ['User']
    }),

    createPaymentAccount: builder.mutation<{ id: string }, { userId: string; data: FormData }>({
      query: ({ userId, data }) => ({
        url: `/users/${userId}/payments/accounts`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    updatePaymentAccount: builder.mutation<{ id: string }, { accountId: string; userId: string; data: FormData }>({
      query: ({ accountId, userId, data }) => ({
        url: `/users/${userId}/payments/accounts/${accountId}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    deletePaymentAccount: builder.mutation<{ id: string }, { accountId: string; userId: string }>({
      query: ({ accountId, userId }) => ({
        url: `/users/${userId}/payments/accounts/${accountId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['User']
    })
  })
})

export const {
  useGetUserByIdQuery,
  useGetEventsByUserIdQuery,
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useChangePasswordMutation,
  useGetMenuByUserIdQuery,
  useGetReviewsByUserIdQuery,
  useGetEventsFavouriteByUserIdQuery,
  useGetEventsTrashByUserIdQuery,
  useGetConversationByUserQuery,
  useGetConversationByHostQuery,
  useFollowUserMutation,
  useUnfollowUserMutation,
  useGetPaymentAccountsQuery,
  useCreatePaymentAccountMutation,
  useUpdatePaymentAccountMutation,
  useDeletePaymentAccountMutation
} = apiUser
