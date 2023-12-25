export type TTransactionDepartment = 'CreditCard' | 'Account'

export interface ITransactionProps {
  transactionId: string
  name?: string
  date?: Date
  postingPeriod?: string
  description?: string
  store?: string
  value?: number
  category?: string
  note?: string
}

export interface ITransaction {
  ID: string
  baseData: {
    id: string
    name: string
    date: Date
    note: string
    store: string
    value: number
    category: string
    description: string
    postingPeriod: string
  }
}
