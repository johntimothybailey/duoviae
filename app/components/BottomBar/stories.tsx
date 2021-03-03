import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import BottomBar from './index'
import { TabNavigationState } from '@react-navigation/native'
import { ParamListBase } from '@react-navigation/routers'
import { action } from '@storybook/addon-actions'
import { Spacing } from '../../theme'
import { Layout } from '@ui-kitten/components'

declare let module: NodeModule

const onNavigate = (value: any) => action('navigate to')(value)

const stateItem: TabNavigationState<ParamListBase> = {
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

const stateItems: TabNavigationState<ParamListBase> = {
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

storiesOf('BottomBar', module)
  .add('One item with no icon nor descriptors', () => (
    <BottomBar state={stateItem} descriptors={{}} navigation={{ navigate: onNavigate } as any} />
  ))
  .add('Items with icons and descriptors', () => (
    <Layout level='4' style={{ paddingHorizontal: Spacing.SMALLER }}>
      <BottomBar
        state={stateItems} descriptors={{
          home: {
            options: {
              title: 'Welcome'
            }
          } as any
        }} navigation={{ navigate: onNavigate } as any}
      />
    </Layout>
  ))
