import { ICreditCardTransactionProps } from '@/builders/creditCardTransaction'
import { TTransactionDepartment } from '@/builders/transaction'

export interface ICreditCardTransactionController {
  ID: string
  transaction: ICreditCardTransactionProps
  setTransactionData: (
    transactionData: Partial<ICreditCardTransactionProps>,
  ) => void
}

export interface ICreditCardTransactionControllerProps {
  transaction: ICreditCardTransactionProps
}
