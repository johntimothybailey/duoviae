import React, { ReactElement } from 'react'
import { Container, Screen } from '../../components'
import { Button, Text } from '@ui-kitten/components'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { riverBackground } from '../../../assets/images'
import { useDispatch } from 'react-redux'
import { ActionTypes as TriviaActionTypes } from '../../state/modules/trivia'

function Dashboard (): ReactElement {
  const navigation = useNavigation()
  const { t } = useTranslation('welcomeScreen')
  const textTitle = t('title')
  const textIntro = t('boolean', { numberOfQuestions: 10 })
  const textBegin = t('begin')
  const textGoal = t('goal')

  const dispatch = useDispatch()
  const beginQuiz = async () => {
    dispatch({ type: TriviaActionTypes.GET_DATA })
    navigation.navigate('TriviaStack', { screen: 'Questions' })
  }
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
