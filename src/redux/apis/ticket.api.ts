import { IListData } from '@interfaces/common.interface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//interface
import { ITicketType } from 'interfaces/contents/ticketType.interface'

export const apiTicket = createApi({
  reducerPath: 'apiTicket',
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
  tagTypes: ['Ticket'],
  endpoints: (builder) => ({
    getTickets: builder.query<ITicketType[], void>({
      query: () => ({
        url: '/tickets',
        method: 'GET'
      }),
      providesTags: ['Ticket']
    }),

    getTicketsByCreated: builder.query<IListData<any>, any>({
      query: (params) => ({
        url: `/tickets/get-created-tickets`,
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['Ticket']
    }),

    getTicketById: builder.query<ITicketType, string>({
      query: (ticketId) => ({
        url: `/tickets/${ticketId}`,
        method: 'GET'
      }),
      providesTags: ['Ticket']
    }),

    createTicket: builder.mutation<ITicketType, Partial<ITicketType>>({
      query: (data) => ({
        url: '/tickets',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Ticket']
    }),

    updateTicket: builder.mutation<ITicketType, Partial<ITicketType>>({
      query: (data) => ({
        url: `/tickets/${data.id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Ticket']
    }),

    deleteTicket: builder.mutation<any, string>({
      query: (ticketId) => ({
        url: `/tickets/${ticketId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Ticket']
    })
  })
})

export const {
  useGetTicketByIdQuery,
  useGetTicketsByCreatedQuery,
  useGetTicketsQuery,
  useCreateTicketMutation,
  useUpdateTicketMutation,
  useDeleteTicketMutation
} = apiTicket
