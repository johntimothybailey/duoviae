import React from 'react'
import { Questions, Results } from '../screens'
import { createStackNavigator } from '@react-navigation/stack'

const { Screen, Navigator } = createStackNavigator()

export const TriviaNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name='Questions' component={Questions} />
      <Screen name='Results' component={Results} />
    </Navigator>
  )
}

export default TriviaNavigator
