import React, { ReactElement } from 'react'
import { Dispatch } from 'redux'
import { Screen, Questions } from '../../components'
import { Spinner } from '@ui-kitten/components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../state'
import { ActionTypes as AnswerActions } from '../../state/modules/answers'
import { ActionTypes as TriviaActions } from '../../state/modules/trivia'
import { Question } from '../../state/modules/trivia/Models'
import { useNavigation } from '@react-navigation/native'
import { questionsBackground } from '../../../assets/images'

const createNextHandler = (dispatch: Dispatch, list: Question[], activeStep: number) => {
  const navigation = useNavigation()
  return () => {
    if (activeStep < list.length - 1) {
      dispatch({ type: TriviaActions.NEXT_STEP })
    } else {
      dispatch({ type: TriviaActions.RESET_STEP })
      dispatch({ type: TriviaActions.GET_DATA })
      navigation.navigate('TriviaStack', { screen: 'Results' })
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
    <Screen background={questionsBackground} preset='splash' withAppBar withBack title='Questions'>
      {
        isLoading
          ? <Spinner size='giant' />
          : <Questions step={activeStep} list={list} onSaveAnswer={onSaveAnswer} onNext={onNext} />
      }
    </Screen>
  )
}
