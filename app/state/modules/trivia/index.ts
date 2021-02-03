import { createRestSagas, createRestReducerHandlers, createRestActions } from '@delvefore/sagasauce'
import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { Api } from '../../../services/api'
import { Question } from './Models'
import { RestActionTypes } from '../RestActionTypes'

/** ------------- Models (TypeScript Support) --------------- */
export interface State {
  data: Question[]
  isPending: boolean
  errors: any
}

/**
 */
const INITIAL_STATE = Immutable({
  data: [],
  isPending: false,
  errors: null
})

/** ------------ Actions: Types and Creators --------- */
const Actions = createRestActions('trivia')
export const ActionTypes: RestActionTypes = Actions.Types
const Creators = Actions.Creators
const createDispatchers = Actions.createDispatchers

/** ------------ Actions: Sagas --------- */
const createSagas = (api: Api) => {
  return createRestSagas(api.trivia, Actions)
}

/** ------------ Map Reducers  --------- */
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
