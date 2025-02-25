import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//interface
import { IListData } from '@interfaces/common.interface'
import { ICoupon } from '@interfaces/contents/coupon.interface'

export const apiCoupon = createApi({
  reducerPath: 'apiCoupon',
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
  tagTypes: ['Coupon'],
  endpoints: (builder) => ({
    getCoupons: builder.query<IListData<any>, any>({
      query: (params) => ({
        url: '/coupons/',
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['Coupon']
    }),

    getCouponsByCreated: builder.query<IListData<any>, any>({
      query: (params) => ({
        url: `/coupons/get-created-coupons`,
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['Coupon']
    }),

    createCoupon: builder.mutation<any, FormData>({
      query: (data) => ({
        url: `/coupons/`,
        method: 'POST',
        body: data
      }),
      transformResponse: (response: any) => response.data,
      invalidatesTags: ['Coupon']
    }),

    updateCoupon: builder.mutation<ICoupon, FormData>({
      query: (formData) => ({
        url: `/coupons/${formData.get('id')}`,
        method: 'PUT',
        body: formData
      }),
      invalidatesTags: ['Coupon']
    }),

    deleteCoupon: builder.mutation<string, string>({
      query: (id) => ({
        url: `/coupons/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Coupon']
    })
  })
})

export const {
  useGetCouponsQuery,
  useGetCouponsByCreatedQuery,
  useCreateCouponMutation,
  useUpdateCouponMutation,
  useDeleteCouponMutation
} = apiCoupon
