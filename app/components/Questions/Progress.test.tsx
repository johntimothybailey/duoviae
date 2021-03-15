import React from 'react'
import { cleanup, render } from '@testing-library/react-native'
import { ListOfQuestions } from '../../../test/fixtures/QuestionsStateMachine'
import Progress, { getPercentage } from './Progress'
import { BootComponent } from '../../../test'

describe('Questions > Progress Component', () => {
  describe('getPercentage()', () => {
    it('returns zero if length is zero', () => {
      expect(getPercentage(10, 0)).toEqual(0)
    })
    it('returns 6 as decimal', () => {
      expect(getPercentage(6, 10)).toEqual(0.6)
    })
  })
  describe('Render', () => {
    afterEach(cleanup)
    it('with an empty list', () => {
      const { queryByText, toJSON } = render(
        <BootComponent>
          <Progress list={[]} onSaveAnswer={() => {}} step={0} onNext={() => {}} />
        </BootComponent>
      )
      expect(queryByText('NaN')).toBeFalsy()
      expect(queryByText('0 / 0')).toBeTruthy()
      expect(toJSON()).toMatchSnapshot()
    })
    it('with a populated', () => {
      const { queryByText, toJSON } = render(
        <BootComponent>
          <Progress list={ListOfQuestions} onSaveAnswer={() => {}} step={0} onNext={() => {}} />
        </BootComponent>
      )
      expect(queryByText('NaN')).toBeFalsy()
      expect(queryByText('0 / 2')).toBeTruthy()
      expect(toJSON()).toMatchSnapshot()
    })
    it('with a populated starting at second question', () => {
      const { queryByText, toJSON } = render(
        <BootComponent>
          <Progress list={ListOfQuestions} onSaveAnswer={() => {}} step={1} onNext={() => {}} />
        </BootComponent>
      )
      expect(queryByText('NaN')).toBeFalsy()
      expect(queryByText('1 / 2')).toBeTruthy()
      expect(toJSON()).toMatchSnapshot()
    })
  })
})
