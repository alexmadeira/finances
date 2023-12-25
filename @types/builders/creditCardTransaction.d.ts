import type { ITransactionProps } from './transaction'

export interface ICreditCardTransactionProps extends ITransactionProps {
  installments?: number
  currentInstallment?: number
}

export interface ICreditCardTransaction extends ITransaction {
  ID: string
}
