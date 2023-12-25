import { v4 as uuid } from 'uuid'

import { TTransaction } from '@/controllers/transaction'

export default class CreditCardTransactionModel {
  private readonly _ID: string

  constructor() {
    this._ID = uuid()
  }

  get ID() {
    return this._ID
  }

  async create(data: TTransaction) {
    console.log(data)
  }
}
