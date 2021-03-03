import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { PreNavigator } from './PreNavigator'
import { MainNavigator } from './MainNavigator'

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
      <Screen name='External' component={PreNavigator} />
      <Screen name='Main' component={MainNavigator} />
    </Navigator>
  )
}
