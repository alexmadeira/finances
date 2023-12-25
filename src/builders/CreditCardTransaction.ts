import type {
  ICreditCardTransaction,
  ICreditCardTransactionProps,
} from '@/builders/creditCardTransaction'

import Transaction from './Transaction'

export default class CreditCardTransaction
  extends Transaction
  implements ICreditCardTransaction
{
  private readonly _installments: number
  private readonly _currentInstallment: number

  constructor(props: ICreditCardTransactionProps) {
    super(props)

    this._installments = props.installments || 1
    this._currentInstallment = props.currentInstallment || 1
  }

  get data() {
    return {
      ...this.baseData,
      installments: this._installments,
      currentInstallment: this._currentInstallment,
    }
  }
}
