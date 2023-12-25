import type { ITransactionProps } from './transaction'

export type TAccountTransactionType = 'receivable' | 'payable'

export interface IAccountTransaction extends ITransaction {
  ID: string
}

export interface IAccountTransactionProps extends ITransactionProps {
  type?: TAccountTransactionType
}
