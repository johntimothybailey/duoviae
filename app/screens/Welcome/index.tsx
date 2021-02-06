import React, { ReactElement } from 'react'
import { Container, Screen } from '../../components'
import { Button, Text } from '@ui-kitten/components'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { riverBackground } from '../../../assets/images'
import { batch, useDispatch, useSelector } from 'react-redux'
import { ActionTypes as Quiz } from '../../state/modules/quiz'
import { State } from '../../state/modules/preferences'
import { RootState } from '../../state'

function Dashboard (): ReactElement {
  // State
  const preferences: State = useSelector((state: RootState) => {
    return state.Preferences
  })
  // Actions
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const beginQuiz = async () => {
    batch(() => {
      dispatch({ type: Quiz.START })
      dispatch({ type: Quiz.GET_DATA, data: { amount: preferences.totalQuestions, type: preferences.answerType } })
    })
    navigation.navigate('TriviaStack', { screen: 'Questions' })
  }
  // Translations
  const { t } = useTranslation('welcomeScreen')
  const textTitle = t('title')
  const textIntro = preferences.answerType === 'boolean'
    ? t('boolean', { numberOfQuestions: preferences.totalQuestions })
    : t('multiple', { numberOfQuestions: preferences.totalQuestions })
  const textBegin = t('begin')
  const textGoal = t('goal')
  return (
    <Screen preset='splash' background={riverBackground}>
      <Text category='h1'>{textTitle}</Text>
      <Container style={{ flex: 0 }}>
        <Text category='h3' style={styles.IntroText}>{textIntro}</Text>
        <Text>{textGoal}</Text>
      </Container>
      <Button size='giant' onPress={beginQuiz}>{textBegin}</Button>
    </Screen>
  )
}

export default Dashboard
