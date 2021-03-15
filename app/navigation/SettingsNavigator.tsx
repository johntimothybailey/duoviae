import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Settings, Categories } from '../screens'

const { Screen, Navigator } = createStackNavigator()

export const SettingsNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name='Selected' component={Settings} />
      <Screen name='Categories' component={Categories} />
    </Navigator>
  )
}

export default SettingsNavigator
