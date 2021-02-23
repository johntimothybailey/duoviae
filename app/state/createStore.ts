import { createStore, compose, Store } from 'redux'
import { Api } from '../services/api'
import { createMiddleware, makeMiddlewareEnhancer, startMiddleware } from './middleware'
import reducers from './reducers'
import { createRootSagas } from './saga'
import { Inspectors } from '../services/inspectors/interfaces'

export default async (inspections: Inspectors): Promise<Store> => {
  const api = new Api()
  await api.setup()

  const rootSagas = createRootSagas({ api })
  const middleware = createMiddleware(inspections.sagaMonitor)
  const enhancers = [
    makeMiddlewareEnhancer(middleware),
    ...inspections.createEnhancers()
  ]

  const store = createStore(reducers, compose(...enhancers))
  startMiddleware({ middleware, sagas: rootSagas })

  return store
}
