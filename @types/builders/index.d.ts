import type CreditCardTransaction from '~/builders/CreditCardTransaction'

interface IBuildedClasses {
  CreditCardTransactions?: {
    [key: string]: CreditCardTransaction
  }
}
