import { applyMiddleware, StoreEnhancer } from 'redux'
import createSagaMiddleware, { Task } from 'redux-saga'
import ImmutableStateInvariant from 'redux-immutable-state-invariant'
import { SagaMiddleware } from '@redux-saga/core'
import values from 'lodash/values'

export interface Middlewares {
  saga: SagaMiddleware
  immutableStateInvariant?: any
}

export const createMiddleware = (): Middlewares => {
  // Saga
  // TODO: SagaMonitor with connect to Reactotron (or similar)
  const sagaMiddleware = createSagaMiddleware()

  const productionMiddleware = {
    saga: sagaMiddleware
  }

  if (process.env.NODE_ENV === 'production') {
    return productionMiddleware
  } else {
    return {
      ...productionMiddleware,
      immutableStateInvariant: ImmutableStateInvariant()
    }
  }
}

export const makeMiddlewareEnhancer = (middleware: Middlewares): StoreEnhancer => {
  return applyMiddleware(...values(middleware))
}

export interface StartResponse {
  sagaManager: Task
}

export interface StartProps {
  middleware: Middlewares
  sagas: any
}

export const startMiddleware = (props: StartProps): StartResponse => {
  const { middleware, sagas } = props
  const sagaManager = middleware.saga.run(sagas)
  return {
    sagaManager
  }
}
