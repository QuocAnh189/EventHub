import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//interface
import { ApiResponse } from 'interfaces/common.interface'
import { IFileStorage } from 'interfaces/contents/file_storage.interface'

export const apiFile = createApi({
  reducerPath: 'apiFile',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['File'],
  endpoints: (builder) => ({
    uploadFile: builder.mutation<
      IFileStorage,
      { data: FormData; container: string }
    >({
      query: ({ data, container }) => ({
        url: `/files?container=${container}`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['File'],
      transformResponse: (response: ApiResponse<IFileStorage>) => response.data
    })
  })
})

export const { useUploadFileMutation } = apiFile
