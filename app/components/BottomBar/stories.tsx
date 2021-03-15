import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import BottomBar from './index'
import { action } from '@storybook/addon-actions'
import { Spacing } from '../../theme'
import { Layout } from '@ui-kitten/components'
import { stateItem, stateItems } from './index.test'

declare let module: NodeModule

const onNavigate = (value: any) => action('navigate to')(value)

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
