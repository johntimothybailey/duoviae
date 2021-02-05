import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Question from './Question'
import { FalseBoolean } from '../../../test/fixtures/QuestionsStateMachine'
import BootComponent from '../../../test/BootComponent'

describe('Question Component', () => {
  describe('onSelect', () => {
    it('passes the selected option', () => {
      const onSelect = jest.fn()
      const { getByText } = render(
        <BootComponent>
          <Question
            item={FalseBoolean}
            onSelect={onSelect}
            index={0}
            continueLabel='Continue'
          />
        </BootComponent>
      )
      const falseSelection = getByText('False')
      fireEvent.press(falseSelection)
      const continueBtn = getByText('Continue')
      fireEvent.press(continueBtn)
      expect(onSelect).toHaveBeenCalledWith('False')
    })
  })
})
