import React, { ReactElement } from 'react'
import { Dispatch } from 'redux'
import { Screen, Questions } from '../../components'
import { Spinner } from '@ui-kitten/components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../state'
import { ActionTypes as AnswerActions } from '../../state/modules/answers'
import { Question } from '../../state/modules/quiz/Models'
import { riverBackground } from '../../../assets/images'

export default function Categories (): ReactElement {
  const dispatch: Dispatch = useDispatch()
  const list = useSelector((state: RootState) => {
    return state.Trivia.data
  })
  const isLoading = useSelector((state: RootState) => {
    return state.Trivia.isPending
  })
  const activeStep = useSelector((state: RootState) => {
    return state.Trivia.step
  })
  const onSaveAnswer = (question: Question | undefined, selection: string) => {
    dispatch({ type: AnswerActions.CREATE_ANSWER, question, selection })
  }
  return (
    <Screen background={riverBackground} preset='splash' withAppBar withBack title='Categories' />
  )
}
