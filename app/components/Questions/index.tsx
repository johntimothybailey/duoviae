import React, { ReactElement, useEffect } from 'react'
import Container from '../Container'
import { Text } from '@ui-kitten/components'
import { QuestionsProps } from './props'
import { Question as QuestionModel } from '../../state/modules/quiz/Models'
import Spacing from '../../theme/spacing'
import Question from './Question'
import Progress from './Progress'
import { useTranslation } from 'react-i18next'

const Questions = (props: QuestionsProps): ReactElement => {
  // Translations
  const { t } = useTranslation('common')
  const noQuestionsString: string = t('noQuestions')
  //
  let question: QuestionModel | undefined = props.list.length > 0 ? props.list[props.step] : undefined
  useEffect(() => {
    question = props.list.length > 0 ? props.list[props.step] : undefined
  }, [props.list, props.step])
  return (
    <Container width='100%' space={Spacing.LARGE}>
      {question
        ? (
          <>
            <Question
              item={question}
              index={props.step}
              onSelect={(selection: string | undefined) => {
                props.onSaveAnswer(question, selection as any)
                props.onNext()
              }}
              continueLabel={t('continue')}
            />
            <Progress {...props} step={props.step} />
          </>
          )
        : <Text>{noQuestionsString}</Text>}
    </Container>
  )
}

export default Questions
