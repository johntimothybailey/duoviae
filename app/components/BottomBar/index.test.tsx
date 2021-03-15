import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react-native'
import { BootComponent } from '../../../test'
import BottomBar from './index'
import { TabNavigationState } from '@react-navigation/native'
import { ParamListBase } from '@react-navigation/routers'

export const stateItem: TabNavigationState<ParamListBase> = {
  key: 'home',
  type: 'tab',
  index: 0,
  routeNames: ['home'],
  routes: [
    {
      key: 'home',
      name: 'Home'
    }
  ],
  stale: false,
  history: []
}

export const stateItems: TabNavigationState<ParamListBase> = {
  key: 'home',
  type: 'tab',
  index: 0,
  routeNames: ['home', 'account'],
  routes: [
    {
      key: 'home',
      name: 'Home'
    },
    {
      key: 'account',
      name: 'Account'
    }
  ],
  stale: false,
  history: []
}

describe('BottomBar', () => {
  describe('Render', () => {
    afterEach(cleanup)
    it('items without descriptors', () => {
      const { queryByText, toJSON } = render(
        <BootComponent>
          <BottomBar
            state={stateItems} descriptors={{}} navigation={{ navigate: () => {} } as any}
          />
        </BootComponent>
      )
      expect(queryByText('Welcome')).not.toBeTruthy()
      expect(queryByText('Home')).toBeTruthy()
      expect(queryByText('Account')).toBeTruthy()
      expect(toJSON()).toMatchSnapshot()
    })
    it('items using descriptors', () => {
      const { queryByText, toJSON } = render(
        <BootComponent>
          <BottomBar
            state={stateItems} descriptors={{
              home: {
                options: {
                  title: 'Welcome'
                }
              } as any
            }} navigation={{ navigate: () => {} } as any}
          />
        </BootComponent>
      )
      expect(queryByText('Welcome')).toBeTruthy()
      expect(queryByText('Home')).not.toBeTruthy()
      expect(queryByText('Account')).toBeTruthy()
      expect(toJSON()).toMatchSnapshot()
    })
    it('triggers navigate on click', () => {
      const onNavigate = jest.fn()
      const { queryByText } = render(
        <BootComponent>
          <BottomBar
            state={stateItems} descriptors={{}} navigation={{ navigate: onNavigate } as any}
          />
        </BootComponent>
      )
      fireEvent.press(queryByText('Account'))
      expect(onNavigate).toHaveBeenCalledWith('account')
    })
  })
})
