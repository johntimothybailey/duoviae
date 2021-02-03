import { createStore, compose } from 'redux'
import { Api } from '../services/api'
import { createMiddleware, makeMiddlewareEnhancer, startMiddleware } from './middleware'
import reducers from './reducers'
import { createRootSagas } from './saga'

export default async (): Promise<any> => {
  const api = new Api()
  await api.setup()

  const rootSagas = createRootSagas({ api })
  const middleware = createMiddleware()
  const enhancers = [makeMiddlewareEnhancer(middleware)]
  const store = createStore(reducers, compose(...enhancers))
  startMiddleware({ middleware, sagas: rootSagas })

  return store
}
