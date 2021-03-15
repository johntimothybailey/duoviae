import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import Screen from './index'
import { Layout, Text } from '@ui-kitten/components'

declare let module: NodeModule

storiesOf('Screen', module)
  .add('isLoading=true', () => (
    <Screen isLoading>
      <Layout><Text>You should not see me...</Text></Layout>
    </Screen>
  ))
  .add('isLoading=false', () => (
    <Screen isLoading={false}>
      <Layout><Text>Loaded, mahalo</Text></Layout>
    </Screen>
  ))
