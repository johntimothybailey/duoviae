import React from 'react'
import { Trivia } from '../screens'
import { createStackNavigator } from '@react-navigation/stack'

const { Screen, Navigator } = createStackNavigator()

export const TriviaNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name='Questions' component={Trivia}
      />
    </Navigator>
  )
}

export default TriviaNavigator
