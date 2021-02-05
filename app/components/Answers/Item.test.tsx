import React from 'react'
import { render } from '@testing-library/react-native'
import Item from './Item'
import { IsCorrectAnswer, IsIncorrectAnswer } from '../../../test/fixtures/AnswersStateMachine'
import { BootComponent } from '../../../test'

describe('Answers Item', () => {
  describe('Render', () => {
    it('is correct', () => {
      const { toJSON } = render(
        <BootComponent>
          <Item item={IsCorrectAnswer} key={1} />
        </BootComponent>
      )
      expect(toJSON()).toMatchSnapshot()
    })
    it('is incorrect', () => {
      const { toJSON } = render(
        <BootComponent>
          <Item item={IsIncorrectAnswer} key={1} />
        </BootComponent>
      )
      expect(toJSON()).toMatchSnapshot()
    })
  })
})
