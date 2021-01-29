import 'react-native-gesture-handler'
import React from 'react'
import * as eva from '@eva-design/eva'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RootNavigator } from './app/navigation/RootNavigator'
import { ApplicationProvider as ThemeProvider } from '@ui-kitten/components'

export default function App () {
  return (
    <ThemeProvider {...eva} theme={eva.dark}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
