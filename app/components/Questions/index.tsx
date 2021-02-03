import React, { ReactElement, useEffect, useState } from 'react'
import V from 'voca'
import R from 'ramda'
import Container from '../Container'
import { Button, Card, Layout, Radio, RadioGroup, Text } from '@ui-kitten/components'
import { Bar as ProgressBar } from 'react-native-progress'
import { QuestionProps, QuestionsProps } from './props'
import { Question as QuestionModel } from '../../state/modules/trivia/Models'
import { ProgressStyles, QuestionStyles } from './styles'
import Spacing from '../../theme/spacing'
import { View } from 'react-native'

// ACTIONS
/**
 * This may move to a part of the State Machine
 */
const nextQuestion = (setStep: any, setItem: any, item: QuestionModel, items: QuestionModel[]) => {
  const currentStep = R.findIndex(R.propEq('question', item.question), items)
  const nextStep = currentStep + 1
  setStep(nextStep)
  setItem(items[nextStep])
}

// COMPONENTS
const Category = (props: QuestionProps): ReactElement => {
  return (
    <Text category='h5' style={QuestionStyles.category}>{props.item.category}</Text>
  )
}

const Question = (props: QuestionProps): ReactElement => {
  const [selected, setSelect] = useState(undefined)
  useEffect(() => {
    setSelect(undefined)
  }, [props.item])
  return (
    <Card
      style={{ width: '100%' }}
      header={() => <Category {...props} />}
      footer={() => <Button disabled={selected === undefined} onPress={() => props.onSelect()}>Continue</Button>}
    >
      <Layout level='4' style={{ ...QuestionStyles.question, width: '100%' }}>
        <Text category='p1' style={QuestionStyles.question}>{V.unescapeHtml(props.item.question)}</Text>
      </Layout>
      <RadioGroup
        style={QuestionStyles.answers}
        selectedIndex={selected}
        onChange={setSelect}
      >
        {props.item.possibleAnswers.map((value: string, index: number) => {
          return (<Radio key={index}>{value}</Radio>)
        })}
      </RadioGroup>
    </Card>
  )
}

const Progress = (props: QuestionsProps) => (
  <View style={ProgressStyles.container}>
    <Text style={ProgressStyles.text}>{props.step} / {props.list.length}</Text>
    <ProgressBar progress={(props.step ?? 0) / props.list.length} width={200} />
  </View>
)

const Questions = (props: QuestionsProps): ReactElement => {
  const items: QuestionModel[] = props.list
  const [step, setStep] = useState(0)
  const [question, setQuestion] = useState(items[0])

  return (
    <Container width='100%' space={Spacing.LARGE}>
      {question
        ? (<Question
            item={question}
            index={step}
            onSelect={(selection: string) => {
              props.saveAnswer(question, selection)
              nextQuestion(setStep, setQuestion, question, items)
            }}
           />)
        : <Text>No Question available</Text>}
      <Progress {...props} step={step} />
    </Container>
  )
}

export default Questions
