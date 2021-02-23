import { name } from '../../../../package.json'
/**
 * @cite Originally from https://github.com/infinitered/ignite/blob/master/boilerplate/app/services/reactotron/reactotron-config.ts
 */
export interface Config {
  /** The name of the app. */
  name?: string
  /** The host to connect to: default 'localhost'. */
  host?: string
  /** The port to connect to: default 9090. */
  port?: number
  /** Should we use async storage */
  useAsyncStorage?: boolean
  /** Should we clear Reactotron when load? */
  clearOnLoad?: boolean
  /** Root state logging. */
  state?: {
    /** log the initial data that we put into the state on startup? */
    initial?: boolean
    /** log snapshot changes. */
    snapshots?: boolean
  }
}

/**
 * The default Reactotron configuration.
 */
export const DEFAULT_CONFIG: Config = {
  name,
  clearOnLoad: true,
  host: 'localhost',
  port: 9090,
  useAsyncStorage: false,
  state: {
    initial: false,
    snapshots: false
  }
}
