import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ExternalNavigator } from './ExternalNavigator'

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
    </Navigator>
  )
}
