import { RegisteredModules } from './modules'
export { default as createStore } from './createStore'
export type RootState = typeof RegisteredModules
export { default as StateProvider } from './Provider'
