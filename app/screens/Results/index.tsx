import React, { ReactElement } from 'react'
import { Screen } from '../../components'
import { RootState } from '../../state'
import { questionsBackground } from '../../../assets/images'
import { batch, useDispatch, useSelector } from 'react-redux'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, Card, Text, TextProps } from '@ui-kitten/components'
import { Answer } from '../../state/modules/answers/Models'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { Item as AnswerItem } from '../../components/Answers'
import { ActionTypes as Quiz } from '../../state/modules/quiz'
import { State } from '../../state/modules/preferences'
import styles from './styles'

const CardTitle = (props: TextProps) => {
  return (
    <Text style={styles.CardTitle}>{props.children}</Text>
  )
}

export default function Results (): ReactElement {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  // State
  const list = useSelector((state: RootState) => {
    return state.Answers.current
  })
  const answersCorrect = useSelector((state: RootState) => {
    const list = state.Answers.current
    const correctAnswers = list.filter((value: Answer) => {
      return value.isCorrect
    })
    const percent = Math.round(correctAnswers.length / list.length * 100)
    return { percent: Number.isInteger(percent) ? percent : 0, count: correctAnswers.length }
  })
  const preferences: State = useSelector((state: RootState) => {
    return state.Preferences
  })

  // Actions
  const playAgain = () => {
    batch(() => {
      dispatch({ type: Quiz.START })
      dispatch({
        type: Quiz.GET_DATA,
        data: {
          amount: preferences.totalQuestions,
          type: preferences.answerType,
          difficulty: preferences.difficulty,
          category: preferences.category
        }
      })
    })
    navigation.navigate('Main', {
      screen: 'Trivia',
      params: {
        screen: 'Questions'
      }
    })
  }

  const changeSettings = () => {
    dispatch({ type: Quiz.START })
    navigation.navigate('Main', {
      screen: 'Settings'
    })
  }
  return (
    <Screen background={questionsBackground} withAppBar title='Results'>
      <Card
        style={styles.Overview}
        header={() => (<CardTitle>You scored {answersCorrect.count} / {list.length}</CardTitle>)}
      >
        <View style={styles.OverviewContent}>
          <AnimatedCircularProgress
            size={200}
            width={3}
            fill={answersCorrect.percent}
            tintColor='#00e0ff'
            backgroundColor='#3d5875'
          >
            {
              (fill) => (
                <Text>
                  {fill}%
                </Text>
              )
            }
          </AnimatedCircularProgress>
        </View>
      </Card>
      <Card
        style={styles.Details}
        header={() => (<CardTitle>Your Answers</CardTitle>)}
      >
        {list.map((answer, index) => {
          return (<AnswerItem item={answer} key={index} />)
        })}
      </Card>
      <Button style={styles.Buttons} onPress={playAgain}>Play Again</Button>
      <Button appearance='ghost' style={styles.Buttons} onPress={changeSettings}>Change Settings</Button>
    </Screen>
  )
}
