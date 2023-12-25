import type { FormEvent } from 'react'

import { v4 as uuid } from 'uuid'

import type { ICreditCardTransactionProps } from '@/builders/creditCardTransaction'
import type { TTransactionDepartment } from '@/builders/transaction'
import type { ICreditCardTransactionControllerProps } from '@/controllers/ CreditCardTransaction'

export default class TransactionController {
  private readonly _ID: string
  private readonly _department: TTransactionDepartment
  private _transaction: ICreditCardTransactionProps

  constructor(props: ICreditCardTransactionControllerProps) {
    this._ID = uuid()

    this._department = 'CreditCard'
    this._transaction = props.transaction
  }

  get ID() {
    return this._ID
  }

  get transaction() {
    return this._transaction
  }

  setTransactionData(transactionData: Partial<TTransaction>) {
    this._transaction.name = transactionData.name || this._transaction.name
    this._transaction.date = transactionData.date || this._transaction.date
    this._transaction.note = transactionData.note || this._transaction.note

    this._transaction.postingPeriod =
      transactionData.postingPeriod || this._transaction.postingPeriod

    this._transaction.description =
      transactionData.description || this._transaction.description

    this._transaction.store = transactionData.store || this._transaction.store
    this._transaction.value = transactionData.value || this._transaction.value

    this._transaction.category =
      transactionData.category || this._transaction.category

    this._transaction.type = transactionData.type || this._transaction.type

    this._transaction.installments =
      transactionData.installments || this._transaction.installments
    this._transaction.currentInstallment =
      transactionData.currentInstallment || this._transaction.currentInstallment

    console.log(transactionData, this._transaction)
  }

  save = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
}
