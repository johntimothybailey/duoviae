import 'react-native-gesture-handler'
import React, { ReactElement } from 'react'
import * as eva from '@eva-design/eva'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppNavigator } from './navigation/AppNavigator'
import { ApplicationProvider as ThemeProvider, IconRegistry } from '@ui-kitten/components'
import { StateProvider } from './state'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import './translations/i18n'
import { Palette } from './theme/config'
import { Inspectors } from './services/inspectors/interfaces'
import createInspectors from './services/inspectors/createInspectors'

export default function App (): ReactElement | null {
  const inspectors: Inspectors = createInspectors()
  inspectors.setup()
  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <StateProvider inspection={inspectors}>
        <ThemeProvider {...eva} theme={{ ...eva.dark, ...Palette }}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </StateProvider>
    </SafeAreaProvider>
  )
}
