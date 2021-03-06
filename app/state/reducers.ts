import { combineReducers, ReducersMapObject } from 'redux'
import { resettableReducer } from 'reduxsauce'
import { makeReducers, RootState } from './modules'

/**
 * ALL REDUCERS MUST GO INTO A MODULE.
 * This is only for configuration of the reducers.
 * Follows https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks
 */

const resettable = resettableReducer('RESET')
const createReducers = (): ReducersMapObject<RootState> => {
  return {
    ...makeReducers(resettable)
  }
}

export default combineReducers(createReducers())
