import * as React from 'react'
import { SafeAreaView, ViewStyle } from 'react-native'
import { PropsWithChildren } from 'react'

const styles: ViewStyle = {
  flex: 1
}

export default function StoryScreen (props: PropsWithChildren<any>) {
  return (
    <SafeAreaView style={styles}>
      {props.children}
    </SafeAreaView>
  )
}
