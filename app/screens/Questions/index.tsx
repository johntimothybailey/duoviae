import React, { ReactElement } from 'react'
import { Screen, Questions } from '../../components'
import { Spinner } from '@ui-kitten/components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../state'
import { ActionTypes } from '../../state/modules/answers'
import { Question } from '../../state/modules/trivia/Models'
import { questionsBackground } from '../../../assets/images'

export default function Trivia (): ReactElement {
  const dispatch = useDispatch()
  const list = useSelector((state: RootState) => {
    return state.Trivia.data
  })
  const isLoading = useSelector((state: RootState) => {
    return state.Trivia.isPending
  })
  const onSaveAnswer = (question: Question, selection: string) => {
    dispatch({ type: ActionTypes.CREATE_ANSWER, question, selection })
  }
  return (
    <Screen background={questionsBackground} preset='splash' withAppBar title='Questions'>
      {
        isLoading
          ? <Spinner size='giant' />
          : <Questions list={list} saveAnswer={onSaveAnswer} />
      }
    </Screen>
  )
}
