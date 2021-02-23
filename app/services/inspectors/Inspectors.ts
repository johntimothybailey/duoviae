import { ReactotronInspector } from './reactotron'
import { StoreEnhancer } from 'redux'
import R from 'ramda'
import { Inspectors as IInspectors } from './interfaces'
import { SagaMonitor } from '@redux-saga/core'

export class Inspectors implements IInspectors {
  reactotronInspector: ReactotronInspector
  sagaMonitor: SagaMonitor | undefined
  constructor () {
    this.reactotronInspector = new ReactotronInspector()
  }

  createEnhancers (): StoreEnhancer[] {
    const list = []
    const reactotron = this.reactotronInspector.createEnhancer()
    if (!R.isEmpty(reactotron)) {
      list.push(reactotron as StoreEnhancer)
    }
    return list
  }

  isReady (): boolean {
    return this.reactotronInspector.isReady()
  }

  setup (): void {
    this.reactotronInspector.setup()
    // @ts-expect-error
    this.sagaMonitor = this.reactotronInspector.tron.createSagaMonitor()
  }
}

export default Inspectors
