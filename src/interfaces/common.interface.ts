import { ReactNode, ReactElement } from 'react'

export interface Route {
  name: string
  icon: any
  path?: string
  links?: { name: string; path: string }[]
}

export interface LayoutProps {
  children: ReactNode
}

export interface NextPageWithLayout {
  Layout?: (props: LayoutProps) => ReactElement
}

export interface ApiResponse<TData> {
  statusCode: number
  message: string
  data: TData
  errors?: string[] | null
}

export interface ApiListResponse<TData> {
  statusCode: number
  message: string
  data: IListData<TData>
  errors?: string[] | null
}

export interface IListData<T> {
  items: T
  metadata: IMetadata
}

export interface IMetadata {
  currentPage: number
  totalPages: number
  takeAll: boolean
  pageSize: number
  totalCount: number
  hasPrevious: boolean
  hasNext: boolean
}
