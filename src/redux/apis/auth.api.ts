import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { LoginPayload, SignUpPayload, ForgotPassPayload, IParamsExternalLogin } from '@type/auth.type'

//interface
import { IAuth } from '@interfaces/systems/auth.interface'
import { IUser } from 'interfaces/systems/user.interface'

export const apiAuth = createApi({
  reducerPath: 'apiAuth',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  keepUnusedDataFor: 20,

  endpoints: (builder) => ({
    validateUser: builder.mutation<IAuth, any>({
      query: (data) => ({
        url: '/auth/validate-user',
        method: 'POST',
        body: data
      })
    }),

    signUp: builder.mutation<IAuth, SignUpPayload>({
      query: (data) => ({
        url: '/auth/signup',
        method: 'POST',
        body: data
      }),
      transformResponse: (response: any) => response.data
    }),

    signIn: builder.mutation<IAuth, LoginPayload>({
      query: (data) => ({
        url: '/auth/signin',
        method: 'POST',
        body: data
      }),
      transformResponse: (response: any) => response.data
    }),

    signOut: builder.mutation<any, void>({
      query: () => ({
        url: '/auth/signout',
        method: 'POST'
      })
    }),

    signInExternal: builder.mutation<IAuth, IParamsExternalLogin>({
      query: (params) => ({
        url: '/auth/external-login',
        method: 'POST',
        params
      })
    }),

    externalAuthCallBack: builder.query<IAuth, void>({
      query: () => ({
        url: '/auth/external-auth-callback',
        method: 'GET'
      })
    }),

    refreshToken: builder.mutation<IAuth, void>({
      query: () => ({
        url: '/auth/refresh-token',
        method: 'POST'
      })
    }),

    forgotPassword: builder.mutation<IAuth, ForgotPassPayload>({
      query: (data) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: data
      })
    }),

    resetPassword: builder.mutation<IAuth, void>({
      query: () => ({
        url: '/auth/reset-password',
        method: 'POST'
      })
    }),

    getProfile: builder.query<IUser, void>({
      query: () => ({
        url: '/auth/profile',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')!).accessToken}`
        }
      }),
      transformResponse: (response: any) => response.data
    })
  })
})

export const {
  useValidateUserMutation,
  useSignUpMutation,
  useSignInMutation,
  useSignOutMutation,
  useSignInExternalMutation,
  useExternalAuthCallBackQuery,
  useRefreshTokenMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetProfileQuery
} = apiAuth
