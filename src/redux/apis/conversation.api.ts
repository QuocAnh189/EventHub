import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//interface
import { IListData } from '@interfaces/common.interface'

export const apiConversation = createApi({
  reducerPath: 'apiConversation',
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
  tagTypes: ['Conversation', 'Message'],
  endpoints: (builder) => ({
    getConversationsByOrganizerId: builder.query<IListData<any>, { organizerId: string; params: any }>({
      query: ({ organizerId, params }) => ({
        url: `/conversations/get-by-organizer/${organizerId}`,
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => response.data,
      providesTags: ['Conversation']
    }),

    getConversationsByUserId: builder.query<IListData<any>, { userId: string; params: any }>({
      query: ({ userId, params }) => ({
        url: `/conversations/get-by-user/${userId}`,
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => response.data,
      providesTags: ['Conversation']
    }),

    getMessageByConversationId: builder.query<any, { conversationId: string; params: any }>({
      query: ({ conversationId, params }) => ({
        url: `/conversations/${conversationId}/messages`,
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => response?.data,
      providesTags: ['Conversation']
    }),

    addMessageToConversation: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: `/conversations/${formData.get('conversationId')}/messages`,
        method: 'POST',
        body: formData
      }),
      invalidatesTags: ['Conversation']
    })
  })
})

export const {
  useGetConversationsByOrganizerIdQuery,
  useGetConversationsByUserIdQuery,
  useGetMessageByConversationIdQuery,
  useAddMessageToConversationMutation
} = apiConversation
