import React, { ReactElement, useState } from 'react'
import V from 'voca'
import R from 'ramda'
import Container from '../Container'
import { Button, Layout, Radio, RadioGroup, Text } from '@ui-kitten/components'
import { QuestionProps, QuestionsProps } from './props'
import { Question as QuestionModel } from '../../state/modules/trivia/Models'
import { QuestionStyles } from './styles'

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

const Question = (props: QuestionProps): ReactElement => {
  const [selected, setSelect] = useState(undefined)
  return (
    <Container outline width='100%' style={{ flex: 0 }}>
      <Layout level='4' style={{ ...QuestionStyles.question, width: '100%' }}>
        <Text category='p1' style={QuestionStyles.question}>{V.unescapeHtml(props.item.question)}</Text>
      </Layout>
      <RadioGroup
        selectedIndex={selected}
        onChange={setSelect}
      >
        {props.item.possibleAnswers.map((value: string, index: number) => {
          return (<Radio key={index}>{value}</Radio>)
        })}
      </RadioGroup>
      <Button onPress={() => props.onSelect()}>Continue</Button>
    </Container>
  )
}

const Questions = (props: QuestionsProps): ReactElement => {
  const items: QuestionModel[] = props.list
  const [step, setStep] = useState(1)
  const [question, setQuestion] = useState(items[0])

  return (
    <Container width='100%'>
      <Text>{step}/{items.length}</Text>
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
    </Container>
  )
}

export default Questions
