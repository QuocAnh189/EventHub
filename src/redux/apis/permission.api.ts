import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//type
import { UpdatePermissionByRolePayload, UpdatePermissionPayload } from '@type/permission.type'

//interface
import { ApiResponse } from 'interfaces/common.interface'
import { IPermissionScreen, IRolePermission } from 'interfaces/systems'

export const apiPermission = createApi({
  reducerPath: 'apiPermission',
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
  tagTypes: ['Permission'],
  endpoints: (builder) => ({
    getPermissions: builder.query<IPermissionScreen[], void>({
      query: () => ({
        url: '/permissions',
        method: 'GET'
      }),
      providesTags: ['Permission'],
      transformResponse: (response: ApiResponse<IPermissionScreen[]>) => response.data
    }),
    getPermissionsByRole: builder.query<IRolePermission[], void>({
      query: () => ({
        url: '/permissions/roles',
        method: 'GET'
      }),
      providesTags: ['Permission'],
      transformResponse: (response: ApiResponse<IRolePermission[]>) => response.data
    }),
    updatePermission: builder.mutation<IPermissionScreen[], UpdatePermissionPayload>({
      query: (data) => ({
        url: '/permissions',
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Permission'],
      transformResponse: (response: ApiResponse<IPermissionScreen[]>) => response.data
    }),
    updatePermissionByRole: builder.mutation<IRolePermission[], UpdatePermissionByRolePayload>({
      query: (data) => ({
        url: '/permissions/roles',
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Permission'],
      transformResponse: (response: ApiResponse<IRolePermission[]>) => response.data
    })
  })
})

export const {
  useGetPermissionsQuery,
  useGetPermissionsByRoleQuery,
  useUpdatePermissionMutation,
  useUpdatePermissionByRoleMutation
} = apiPermission
