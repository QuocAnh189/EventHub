import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//interface
import { IExpense } from '@interfaces/contents/expense.interface'
import { IListData } from '@interfaces/common.interface'

//dto
import {
  ICreateExpensePayload,
  IUpdateExpensePayload,
  ICreatedSubExpensePayload,
  IUpdateSubExpensePayload
} from '@dtos/expense.dto'

export const apiExpense = createApi({
  reducerPath: 'apiExpense',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem('token')!)?.accessToken
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['Expense'],
  endpoints: (builder) => ({
    getExpenses: builder.query<IListData<any>, any>({
      query: (params) => ({
        url: '/expenses/',
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['Expense']
    }),

    getExpensesByEvent: builder.query<IListData<any>, { eventId: string; params: any }>({
      query: ({ eventId, params }) => ({
        url: `/expenses/get-by-event/${eventId}`,
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['Expense']
    }),

    createExpense: builder.mutation<any, ICreateExpensePayload>({
      query: (data) => ({
        url: `/expenses/`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Expense']
    }),

    updateExpense: builder.mutation<IExpense, IUpdateExpensePayload>({
      query: (data) => ({
        url: `/expenses/${data.id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Expense']
    }),

    deleteExpense: builder.mutation<string, string>({
      query: (id) => ({
        url: `/expenses/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Expense']
    }),

    createSubExpense: builder.mutation<any, ICreatedSubExpensePayload>({
      query: (data) => ({
        url: `/expenses/${data.expenseId}/sub-expense`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Expense']
    }),

    updateSubExpense: builder.mutation<any, IUpdateSubExpensePayload>({
      query: (data) => ({
        url: `/expenses/${data.expenseId}/sub-expense/${data.id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Expense']
    }),

    deleteSubExpense: builder.mutation<any, { expenseId: string; subExpenseId: string }>({
      query: ({ expenseId, subExpenseId }) => ({
        url: `/expenses/${expenseId}/sub-expense/${subExpenseId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Expense']
    })
  })
})

export const {
  useGetExpensesQuery,
  useGetExpensesByEventQuery,
  useCreateExpenseMutation,
  useUpdateExpenseMutation,
  useDeleteExpenseMutation,
  useCreateSubExpenseMutation,
  useUpdateSubExpenseMutation,
  useDeleteSubExpenseMutation
} = apiExpense
