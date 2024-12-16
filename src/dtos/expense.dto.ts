export interface ICreateExpensePayload {
  title: string
  eventId: string
  total: number
}

export interface ICreatedSubExpensePayload {
  expenseId: string
  name: string
  price: number
}

export interface IUpdateExpensePayload {
  id: string
  title: string
  eventId: string
  total: number
}

export interface IUpdateSubExpensePayload {
  id: string
  expenseId: string
  name: string
  price: number
}
