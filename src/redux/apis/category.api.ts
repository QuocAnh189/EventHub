import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//type
import { CategoryPayload } from '@type/category.type'

//interface
import { ICategory } from 'interfaces/contents/category.interface'

export const apiCategory = createApi({
  reducerPath: 'apiCategory',
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
  tagTypes: ['Category'],
  endpoints: (builder) => ({
    createCategory: builder.mutation<ICategory, CategoryPayload>({
      query: (data) => ({
        url: '/categories',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Category']
    }),

    getCategories: builder.query<ICategory[], void>({
      query: () => ({
        url: '/categories/',
        method: 'GET'
      }),
      providesTags: ['Category'],
      transformResponse: (response: any) => response.data.items
    }),

    getCategoryById: builder.query<ICategory, string>({
      query: (categoryId) => ({
        url: `/categories/${categoryId}`,
        method: 'GET'
      }),
      providesTags: ['Category']
    }),

    updateCategory: builder.mutation<ICategory, Partial<ICategory>>({
      query: (data) => ({
        url: `/categories/${data.id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Category']
    }),

    deleteCategory: builder.mutation<any, string>({
      query: (categoryId) => ({
        url: `/categories/${categoryId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Category']
    })
  })
})

export const {
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation
} = apiCategory
