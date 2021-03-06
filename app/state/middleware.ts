import { applyMiddleware, StoreEnhancer } from 'redux'
import createSagaMiddleware, { Task } from 'redux-saga'
import ImmutableStateInvariant from 'redux-immutable-state-invariant'
import { SagaMiddleware, SagaMonitor } from '@redux-saga/core'
import values from 'lodash/values'

export interface Middlewares {
  saga: SagaMiddleware
  // Dev Optionals
  immutableStateInvariant?: any
}

interface DevMiddlewares {
  immutableStateInvariant: any
}

const createDevMiddleware = (): DevMiddlewares => {
  return {
    immutableStateInvariant: ImmutableStateInvariant()
  }
}

export const createMiddleware = (sagaMonitor: SagaMonitor | undefined): Middlewares => {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

  const productionMiddleware = {
    saga: sagaMiddleware
  }

  if (process.env.NODE_ENV === 'production') {
    return productionMiddleware
  } else {
    return {
      ...productionMiddleware,
      ...createDevMiddleware()
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
