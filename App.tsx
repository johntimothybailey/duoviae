import 'react-native-gesture-handler'
import React from 'react'
import * as eva from '@eva-design/eva'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppNavigator } from './app/navigation/AppNavigator'
import { ApplicationProvider as ThemeProvider, IconRegistry } from '@ui-kitten/components'
import { StateProvider } from './app/state'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import './app/translations/i18n'

export default function App () {
  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <StateProvider>
        <ThemeProvider {...eva} theme={eva.dark}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </StateProvider>
    </SafeAreaProvider>
  )
}
