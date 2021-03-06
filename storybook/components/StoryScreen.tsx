import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SafeAreaView, ViewStyle } from 'react-native'
import { PropsWithChildren } from 'react'

const styles: ViewStyle = {
  flex: 1
}

export default function StoryScreen (props: PropsWithChildren<any>) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles}>
        {props.children}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
