import { IListData } from '@interfaces/common.interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//type
import { IChangePasswordPayload } from '@type/user.type'

//interface
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

    changePassword: builder.mutation<any, IChangePasswordPayload>({
      query: (data) => ({
        url: `/users/${data.userId}/change-password`,
        method: 'PATCH',
        body: data
      }),
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
    })
  })
})

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useChangePasswordMutation,
  useGetFollowerByUserIdQuery,
  useGetFollowingByUserIdQuery,
  useFollowUserMutation,
  useUnFollowUserMutation,
  useCheckFollowerQuery
} = apiUser
