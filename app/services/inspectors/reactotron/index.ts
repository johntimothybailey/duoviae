import Tron, { ReactotronReactNative, trackGlobalErrors } from 'reactotron-react-native'
import { StoreEnhancer } from 'redux'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'
import { Config, DEFAULT_CONFIG } from './config'
import { Inspector } from '../interfaces'
import { Reactotron } from 'reactotron-core-client'
import R from 'ramda'

/**
 * @cite Inspired from https://github.com/infinitered/ignite/blob/master/boilerplate/app/services/reactotron/reactotron.ts
 */
export class ReactotronInspector implements Inspector {
  config: Config

  readonly tron: Reactotron<ReactotronReactNative> & ReactotronReactNative

  constructor (config: Config = DEFAULT_CONFIG) {
    // merge the passed in config with some defaults
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
      state: {
        ...DEFAULT_CONFIG.state,
        ...(config?.state)
      }
    }

    this.tron = Tron
      .configure(this.config)
      .useReactNative({
        asyncStorage: this.config.useAsyncStorage ? undefined : false
      })
      .use(reduxPlugin())
      .use(sagaPlugin({}))
      .use(trackGlobalErrors({}))
  }

  createEnhancer (): StoreEnhancer | undefined {
    if (this.tron) {
      // @ts-expect-error
      return this.tron.createEnhancer()
    }
    return undefined
  }

  isReady (): boolean {
    return !R.isEmpty(this.tron)
  }

  setup (): void {
    this.tron.connect()
    // clear if we should
    if (this.config.clearOnLoad && this.tron) {
      // @ts-expect-error
      this.tron.clear()
    }
  }
}

export default ReactotronInspector
