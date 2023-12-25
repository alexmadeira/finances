export interface IBaseErrorOptions {
  readonly message: string
  readonly action: string
  readonly errorLocationCode: string
  readonly stack?: string
  readonly context?: string
  readonly statusCode?: number
  readonly databaseErrorCode?: string
  readonly requestId?: string
  readonly errorId?: string
  readonly key?: string
  readonly type?: string
}

export interface IClassBuilderErrorOptions
  extends Pick<
    BaseErrorOptions,
    'message' | 'action' | 'errorId' | 'stack' | 'errorLocationCode'
  > {
  message?: string
  action?: string
  errorId?: string
  stack?: string
}

export interface IInternalServerErrorOptions
  extends Pick<
    BaseErrorOptions,
    'requestId' | 'errorId' | 'statusCode' | 'stack' | 'errorLocationCode'
  > {
  message?: string
  action?: string
}

export type INotFoundErrorOptions = Pick<
  BaseErrorOptions,
  | 'message'
  | 'action'
  | 'requestId'
  | 'errorId'
  | 'stack'
  | 'errorLocationCode'
  | 'key'
>

export type IServiceErrorOptions = Pick<
  BaseErrorOptions,
  | 'message'
  | 'action'
  | 'stack'
  | 'context'
  | 'statusCode'
  | 'errorLocationCode'
  | 'databaseErrorCode'
>

export type IValidationErrorOptions = Pick<
  BaseErrorOptions,
  | 'message'
  | 'action'
  | 'stack'
  | 'statusCode'
  | 'context'
  | 'errorLocationCode'
  | 'key'
  | 'type'
>

export type IUnauthorizedErrorOptions = Pick<
  BaseErrorOptions,
  'message' | 'action' | 'requestId' | 'stack' | 'errorLocationCode'
>

export type IForbiddenErrorOptions = Pick<
  BaseErrorOptions,
  'message' | 'action' | 'requestId' | 'stack' | 'errorLocationCode'
>
export type ITooManyRequestsErrorOptions = Pick<
  BaseErrorOptions,
  'message' | 'action' | 'context' | 'stack' | 'errorLocationCode'
>
export type IUnprocessableEntityErrorOptions = Pick<
  BaseErrorOptions,
  'message' | 'action' | 'stack' | 'errorLocationCode'
>
