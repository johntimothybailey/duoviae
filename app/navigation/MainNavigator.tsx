import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TriviaNavigator from './TriviaNavigator'
import BottomBar from '../components/BottomBar'
import { QuestIcon } from '../components/Icons'

const { Navigator, Screen } = createBottomTabNavigator()

export const MainNavigator = () => {
  return (
    <Navigator tabBar={BottomBar}>
      <Screen name='Trivia' component={TriviaNavigator} options={{ tabBarIcon: QuestIcon }} />
    </Navigator>
  )
}
