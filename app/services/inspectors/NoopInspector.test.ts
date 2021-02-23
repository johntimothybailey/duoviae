import Inspector from './NoopInspector'
import { StoreEnhancer, createStore, compose, combineReducers } from 'redux'
describe('NoopInspector', () => {
  it('isReady() is true', () => {
    const inspector = new Inspector()
    expect(inspector.isReady()).toEqual(true)
    inspector.setup()
    expect(inspector.isReady()).toEqual(true)
  })
  describe('createEnhancers()', () => {
    it('returns only one enhancer', () => {
      const inspector = new Inspector()
      expect(inspector.createEnhancers()).toHaveLength(1)
    })
    it('has a pass-through enhancer (isolated)', () => {
      const INIT_STATE = {
        data: [1, 2]
      }
      const inspector = new Inspector()
      const enhancers: StoreEnhancer[] = inspector.createEnhancers()
      const StoreMocks = {
        dispatch: jest.fn(),
        getState: jest.fn(() => {
          return {}
        })
      }
      const createMockStore = (): any => {
        return StoreMocks
      }
      const result = enhancers[0](createMockStore)(combineReducers({}), {})
      expect(result).toHaveProperty('dispatch')
      expect(result).toHaveProperty('getState')
      expect(result.getState()).toEqual({})
      const store = createStore(combineReducers({
        general: (state = INIT_STATE) => {
          return state
        }
      }), { general: INIT_STATE }, compose(...enhancers))
      expect(store.getState().general).toEqual(INIT_STATE)
      store.dispatch({ type: 'GET_DATA' })
      expect(store.getState().general).toEqual(INIT_STATE)
    })
  })
})
