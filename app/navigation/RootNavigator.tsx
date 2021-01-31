import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ExternalNavigator } from './ExternalNavigator'
import { Questions } from '../screens'

const { Navigator, Screen } = createStackNavigator()

const rootStackScreenOptions = {
  headerShown: false,
  gestureEnabled: true
}

export const RootNavigator = () => {
  return (
    <Navigator
      screenOptions={rootStackScreenOptions}
    >
      <Screen name='ExternalStack' component={ExternalNavigator} />
      <Screen name='Questions' component={Questions} />
    </Navigator>
  )
}
