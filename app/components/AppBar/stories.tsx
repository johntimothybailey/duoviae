import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import AppBar from './index'
import { action } from '@storybook/addon-actions'
import { Layout } from '@ui-kitten/components'
import { Spacing } from '../../theme'
import BackgroundImage from '../Screen/BackgroundImage'
import { questionsBackground } from '../../../assets/images'

declare let module: NodeModule

const onBack = () => action('onBack')()

storiesOf('AppBar', module)
  .add('Title', () => (
    <AppBar title='My App' />
  ))
  .add('Subtitle', () => (
    <AppBar title='My App' subtitle='how original' />
  ))
  .add('Back', () => (
    <AppBar title='My App' subtitle='how original' onBackPress={onBack} />
  ))
  .add('Transparent', () => (
    <>
      <Layout level='4' style={{ paddingVertical: Spacing.LARGE, paddingHorizontal: Spacing.SMALLER, marginBottom: Spacing.LARGE }}>
        <AppBar title='My App' subtitle='how original' onBackPress={onBack} transparent />
      </Layout>
      <BackgroundImage background={questionsBackground}>
        <AppBar title='My App' subtitle='how original' onBackPress={onBack} transparent />
      </BackgroundImage>
    </>
  ))
