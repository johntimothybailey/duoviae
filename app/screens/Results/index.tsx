import React, { ReactElement } from 'react'
import { Screen } from '../../components'
import { RootState } from '../../state'
import { questionsBackground } from '../../../assets/images'
import { useSelector } from 'react-redux'
import { Card, Text, TextProps } from '@ui-kitten/components'
import { Answer } from '../../state/modules/answers/Models'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { Item as AnswerItem } from '../../components/Answers'
import Spacing from '../../theme/spacing'
import { View } from 'react-native'

const CardTitle = (props: TextProps) => {
  return (
    <Text style={{ textAlign: 'center', padding: Spacing.MEDIUM }}>{props.children}</Text>
  )
}

export default function Results (): ReactElement {
  const list = useSelector((state: RootState) => {
    return state.Answers.current
  })
  const answersCorrect = useSelector((state: RootState) => {
    const list = state.Answers.current
    const correctAnswers = list.filter((value: Answer) => {
      return value.isCorrect
    })
    return { percent: Math.round(correctAnswers.length / list.length * 100), count: correctAnswers.length }
  })

  return (
    <Screen background={questionsBackground} withAppBar title='Results'>
      <Card
        style={{ width: '100%', marginBottom: Spacing.LARGE }}
        header={() => (<CardTitle>{answersCorrect.count} correct of {list.length}</CardTitle>)}
      >
        <View style={{ alignSelf: 'center' }}>
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
        style={{ width: '100%' }}
        header={() => (<CardTitle>Your Answers</CardTitle>)}
      >
        {list.map((answer, index) => {
          return (<AnswerItem item={answer} key={index} />)
        })}
      </Card>
    </Screen>
  )
}
