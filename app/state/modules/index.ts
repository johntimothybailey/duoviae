import camelCase from 'voca/camel_case'
import reduce from 'lodash/reduce'
/**
 * To Register a SagaSauce powered Redux Module
 * 1. import the module
 * 2. add the imported module to the RegisteredModules array
 */
// -------------------- REGISTER MODULES -------------------------------- //
// 1. Import Modules
import Trivia from './trivia'
import { Api } from '../../services/api'

// 2. Register Modules
export const RegisteredModules = { Trivia }
// add imported module HERE ^

// ------------------------------------------------------------- //
// ---------------------- MAGIC -------------------------------- //
export const makeDispatchers = ({ dispatch }): any => {
  return reduce(
    RegisteredModules,
    (acc, value) => {
      return {
        ...acc,
        ...value.createDispatchers(dispatch)
      }
    },
    {}
  )
}
export const makeReducers = ({ resettable }): any => {
  return reduce(
    RegisteredModules,
    (acc, value, key) => {
      return {
        ...acc,
        [key]: resettable(value.Reducers)
      }
    },
    {}
  )
}
export const makeSagas = (api: Api): any[] =>
  reduce(
    RegisteredModules,
    (acc, value) => {
      return acc.concat(value.createSagas(api))
    },
    []
  )
