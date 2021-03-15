import { QuestionsProps } from './props'
import { ProgressStyles } from './styles'
import { Card, Text, useTheme } from '@ui-kitten/components'
import { Bar as ProgressBar } from 'react-native-progress'
import React, { ReactElement, useState } from 'react'
import Container from '../Container'
import { Spacing } from '../../theme'
import { useTranslation } from 'react-i18next'

export const getPercentage = (step: number, total: number): number => {
  return total ? (step ?? 0) / total : 0
}

const Component = (props: QuestionsProps): ReactElement => {
  // Translations
  const { t } = useTranslation('common')
  const questionString = t('question')
  // Colors
  const theme = useTheme()
  const color = theme['color-primary-500']
  // Because the ProgressBar from react-native-progress is not automatically "responsive", we need to provide it.
  const [progressWidth, setProgressWidth] = useState(200)
  const percentage: number = getPercentage(props.step, props.list.length)
  return (
    <Card
      style={ProgressStyles.container}
      onLayout={(event) => {
        setProgressWidth(event.nativeEvent.layout.width - (Spacing.LARGE * 2))
      }}
    >
      <Container style={ProgressStyles.text} row space='between' wrap='nowrap'>
        <Text>{questionString}</Text>
        <Text>{props.step} / {props.list.length}</Text>
      </Container>
      <ProgressBar color={color} progress={percentage} width={progressWidth} />
    </Card>
  )
}

export default Component
