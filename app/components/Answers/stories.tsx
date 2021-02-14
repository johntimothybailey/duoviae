import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import AnswerItem from './Item'
import { IsCorrectAnswer, IsIncorrectAnswer } from '../../../test/fixtures/AnswersStateMachine'

declare let module: NodeModule

storiesOf('Answers Item', module)
  .add('Correct', () => (
    <AnswerItem item={IsCorrectAnswer} />
  ))
  .add('Incorrect', () => (
    <AnswerItem item={IsIncorrectAnswer} />
  ))
