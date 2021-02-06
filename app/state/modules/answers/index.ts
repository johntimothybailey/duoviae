import { createReducer, createActions } from 'reduxsauce'
import Immutable, { ImmutableObject } from 'seamless-immutable'
import { Answer } from './Models'
import { Dispatch } from 'redux'
import { Question } from '../quiz/Models'

/** ------------- Models (TypeScript Support) --------------- */
export interface State {
  current: Answer[]
}

export interface CreateActionParam {
  question: Question
  selection: string
}

/**
 */
const INITIAL_STATE = Immutable({
  current: []
})

/** ------------ Actions: Types and Creators --------- */
const Actions = createActions({
  createAnswer: ['question', 'selection'],
  clearCurrent: null
})
interface IActionTypes {
  CREATE_ANSWER?: string
  CLEAR_CURRENT?: string
}
export const ActionTypes: IActionTypes = {
  ...Actions.Types
}
const Creators = Actions.Creators

const createDispatchers = (dispatch: Dispatch): any => {
  return {
    createAnswer: (question: Question, selection: string) => {
      dispatch(Creators.createAnswer(question, selection))
    },
    clearCurrent: () => {
      dispatch(Creators.clearCurrent())
    }
  }
}

/** ------------ Actions: Sagas --------- */
const createSagas = (): any[] => {
  return []
}

/** ------------ Map Reducers  --------- */
// eslint-disable-next-line @typescript-eslint/default-param-last
export const reducerCreateAnswer = (state: any = INITIAL_STATE, action: CreateActionParam): ImmutableObject<State> => {
  const question: Question = action.question
  const selection: string = action.selection
  const now: Date = new Date(Date.now())
  const answer: Answer = {
    question: question.question,
    datetime: now.toISOString(),
    selection,
    isCorrect: question.correctAnswer === selection,
    correctAnswer: question.correctAnswer
  }
  return {
    ...state,
    current: [...state.current, answer]
  }
}

export const reducerClearCurrent = (state: any = INITIAL_STATE): ImmutableObject<State> => {
  return {
    ...state,
    current: []
  }
}
const Reducers = createReducer(INITIAL_STATE, {
  [ActionTypes.CREATE_ANSWER]: reducerCreateAnswer,
  [ActionTypes.CLEAR_CURRENT]: reducerClearCurrent
})

export default {
  ActionTypes,
  Reducers,
  Creators,
  createSagas,
  createDispatchers
}
