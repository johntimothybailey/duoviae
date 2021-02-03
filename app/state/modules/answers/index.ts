import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { Answer } from './Models'
import { Dispatch } from 'react'
import { Question } from '../trivia/Models'

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
  createAnswer: ['question', 'selection']
})
export const ActionTypes = Actions.Types
const Creators = Actions.Creators

const createDispatchers = (dispatch: Dispatch<any>) => {
  return {
    createAnswer: (question: Question, selection: string) => {
      dispatch(Creators.createAnswer(question, selection))
    }
  }
}

/** ------------ Actions: Sagas --------- */
const createSagas = (): any[] => {
  return []
}

/** ------------ Map Reducers  --------- */
export const reducerCreateAnswer = (state: any = INITIAL_STATE, action: CreateActionParam) => {
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
const Reducers = createReducer(INITIAL_STATE, {
  [ActionTypes.CREATE_ANSWER]: reducerCreateAnswer
})

export default {
  ActionTypes,
  Reducers,
  Creators,
  createSagas,
  createDispatchers
}
