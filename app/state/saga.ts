import { all } from 'redux-saga/effects'

/** ------------ Modules ----------- */
import { makeSagas } from './modules'
import { Api } from '../services/api'

/* ------------- Types ------------- */
/* ------------- Sagas ------------- */

/* ------------- Connect Types To Sagas ------------- */
export interface CreateProps {
  api: Api
}
export const createRootSagas = (props: CreateProps) => {
  return function * root () {
    yield all(
      makeSagas(props.api)
    )
  }
}

export default createRootSagas
