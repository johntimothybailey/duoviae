import { Inspectors } from './interfaces'
import { StoreEnhancer, StoreEnhancerStoreCreator } from 'redux'
import { SagaMonitor } from '@redux-saga/core'
import { Reducer } from 'react'

const passthroughEnhancer: StoreEnhancer<{ }> =
  (createStore: StoreEnhancerStoreCreator): StoreEnhancerStoreCreator<{}> =>
    (reducer: Reducer<any, any>, preloadedState?: any) => {
      return {
        ...createStore(reducer, preloadedState)
      }
    }

class NoopInspector implements Inspectors {
  sagaMonitor: SagaMonitor | undefined
  constructor () {
    this.sagaMonitor = undefined
  }

  createEnhancers (): StoreEnhancer[] {
    return [passthroughEnhancer]
  }

  setup (): void {}
  isReady (): boolean {
    return true
  }
}

export default NoopInspector
