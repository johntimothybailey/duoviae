import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react-native'
import { BootComponent } from '../../../test'
import { Category } from './index'

describe('Category Component', () => {
  describe('Render', () => {
    afterEach(cleanup)
    describe('displays title and icon. Icon by id', () => {
      it('general (fallback)', () => {
        const { toJSON } = render(
          <BootComponent>
            <Category
              item={{
                id: 300,
                name: 'Neuroscience'
              }}
              onPress={() => {}}
            />
          </BootComponent>
        )
        expect(toJSON()).toMatchSnapshot()
      })
      it('Book', () => {
        const { toJSON } = render(
          <BootComponent>
            <Category
              item={{
                id: 10,
                name: 'Comics'
              }}
              onPress={() => {}}
            />
          </BootComponent>
        )
        expect(toJSON()).toMatchSnapshot()
      })
    })
    describe('selection fires event with id', () => {
      const onPress = jest.fn()
      const { queryByText } = render(
        <BootComponent>
          <Category
            item={{
              id: 10,
              name: 'Neuroscience'
            }}
            onPress={onPress}
          />
        </BootComponent>
      )
      fireEvent.press(queryByText('Neuroscience'))
      expect(onPress).toHaveBeenCalledWith({ id: 10, name: 'Neuroscience' })
    })
  })
})
