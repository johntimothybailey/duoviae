import * as React from 'react'
import { Switch, TextInput, View, ViewStyle } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import Container from './'
import Spacing from '../../theme/spacing'
import { Layout } from '@ui-kitten/components'

declare let module: NodeModule

const ITEMS: ViewStyle[] = [
  { minWidth: 50, minHeight: 50, backgroundColor: 'powderblue' },
  { minWidth: 50, minHeight: 50, backgroundColor: 'skyblue' },
  { minWidth: 100, minHeight: 100, backgroundColor: 'steelblue' }
]
const makeItems = (styleExtends: ViewStyle = {}) => {
  return ITEMS.map((styles, index) =>
    (
      <View
        key={index} style={{
          ...styles,
          ...styleExtends
        }}
      />
    )
  )
}

storiesOf('Container', module)
  .add('Defaults', () => (
    <Container>
      {makeItems()}
    </Container>
  ))
  .add('Column Reverse', () => (
    <Container reverse>
      {makeItems()}
    </Container>
  ))
  .add('Row', () => (
    <Container row>
      {makeItems()}
    </Container>
  ))
  .add('Row Reverse', () => (
    <Container row reverse>
      {makeItems()}
    </Container>
  ))
  .add('Spacing between', () => (
    <Container space='between'>
      {makeItems()}
    </Container>
  ))
  .add('Spacing around', () => (
    <Container space='around'>
      {makeItems()}
    </Container>
  ))
  .add('Row Spacing around', () => (
    <Container row space='around'>
      {makeItems()}
    </Container>
  ))
  .add('Row Spacing between', () => (
    <Container row space='around'>
      {makeItems()}
    </Container>
  ))
  .add('Spacing as a value', () => (
    <Layout style={{ width: '100%', height: '100%' }}>
      <Container height='100%' space={Spacing.MASSIVE} width='100%'>
        {makeItems()}
      </Container>
    </Layout>
  ))
  .add('Fit Items > Column', () => (
    <Container fit-items>
      {makeItems()}
    </Container>
  ))
  .add('Fit Items > Row', () => (
    <Container fit-items row>
      {makeItems()}
    </Container>
  ))
  .add('Form preset', () => (
    <Container preset='form' style={{ justifyContent: 'flex-start' }}>
      <TextInput placeholder='Name' />
      <Switch />
    </Container>
  ))
