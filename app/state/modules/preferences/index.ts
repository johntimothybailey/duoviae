import { createReducer, createActions } from 'reduxsauce'
import Immutable, { ImmutableObject } from 'seamless-immutable'
import { Dispatch } from 'redux'
import { Category } from '../categories/Models'
import { Answer } from '../quiz/Models'

/** ------------- Models (TypeScript Support) --------------- */
export interface State {
  answerType: Answer
  difficulty: 'easy' | 'medium' | 'hard'
  totalQuestions: number
  category?: Category
}

const INITIAL_STATE: ImmutableObject<State> = Immutable({
  answerType: 'boolean',
  difficulty: 'hard',
  totalQuestions: 10
})

/** ------------ Actions: Types and Creators --------- */
const Actions = createActions({
  setAnswerType: ['answerType'],
  setCategory: ['category'],
  setTotalQuestions: ['totalQuestions'],
  setDifficulty: ['difficulty'],
  setAny: ['category', 'difficulty', 'totalQuestions', 'answerType']
})
interface IActionTypes {
  SET_QUESTIONS_TOTAL: string
  SET_ANSWER_TYPE: string
  SET_CATEGORY: string
  SET_DIFFICULTY: string
  SET_ANY: string
}
export const ActionTypes: IActionTypes = {
  SET_QUESTIONS_TOTAL: 'SET_QUESTIONS_TOTAL',
  SET_ANSWER_TYPE: 'SET_ANSWER_TYPE',
  SET_CATEGORY: 'SET_CATEGORY',
  SET_DIFFICULTY: 'SET_DIFFICULTY',
  SET_ANY: 'SET_ANY'
}
const Creators = Actions.Creators

const createDispatchers = (dispatch: Dispatch): any => {
  return {
  }
}

/** ------------ Actions: Sagas --------- */
const createSagas = (): any[] => {
  return []
}

/** ------------ Map Reducers  --------- */
interface SetAnyProps {
  answerType?: Answer
  difficulty?: 'easy' | 'medium' | 'hard'
  totalQuestions?: number
  category?: Category
}
// eslint-disable-next-line @typescript-eslint/default-param-last
export const reducerSetAny = (state: ImmutableObject<State> = INITIAL_STATE, payload: SetAnyProps): ImmutableObject<State> => {
  const newState: State = {
    ...state,
    ...payload
  }
  return Immutable(newState)
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export const reducerSetCategory = (state: ImmutableObject<State> = INITIAL_STATE, category: Category): ImmutableObject<State> => {
  return reducerSetAny(state, { category })
}

const Reducers = createReducer(INITIAL_STATE, {
  [ActionTypes.SET_ANY]: reducerSetAny,
  [ActionTypes.SET_CATEGORY]: reducerSetCategory
})

export default {
  ActionTypes,
  Reducers,
  Creators,
  createSagas,
  createDispatchers
}
