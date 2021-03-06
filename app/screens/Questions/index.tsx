import React, { ReactElement } from 'react'
import { Dispatch } from 'redux'
import { Screen, Questions } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../state'
import { ActionTypes as AnswerActions } from '../../state/modules/answers'
import { ActionTypes as Quiz } from '../../state/modules/quiz'
import { Question } from '../../state/modules/quiz/Models'
import { useNavigation } from '@react-navigation/native'
import { questionsBackground } from '../../../assets/images'

const createNextHandler = (dispatch: Dispatch, list: Question[], activeStep: number) => {
  const navigation = useNavigation()
  return () => {
    if (activeStep < list.length - 1) {
      dispatch({ type: Quiz.NEXT_STEP })
    } else {
      navigation.navigate('Main', {
        screen: 'Trivia',
        params: {
          screen: 'Results'
        }
      })
    }
  }
}

export default function Trivia (): ReactElement {
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
  const onNext = createNextHandler(dispatch, list, activeStep)
  return (
    <Screen
      isLoading={isLoading}
      background={questionsBackground}
      preset='splash'
      withAppBar
      withBack
      title='Questions'
    >
      <Questions step={activeStep} list={list} onSaveAnswer={onSaveAnswer} onNext={onNext} />
    </Screen>
  )
}
