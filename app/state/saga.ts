import { all, put } from 'redux-saga/effects'

/** ------------ Modules ----------- */
import { makeSagas } from './modules'
import { Api } from '../services/api'

/* ------------- Types ------------- */
export const GENERIC_ERROR = 'GENERIC_ERROR'
/* ------------- Sagas ------------- */

/* ------------- Connect Types To Sagas ------------- */
export interface CreateProps {
  api: Api
}
export const createRootSagas = (props: CreateProps) => {
  return function * root () {
    try {
      yield all(
        makeSagas(props.api)
      )
    } catch (error) {
      yield put({ type: GENERIC_ERROR, error })
    }
  }
}

export default createRootSagas
