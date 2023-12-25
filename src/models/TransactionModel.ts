import { v4 as uuid } from 'uuid'

import type { TTransactionDepartment } from '@/builders/transaction'
import type { ITransactionController } from '@/controllers/transaction'
import type {
  ITransactionModel,
  ITransactionModelProps,
} from '@/models/transaction'

import CreditCardTransactionModel from './CreditCardTransactionModel'

export default class TransactionModel implements ITransactionModel {
  private readonly _ID: string
  private readonly _department: TTransactionDepartment

  private readonly DModel: CreditCardTransactionModel
  private readonly data: ITransactionController

  constructor(props: ITransactionModelProps) {
    this._ID = uuid()
    this._department = props.department

    this.data = props.Transaction

    this.DModel = new CreditCardTransactionModel()
  }

  get ID() {
    return this._ID
  }

  async create() {
    await this.DModel.create(this.data.transaction)
  }
}
