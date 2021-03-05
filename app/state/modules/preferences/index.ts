import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { Dispatch } from 'redux'
import { AnswerType } from '../../../services/api/trivia'
import { Category } from '../categories/Models'

/** ------------- Models (TypeScript Support) --------------- */
export interface State {
  answerType: AnswerType
  difficulty: Array<['easy', 'medium', 'hard']>
  totalQuestions: number
  category?: Category
}

const INITIAL_STATE = Immutable({
  answerType: 'boolean',
  difficulty: 'hard',
  totalQuestions: 10
})

/** ------------ Actions: Types and Creators --------- */
const Actions = createActions({
  setAnswerType: ['answerType']
})
interface IActionTypes {
  SET_QUESTIONS_TOTAL: string
  SET_ANSWER_TYPE: string
}
export const ActionTypes: IActionTypes = {
  SET_QUESTIONS_TOTAL: 'SET_QUESTIONS_TOTAL',
  SET_ANSWER_TYPE: 'SET_ANSWER_TYPE'
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
const Reducers = createReducer(INITIAL_STATE, {})

export default {
  ActionTypes,
  Reducers,
  Creators,
  createSagas,
  createDispatchers
}
