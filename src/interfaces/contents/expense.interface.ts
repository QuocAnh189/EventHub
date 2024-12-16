export interface IExpense {
  id: string
  eventId: string
  title: string
  total: number
  subExpenses: ISubExpense[]
}

export interface ISubExpense {
  id: string
  expenseId: string
  name: string
  price: number
}
