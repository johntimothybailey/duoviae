import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import * as eva from '@eva-design/eva'
import Question from './Question'
import { FalseBoolean } from '../../../test/fixtures/QuestionsStateMachine'
import { ApplicationProvider } from '@ui-kitten/components'

describe('Question Component', () => {
  describe('onSelect', () => {
    it('passes the selected option', () => {
      const onSelect = jest.fn()
      const { getByText } = render(
        <ApplicationProvider mapping={eva.mapping} theme={eva.light}>
          <Question
            item={FalseBoolean}
            onSelect={onSelect}
            index={0}
            continueLabel='Continue'
          />
        </ApplicationProvider>
      )
      const falseSelection = getByText('False')
      fireEvent.press(falseSelection)
      const continueBtn = getByText('Continue')
      fireEvent.press(continueBtn)
      expect(onSelect).toHaveBeenCalledWith('False')
    })
  })
})
