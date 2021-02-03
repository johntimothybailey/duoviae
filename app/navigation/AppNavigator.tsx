import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { PreNavigator } from './PreNavigator'
import TriviaNavigator from './TriviaNavigator'

const { Navigator, Screen } = createStackNavigator()

const rootStackScreenOptions = {
  headerShown: false,
  gestureEnabled: true
}

export const AppNavigator = () => {
  return (
    <Navigator
      screenOptions={rootStackScreenOptions}
    >
      <Screen name='ExternalStack' component={PreNavigator} />
      <Screen name='TriviaStack' component={TriviaNavigator} />
    </Navigator>
  )
}
