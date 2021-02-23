import Inspector from './index'
import WS from 'jest-websocket-mock'
describe('Reactotron Inspector', () => {
  afterEach(() => {
    WS.clean()
  })
  describe('Saga Plugin', () => {
    it('can create sagaMonitor', async () => {
      const server = new WS('ws://localhost:9090')
      const inspector = new Inspector()
      inspector.setup()
      expect(inspector.tron).toBeDefined()
      expect(inspector.tron).toHaveProperty('createSagaMonitor')
      // @ts-expect-error
      expect(inspector.tron.createSagaMonitor()).toHaveProperty('rootSagaStarted')
      await server.connected
    })
  })
})
