import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import Question from './Question'
import Progress from './Progress'
import { action } from '@storybook/addon-actions'
import { FalseBoolean, MultipleChoice, TrueBoolean, ListOfQuestions } from '../../../test/fixtures/QuestionsStateMachine'
import { Question as QuestionModel } from '../../state/modules/quiz/Models'
import Category from './Category'
import { Layout } from '@ui-kitten/components'
import Questions from './index'
import { Spacing } from '../../theme'
import { View } from 'react-native'

declare let module: NodeModule

const selectionAction = (selected: string | undefined) => action('Selected')(selected)
const onSave = (question: QuestionModel | undefined, selected: string) => action('Save')(question, selected)
const onNext = () => action('Next')()

storiesOf('Question', module)
  .add('set continueLabel', () => (
    <Question index={0} item={TrueBoolean} continueLabel='Next' onSelect={selectionAction} />
  ))
  .add('Boolean', () => (
    <Question index={0} item={FalseBoolean} continueLabel='Continue' onSelect={selectionAction} />
  ))
  .add('Multiple Choice', () => (
    <Question index={1} item={MultipleChoice} continueLabel='Accept' onSelect={selectionAction} />
  ))

storiesOf('Question Progress', module)
  .add('completed steps', () => (
    <>
      <Progress list={ListOfQuestions} step={0} onNext={onNext} onSaveAnswer={onSave} />
      <Progress list={ListOfQuestions} step={1} onNext={onNext} onSaveAnswer={onSave} />
      <Progress list={ListOfQuestions} step={2} onNext={onNext} onSaveAnswer={onSave} />
    </>
  ))

storiesOf('Questions', module)
  .add('empty list', () => (
    <View style={{ backgroundColor: '#000', width: '100%', height: '100%', paddingHorizontal: Spacing.SMALLER }}>
      <Questions onNext={onNext} onSaveAnswer={onSave} step={0} list={[]} />
    </View>
  ))
  .add('populated list', () => (
    <View style={{ backgroundColor: '#000', width: '100%', height: '100%', paddingHorizontal: Spacing.SMALLER }}>
      <Questions onNext={onNext} onSaveAnswer={onSave} step={0} list={ListOfQuestions} />
    </View>
  ))

storiesOf('Question Category', module)
  .add('on Layout', () => (
    <Layout>
      <Category index={0} item={TrueBoolean} continueLabel='Next' onSelect={selectionAction} />
    </Layout>
  ))
