import { QuestionsProps } from './props'
import { View } from 'react-native'
import { ProgressStyles } from './styles'
import { Text } from '@ui-kitten/components'
import { Bar as ProgressBar } from 'react-native-progress'
import React from 'react'

const Component = (props: QuestionsProps) => (
  <View style={ProgressStyles.container}>
    <Text style={ProgressStyles.text}>{props.step} / {props.list.length}</Text>
    <ProgressBar progress={(props.step ?? 0) / props.list.length} width={200} />
  </View>
)

export default Component
