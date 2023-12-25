import { v4 as uuid } from 'uuid'

import type {
  IBaseErrorOptions,
  IClassBuilderErrorOptions,
  IForbiddenErrorOptions,
  IInternalServerErrorOptions,
  INotFoundErrorOptions,
  IServiceErrorOptions,
  ITooManyRequestsErrorOptions,
  IUnauthorizedErrorOptions,
  IUnprocessableEntityErrorOptions,
  IValidationErrorOptions,
} from '@/errors'

class BaseError extends Error {
  readonly message: string
  readonly action: string
  readonly statusCode?: number
  readonly errorId?: string
  readonly requestId?: string
  readonly context?: string
  readonly errorLocationCode?: string
  readonly key?: string
  readonly type?: string
  readonly databaseErrorCode?: string

  constructor({
    message,
    action,
    stack,
    statusCode,
    errorId,
    requestId,
    context,
    errorLocationCode,
    key,
    type,
    databaseErrorCode,
  }: IBaseErrorOptions) {
    super()
    this.name = this.constructor.name
    this.message = message
    this.action = action
    this.statusCode = statusCode || 500
    this.errorId = errorId || uuid()
    this.requestId = requestId
    this.context = context
    this.stack = stack
    this.errorLocationCode = errorLocationCode
    this.key = key
    this.type = type
    this.databaseErrorCode = databaseErrorCode
  }
}

export class InternalServerError extends BaseError {
  constructor({
    message,
    action,
    statusCode,
    requestId,
    errorId,
    stack,
    errorLocationCode,
  }: IInternalServerErrorOptions) {
    super({
      message: message || 'Um erro interno não esperado aconteceu.',
      action:
        action || "Informe ao suporte o valor encontrado no campo 'error_id'.",
      statusCode: statusCode || 500,
      requestId,
      errorId,
      stack,
      errorLocationCode,
    })
  }
}

export class ClassBuilderError extends BaseError {
  constructor({
    message,
    action,
    errorId,
    stack,
    errorLocationCode,
  }: IClassBuilderErrorOptions) {
    super({
      message: message || 'Não foi possivel inicializar a classe',
      action:
        action ||
        'Verifique o caminho do arquivo ou a classe precisa de algum parametro incial',
      errorLocationCode,
      errorId,
      stack,
    })
  }
}

export class NotFoundError extends BaseError {
  constructor({
    message,
    action,
    requestId,
    errorId,
    stack,
    errorLocationCode,
    key,
  }: INotFoundErrorOptions) {
    super({
      message: message || 'Não foi possível encontrar este recurso no sistema.',
      action:
        action ||
        'Verifique se o caminho (PATH) e o método (GET, POST, PUT, DELETE) estão corretos.',
      statusCode: 404,
      requestId,
      errorId,
      stack,
      errorLocationCode,
      key,
    })
  }
}

export class ServiceError extends BaseError {
  constructor({
    message,
    action,
    stack,
    context,
    statusCode,
    errorLocationCode,
    databaseErrorCode,
  }: IServiceErrorOptions) {
    super({
      message: message || 'Serviço indisponível no momento.',
      action: action || 'Verifique se o serviço está disponível.',
      stack,
      statusCode: statusCode || 503,
      context,
      errorLocationCode,
      databaseErrorCode,
    })
  }
}

export class ValidationError extends BaseError {
  constructor({
    message,
    action,
    stack,
    statusCode,
    context,
    errorLocationCode,
    key,
    type,
  }: IValidationErrorOptions) {
    super({
      message: message || 'Um erro de validação ocorreu.',
      action: action || 'Ajuste os dados enviados e tente novamente.',
      statusCode: statusCode || 400,
      stack,
      context,
      errorLocationCode,
      key,
      type,
    })
  }
}

export class UnauthorizedError extends BaseError {
  constructor({
    message,
    action,
    requestId,
    stack,
    errorLocationCode,
  }: IUnauthorizedErrorOptions) {
    super({
      message: message || 'Usuário não autenticado.',
      action:
        action ||
        'Verifique se você está autenticado com uma sessão ativa e tente novamente.',
      requestId,
      statusCode: 401,
      stack,
      errorLocationCode,
    })
  }
}

export class ForbiddenError extends BaseError {
  constructor({
    message,
    action,
    requestId,
    stack,
    errorLocationCode,
  }: IForbiddenErrorOptions) {
    super({
      message: message || 'Você não possui permissão para executar esta ação.',
      action:
        action || 'Verifique se você possui permissão para executar esta ação.',
      requestId,
      statusCode: 403,
      stack,
      errorLocationCode,
    })
  }
}

export class TooManyRequestsError extends BaseError {
  constructor({
    message,
    action,
    context,
    stack,
    errorLocationCode,
  }: ITooManyRequestsErrorOptions) {
    super({
      message: message || 'Você realizou muitas requisições recentemente.',
      action:
        action ||
        'Tente novamente mais tarde ou contate o suporte caso acredite que isso seja um erro.',
      statusCode: 429,
      context,
      stack,
      errorLocationCode,
    })
  }
}

export class UnprocessableEntityError extends BaseError {
  constructor({
    message,
    action,
    stack,
    errorLocationCode,
  }: IUnprocessableEntityErrorOptions) {
    super({
      message: message || 'Não foi possível realizar esta operação.',
      action:
        action ||
        'Os dados enviados estão corretos, porém não foi possível realizar esta operação.',
      statusCode: 422,
      stack,
      errorLocationCode,
    })
  }
}
