import reduce from 'lodash/reduce'
/**
 * To Register a SagaSauce powered Redux Module
 * 1. import the module
 * 2. add the imported module to the RegisteredModules array
 */
// -------------------- REGISTER MODULES -------------------------------- //
// 1. Import Modules
import Trivia, { State as TriviaState } from './trivia'
import Answers, { State as AnswersState } from './answers'
import { Api } from '../../services/api'
import { Dispatch } from 'react'

// 2. Register Modules
export const RegisteredModules = { Trivia, Answers }
// add imported module HERE ^

// 3. For TypeScript compliance add Module State structure here
export interface State {
  Trivia: TriviaState
  Answers: AnswersState
}

// ------------------------------------------------------------- //
// ---------------------- MAGIC -------------------------------- //
export const makeDispatchers = (dispatch: Dispatch<any>): any => {
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
export const makeReducers = (resettable: any): any => {
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
