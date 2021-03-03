import { createRestSagas, createRestReducerHandlers, createRestActions } from '@delvefore/sagasauce'
import { createActions, createReducer } from 'reduxsauce'
import Immutable, { ImmutableObject } from 'seamless-immutable'
import { Api } from '../../../services/api'
import { Question } from './Models'
import { RestActionTypes } from '../RestActionTypes'
import { Dispatch } from 'redux'

/** ------------- Models (TypeScript Support) --------------- */
export interface State {
  data: Question[]
  isPending: boolean
  errors: any
}

/**
 * TODO: Use an alternative to Seamless Immutable as the type compliance is odd and I should use the protection middleware
 */
const INITIAL_STATE = Immutable({
  data: [],
  isPending: false,
  errors: null
})

/** ------------ Actions: Types and Creators --------- */
const RestActions = createRestActions('categories')
export interface IActionTypes extends RestActionTypes {}
export const ActionTypes: IActionTypes = {
  ...RestActions.Types
}

const Creators = {
  ...RestActions.Creators
}

const createDispatchers = (dispatch: Dispatch): any => {
  return {
    ...RestActions.createDispatchers(dispatch)
  }
}

/** ------------ Actions: Sagas --------- */
const createSagas = (api: Api): any => {
  return createRestSagas(api.categories, RestActions)
}

/** ------------ Map Reducers  --------- */
export const reducerNextStep = (state: any = INITIAL_STATE): ImmutableObject<State> => {
  return {
    ...state
  }
}
export const reducerResetStep = (state: any = INITIAL_STATE): ImmutableObject<State> => {
  return {
    ...state
  }
}
const Reducers = createReducer(INITIAL_STATE, {
  ...createRestReducerHandlers(ActionTypes)
})

export default {
  ActionTypes,
  Reducers,
  Creators,
  createSagas,
  createDispatchers
}
