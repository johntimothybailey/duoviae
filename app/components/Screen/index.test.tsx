import React from 'react'
import { render, waitFor, cleanup } from '@testing-library/react-native'
import { BootComponent } from '../../../test'
import Screen from './index'
import { Text } from 'react-native'

describe('Screen', () => {
  describe('Render', () => {
    afterEach(cleanup)
    it('is not loading', async () => {
      const { queryByText } = render(
        <BootComponent>
          <Screen isLoading={false}>
            <Text>After Loading</Text>
          </Screen>
        </BootComponent>
      )
      await waitFor(() => {
        expect(queryByText('After Loading')).toBeTruthy()
      })
    })
    it('is loading', async () => {
      const { queryByText } = render(
        <BootComponent>
          <Screen isLoading>
            <Text>After Loading</Text>
          </Screen>
        </BootComponent>
      )
      await waitFor(() => {
        expect(queryByText('After Loading')).toBeFalsy()
      })
    })
  })
})
