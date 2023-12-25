import { CreditCardTransaction } from '~/builders'

export default async function Transactions() {
  const BCreditCardTransaction = CreditCardTransaction({
    transactionId: 'tempId',
  })

  return <div></div>
}
