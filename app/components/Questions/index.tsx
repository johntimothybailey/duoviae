import React, { ReactElement, useState } from 'react'
import R from 'ramda'
import Container from '../Container'
import { Text } from '@ui-kitten/components'
import { QuestionsProps } from './props'
import { Question as QuestionModel } from '../../state/modules/trivia/Models'
import Spacing from '../../theme/spacing'
import Question from './Question'
import Progress from './Progress'

/**
 * TODO: Move to State Machine
 */
export const nextQuestion = (setStep: any, setItem: any, item: QuestionModel, items: QuestionModel[], onComplete: any) => {
  const currentStep = R.findIndex(R.propEq('question', item.question), items)
  const nextStep = currentStep + 1
  if (nextStep < items.length) {
    setStep(nextStep)
    setItem(items[nextStep])
  } else {
    onComplete()
  }
}

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
              props.onSaveAnswer(question, selection)
              nextQuestion(setStep, setQuestion, question, items, props.onComplete)
            }}
            continueLabel='Continue'
           />)
        : <Text>No question available</Text>}
      <Progress {...props} step={step} />
    </Container>
  )
}

export default Questions
