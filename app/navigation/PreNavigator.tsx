import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Welcome as WelcomeScreen } from '../screens'
const { Navigator, Screen } = createStackNavigator()

export function PreNavigator () {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true
      }}
    >
      <Screen name='Welcome' component={WelcomeScreen} />
    </Navigator>
  )
}

export default PreNavigator
