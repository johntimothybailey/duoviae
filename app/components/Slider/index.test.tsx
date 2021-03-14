import React from 'react'
import { cleanup, render } from '@testing-library/react-native'
import { BootComponent } from '../../../test'
import Slider from './index'

describe('Slider', () => {
  describe('Render', () => {
    afterEach(cleanup)
    it('value is displayed', () => {
      const { queryByText } = render(
        <BootComponent>
          <Slider value={6} />
        </BootComponent>
      )
      expect(queryByText('6')).toBeTruthy()
    })
    it('style is set', () => {
      const { toJSON } = render(
        <BootComponent>
          <Slider style={{ width: 300 }} />
        </BootComponent>
      )
      expect(toJSON()).toMatchSnapshot()
    })
  })
})
