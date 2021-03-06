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
  step: number // TODO: If we want to support fetching endless questions we could go with `active: Question` or rather `active: string` where string is the question. This is because there are no unique ids for Questions.
  isPending: boolean
  errors: any
}

/**
 * TODO: Use an alternative to Seamless Immutable as the type compliance is odd and I should use the protection middleware
 */
const INITIAL_STATE = Immutable({
  data: [],
  step: 0,
  isPending: false,
  errors: null
})

/** ------------ Actions: Types and Creators --------- */
const RestActions = createRestActions('trivia')
const Actions = createActions({
  resetStep: null
})
export interface IActionTypes extends RestActionTypes {
  START: string
  NEXT_STEP: string
  RESET_STEP: string
}
export const ActionTypes: IActionTypes = {
  ...RestActions.Types,
  ...Actions.Types,
  START: 'START',
  NEXT_STEP: 'NEXT_STEP'
}

const Creators = {
  ...RestActions.Creators,
  ...Actions.Creators,
  nextStep: () => ({ type: 'NEXT_STEP' })
}

const createDispatchers = (dispatch: Dispatch): any => {
  return {
    nextStep: () => {
      dispatch(Creators.nextStep())
    },
    resetStep: () => {
      dispatch(Creators.resetStep())
    },
    ...RestActions.createDispatchers(dispatch)
  }
}

/** ------------ Actions: Sagas --------- */
const createSagas = (api: Api): any => {
  return createRestSagas(api.trivia, RestActions)
}

/** ------------ Map Reducers  --------- */
export const reducerNextStep = (state: any = INITIAL_STATE): ImmutableObject<State> => {
  return {
    ...state,
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    step: state.step + 1
  }
}
export const reducerResetStep = (state: any = INITIAL_STATE): ImmutableObject<State> => {
  return {
    ...state,
    step: 0
  }
}
const Reducers = createReducer(INITIAL_STATE, {
  [ActionTypes.NEXT_STEP]: reducerNextStep,
  [ActionTypes.RESET_STEP]: reducerResetStep,
  [ActionTypes.START]: reducerResetStep,
  ...createRestReducerHandlers(ActionTypes)
})

export default {
  ActionTypes,
  Reducers,
  Creators,
  createSagas,
  createDispatchers
}
