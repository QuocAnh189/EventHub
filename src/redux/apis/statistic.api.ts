import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiStatistic = createApi({
  reducerPath: 'apiStatistic',
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
  tagTypes: ['Statistic'],

  endpoints: (builder) => ({
    getCustomerRetentionRate: builder.query<any, void>({
      query: () => ({
        url: '/statistic/customer-retention-rate',
        method: 'GET'
      }),
      providesTags: ['Statistic'],
      transformResponse: (response: any) => response.data
    }),

    getCustomerConversionRate: builder.query<any, void>({
      query: () => ({
        url: '/statistic/customer-conversion-rate',
        method: 'GET'
      }),
      providesTags: ['Statistic'],
      transformResponse: (response: any) => response.data
    }),

    getCustomerSegmentationAge: builder.query<any, void>({
      query: () => ({
        url: '/statistic/customer-segmentation-age',
        method: 'GET'
      }),
      providesTags: ['Statistic'],
      transformResponse: (response: any) => response.data
    }),

    getEventTotalStatistic: builder.query<any, void>({
      query: () => ({
        url: '/statistic/event-total-statistic',
        method: 'GET'
      }),
      providesTags: ['Statistic'],
      transformResponse: (response: any) => response.data
    }),

    getEventPeriodRevenue: builder.query<any, void>({
      query: () => ({
        url: '/statistic/event-period-revenue',
        method: 'GET'
      }),
      providesTags: ['Statistic'],
      transformResponse: (response: any) => response.data
    }),

    getEventReviewByCustomer: builder.query<any, void>({
      query: () => ({
        url: '/statistic/event-review-by-customer',
        method: 'GET'
      }),
      providesTags: ['Statistic'],
      transformResponse: (response: any) => response.data
    }),

    getOverviewTotalStatistic: builder.query<any, void>({
      query: () => ({
        url: '/statistic/overview-total-statistic',
        method: 'GET'
      }),
      providesTags: ['Statistic'],
      transformResponse: (response: any) => response.data
    }),

    getOverviewSaleStatistic: builder.query<any, void>({
      query: () => ({
        url: '/statistic/overview-sale-statistic',
        method: 'GET'
      }),
      providesTags: ['Statistic'],
      transformResponse: (response: any) => response.data
    })
  })
})
