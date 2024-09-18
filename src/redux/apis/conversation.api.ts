import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//type
import { IConversationParams } from '@type/conversation.type'
import { IMessageParams } from '@type/message.type'

export const apiConversation = createApi({
  reducerPath: 'apiConversation',
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
  tagTypes: ['Conversation', 'Message'],
  endpoints: (builder) => ({
    getConversations: builder.query<any, IConversationParams>({
      query: (params) => ({
        url: '/conversations',
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      providesTags: ['Conversation']
    }),

    getMessageByConversationId: builder.query<any, { conversationId: string; params: IMessageParams }>({
      query: ({ conversationId, params }) => ({
        url: `/conversations/${conversationId}/messages`,
        method: 'GET',
        params
      }),
      transformResponse: (response: any) => {
        return response?.data
      },
      providesTags: ['Conversation']
    }),

    addMessageToConversation: builder.mutation<any, any>({
      query: (data) => ({
        url: ``,
        method: 'POST',
        body: data
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      invalidatesTags: ['Conversation', 'Message']
    }),

    recallMessageToConversation: builder.mutation<any, any>({
      query: (data) => ({
        url: ``,
        method: 'POST',
        body: data
      }),
      transformResponse: (response: any) => {
        return response.data
      },
      invalidatesTags: ['Conversation', 'Message']
    })
  })
})

export const { useGetConversationsQuery, useGetMessageByConversationIdQuery } = apiConversation
