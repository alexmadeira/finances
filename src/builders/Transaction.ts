import { v4 as uuid } from 'uuid'

import { ITransaction, ITransactionProps } from '@/builders/transaction'

export default abstract class Transaction implements ITransaction {
  private _id: string
  private _name: string
  private _postingPeriod: string
  private _date: Date
  private _description: string
  private _store: string
  private _value: number
  private _category: string
  private _note: string

  constructor(props: ITransactionProps) {
    this._id = props.transactionId || `transaction-temp-${uuid()}`

    this._name = props.name || 'Nova transação'
    this._date = props.date || new Date()
    this._postingPeriod = props.postingPeriod || ''
    this._description = props.description || ''
    this._store = props.store || ''
    this._value = props.value || 0
    this._category = props.category || ''
    this._note = props.note || ''
  }

  get ID() {
    return this._id
  }

  get baseData() {
    return {
      id: this._id,
      name: this._name,
      date: this._date,
      note: this._note,
      store: this._store,
      value: this._value,
      category: this._category,
      description: this._description,
      postingPeriod: this._postingPeriod,
    }
  }
}
