import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { EPaymentStatus } from '@constants/enum.constant'

//type
import { IParamsEvent } from '@type/event.type'
import { CheckoutPayload, UpdateOrderPayload } from '@type/payment.type'

//interface
import { ApiListResponse, IListData } from 'interfaces/common.interface'
import { IPayment, IPaymentMethod } from 'interfaces/contents/payment.interface'

export const apiPayment = createApi({
  reducerPath: 'apiPayment',
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
  tagTypes: ['Payment'],
  endpoints: (builder) => ({
    getPayments: builder.query<any, void>({
      query: () => ({
        url: '/payments',
        method: 'GET'
      }),
      providesTags: ['Payment']
    }),

    getPayment: builder.query<any, string>({
      query: (paymentId) => ({
        url: `/payments/${paymentId}`,
        method: 'GET'
      }),
      providesTags: ['Payment']
    }),

    createPayment: builder.mutation<IPayment, IPayment>({
      query: (data) => ({
        url: '/payments',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Payment']
    }),

    updatePayment: builder.mutation<void, UpdateOrderPayload>({
      query: ({ paymentId, ...payload }) => ({
        url: `/payments/${paymentId}`,
        method: 'PATCH',
        body: payload
      }),
      invalidatesTags: ['Payment']
    }),

    acceptOrder: builder.mutation<void, { paymentId: string }>({
      query: ({ paymentId }) => ({
        url: `/payments/${paymentId}/accept`,
        method: 'PATCH',
        body: {}
      }),
      invalidatesTags: ['Payment']
    }),

    rejectOrder: builder.mutation<void, { paymentId: string }>({
      query: ({ paymentId }) => ({
        url: `/payments/${paymentId}/reject`,
        method: 'PATCH',
        body: {}
      }),
      invalidatesTags: ['Payment']
    }),

    updateOrderStatus: builder.mutation<void, { paymentId: string; status: EPaymentStatus }>({
      query: ({ paymentId, status }) => ({
        url: `/payments/${paymentId}/status`,
        method: 'PATCH',
        body: { status: status }
      }),
      invalidatesTags: ['Payment']
    }),

    deletePayment: builder.mutation<any, string>({
      query: (paymentId) => ({
        url: `/payments/${paymentId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Payment']
    }),

    getPaymentMethods: builder.query<IPaymentMethod[], void>({
      query: () => ({
        url: `/payments/payment-methods`,
        method: 'GET'
      }),
      transformResponse: (response: ApiListResponse<IPaymentMethod[]>) => {
        return response.data.items
      },
      providesTags: ['Payment']
    }),

    checkout: builder.mutation<{ id: string }, CheckoutPayload>({
      query: (data) => ({
        url: `/payments/checkout`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Payment']
    }),

    getPaymentsByUserId: builder.query<IListData<IPayment[]>, { userId: string; filter?: IParamsEvent }>({
      query: ({ userId, filter }) => ({
        url: `/users/${userId}/payments`,
        method: 'GET',
        params: filter
      }),
      providesTags: ['Payment'],
      transformResponse: (response: ApiListResponse<IPayment[]>) => {
        return response.data
      }
    }),

    getPaymentsByCreatorId: builder.query<IListData<IPayment[]>, { creatorId: string; filter?: IParamsEvent }>({
      query: ({ creatorId, filter }) => ({
        url: `/users/${creatorId}/payments/creator`,
        method: 'GET',
        params: filter
      }),
      providesTags: ['Payment'],
      transformResponse: (response: ApiListResponse<IPayment[]>) => {
        return response.data
      }
    })
  })
})

export const {
  useGetPaymentsQuery,
  useGetPaymentQuery,
  useCreatePaymentMutation,
  useUpdatePaymentMutation,
  useDeletePaymentMutation,
  useGetPaymentMethodsQuery,
  useCheckoutMutation,
  useGetPaymentsByUserIdQuery,
  useGetPaymentsByCreatorIdQuery,
  useAcceptOrderMutation,
  useRejectOrderMutation,
  useUpdateOrderStatusMutation
} = apiPayment
