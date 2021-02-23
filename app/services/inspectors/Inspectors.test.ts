import Inspectors from './Inspectors'
import WS from 'jest-websocket-mock'
import { createStore, StoreEnhancer, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { put } from 'redux-saga/effects'
import reducers from '../../state/reducers'

const createRootSagas = () => {
  return function * root () {
    try {
      yield put({ type: 'STARTED' })
    } catch (error) {
      yield put({ type: 'GENERIC_ERROR', error })
    }
  }
}
describe('Inspectors', () => {
  afterEach(() => {
    WS.clean()
  })
  it('isReady', async () => {
    const server = new WS('ws://localhost:9090')
    const inspectors = new Inspectors()
    inspectors.setup()
    await server.connected
    expect(inspectors.isReady()).toBe(true)
  })
  it('has sagaMonitor', async () => {
    const server = new WS('ws://localhost:9090')
    const inspectors = new Inspectors()
    inspectors.setup()
    const sagaMiddleware = createSagaMiddleware({ sagaMonitor: inspectors.sagaMonitor })
    const enhancers: StoreEnhancer[] = inspectors.createEnhancers()
    createStore(reducers, compose(applyMiddleware(sagaMiddleware), ...enhancers))
    sagaMiddleware.run(createRootSagas())
    await server.connected
    expect(inspectors.sagaMonitor).not.toBeUndefined()
  })
})
