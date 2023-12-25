import { IBuildedClasses } from '@/builders'
import type { ICreditCardTransactionProps } from '@/builders/creditCardTransaction'

import { ClassBuilderError } from '~/erros'

import CreditCardTransactionClass from './CreditCardTransaction'

const buildedClasses: IBuildedClasses = {}

export function CreditCardTransaction(
  props: ICreditCardTransactionProps | string,
) {
  if (typeof props === 'string') {
    if (buildedClasses.CreditCardTransactions) {
      if (!buildedClasses.CreditCardTransactions[props]) {
        throw new ClassBuilderError({
          message: `Não foi possível encontrar a inicialização com o ID: ${props}`,
          action:
            'verifique se a classe foi inicializada corretamente ou se esta tentando encontra-la antes de inicialização',
          errorLocationCode:
            'BUILDERS:CREDIT_CARD_TRANSACTION:CLASS_WITHOUT_MANDATORY_INITIALIZATION_PROPERTIES',
        })
      }
      return buildedClasses.CreditCardTransactions[props]
    }

    throw new ClassBuilderError({
      message: `Nenhuma classe desse tipo poi inicializada até o momento`,
      action:
        'verifique se a classe foi inicializada corretamente ou se esta tentando encontra-la antes de inicialização',
      errorLocationCode:
        'BUILDERS:CREDIT_CARD_TRANSACTION:NO_CLASSES_INITIALIZED',
    })
  }

  if (!buildedClasses.CreditCardTransactions) {
    buildedClasses.CreditCardTransactions = {}
  }

  const CreditCard = new CreditCardTransactionClass(props)
  buildedClasses.CreditCardTransactions[CreditCard.ID] = CreditCard

  return buildedClasses.CreditCardTransactions[CreditCard.ID]
}

export function destroy(ClassName: keyof IBuildedClasses) {
  if (buildedClasses[ClassName]) {
    delete buildedClasses[ClassName]
  }
}
