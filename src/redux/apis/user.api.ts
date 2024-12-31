import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//interface
import { IListData } from '@interfaces/common.interface'
import { IUser } from 'interfaces/systems/user.interface'

//dto
import { IChangePasswordsPayload } from '@dtos/user.dto'

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
  tagTypes: ['User'],

  endpoints: (builder) => ({
    getUsers: builder.query<IListData<any>, any>({
      query: (params) => ({
        url: '/users/',
        method: 'GET',
        params: params
      }),
      providesTags: ['User'],
      transformResponse: (response: any) => response.data
    }),

    getProfile: builder.query<IUser, void>({
      query: () => ({
        url: '/users/profile',
        method: 'GET'
      }),
      providesTags: ['User'],
      transformResponse: (response: any) => response.data
    }),

    getUserById: builder.query<IUser, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'GET'
      }),
      transformResponse: (response: any) => response.data,
      providesTags: ['User']
    }),

    createUser: builder.mutation<IUser, FormData>({
      query: (formData) => ({
        url: '/users',
        method: 'GET',
        body: formData
      }),
      invalidatesTags: ['User']
    }),

    updateUser: builder.mutation<IUser, { userId: string; formData: FormData }>({
      query: ({ userId, formData }) => ({
        url: `/users/${userId}`,
        method: 'PUT',
        body: formData
      }),
      transformResponse: (response: any) => response.data,
      invalidatesTags: ['User']
    }),

    changePassword: builder.mutation<any, IChangePasswordsPayload>({
      query: (data) => ({
        url: `/users/change-password`,
        method: 'PATCH',
        body: data
      }),
      transformErrorResponse: (error) => {
        return error.data
      },
      invalidatesTags: ['User']
    }),

    getFollowerByUserId: builder.query<IListData<any>, { userId: string; params: any }>({
      query: ({ userId, params }) => ({
        url: `/users/${userId}/followers`,
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['User']
    }),

    getFollowingByUserId: builder.query<IListData<any>, { userId: string; params: any }>({
      query: ({ userId, params }) => ({
        url: `/users/${userId}/followings`,
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['User']
    }),

    followUser: builder.mutation<any, string>({
      query: (followeeId) => ({
        url: `/users/follow/${followeeId}`,
        method: 'PATCH'
      }),
      invalidatesTags: ['User']
    }),

    unFollowUser: builder.mutation<any, string>({
      query: (followeeId) => ({
        url: `/users/unfollow/${followeeId}`,
        method: 'PATCH'
      }),
      invalidatesTags: ['User']
    }),

    checkFollower: builder.query<any, string>({
      query: (followeeId) => ({
        url: `/users/check-follower/${followeeId}`,
        method: 'GET'
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['User']
    }),

    getInvitations: builder.query<IListData<any>, any>({
      query: (params) => ({
        url: '/users/invitations',
        method: 'GET',
        params
      }),
      providesTags: ['User'],
      transformResponse: (response: any) => response.data,
      keepUnusedDataFor: 3
    }),

    checkInvitation: builder.query<any, { inviteeId: string; eventId: string }>({
      query: ({ inviteeId, eventId }) => ({
        url: `/users/check-invitation/${inviteeId}`,
        method: 'GET',
        params: { inviteeId, eventId }
      }),
      providesTags: ['User'],
      transformResponse: (response: any) => response.data
    }),

    invitationUsers: builder.mutation<any, { userIds: string[]; eventId: string }>({
      query: (data) => ({
        url: '/users/invitations',
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['User']
    }),

    getNotificationFollowings: builder.query<IListData<any>, any>({
      query: (params) => ({
        url: '/users/notification-following',
        method: 'GET',
        params
      }),
      providesTags: ['User'],
      transformResponse: (response: any) => response.data,
      keepUnusedDataFor: 3
    })
  })
})

export const {
  useGetUsersQuery,
  useGetProfileQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useChangePasswordMutation,
  useGetFollowerByUserIdQuery,
  useGetFollowingByUserIdQuery,
  useFollowUserMutation,
  useUnFollowUserMutation,
  useCheckFollowerQuery,
  useGetInvitationsQuery,
  useCheckInvitationQuery,
  useInvitationUsersMutation,
  useGetNotificationFollowingsQuery
} = apiUser
