// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// //interface
// import { ApiResponse } from 'interfaces/common.interface'
// import { IFunction } from 'interfaces/systems/function.interface'

// export const apiFunction = createApi({
//   reducerPath: 'apiFunction',
//   baseQuery: fetchBaseQuery({
//     baseUrl: import.meta.env.VITE_API_URL,
//     prepareHeaders: (headers) => {
//       const token = JSON.parse(localStorage.getItem('token')!)?.accessToken
//       headers.set('Content-Type', 'application/json')

//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`)
//       }

//       return headers
//     }
//   }),
//   keepUnusedDataFor: 20,
//   tagTypes: ['Function'],
//   endpoints: (builder) => ({
//     getFunctions: builder.query<IFunction[], void>({
//       query: () => ({
//         url: '/functions',
//         method: 'GET'
//       }),
//       providesTags: ['Function'],
//       transformResponse: (response: ApiResponse<IFunction[]>) => response.data
//     }),

//     getFunctionById: builder.query<IFunction, string>({
//       query: (functionId) => ({
//         url: `/functions/${functionId}`,
//         method: 'GET'
//       }),
//       providesTags: ['Function'],
//       transformResponse: (response: ApiResponse<IFunction>) => response.data
//     }),

//     createFunction: builder.mutation<IFunction, IFunction>({
//       query: (data) => ({
//         url: '/functions',
//         method: 'POST',
//         body: data
//       }),
//       invalidatesTags: ['Function'],
//       transformResponse: (response: ApiResponse<IFunction>) => response.data
//     }),

//     updateFunction: builder.mutation<IFunction, IFunction>({
//       query: (data) => ({
//         url: `/functions/${data.id}`,
//         method: 'PUT',
//         body: data
//       }),
//       invalidatesTags: ['Function'],
//       transformResponse: (response: ApiResponse<IFunction>) => response.data
//     }),

//     deleteFunction: builder.mutation<string, string>({
//       query: (functionId) => ({
//         url: `/functions/${functionId}`,
//         method: 'DELETE'
//       }),
//       invalidatesTags: ['Function']
//     }),

//     enableCommandFunction: builder.mutation<IFunction, { functionId: string; commandId: string }>({
//       query: ({ functionId, commandId }) => ({
//         url: `/functions/${functionId}/enable-command/${commandId}`,
//         method: 'POST'
//       }),
//       invalidatesTags: ['Function'],
//       transformResponse: (response: ApiResponse<IFunction>) => response.data
//     }),

//     disableCommandFunction: builder.mutation<IFunction, { functionId: string; commandId: string }>({
//       query: ({ functionId, commandId }) => ({
//         url: `/functions/${functionId}/enable-command/${commandId}`,
//         method: 'POST'
//       }),
//       invalidatesTags: ['Function'],
//       transformResponse: (response: ApiResponse<IFunction>) => response.data
//     })
//   })
// })

// export const {
//   useGetFunctionsQuery,
//   useGetFunctionByIdQuery,
//   useCreateFunctionMutation,
//   useUpdateFunctionMutation,
//   useDeleteFunctionMutation,
//   useEnableCommandFunctionMutation,
//   useDisableCommandFunctionMutation
// } = apiFunction
