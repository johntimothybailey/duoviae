import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TriviaNavigator from './TriviaNavigator'
import BottomBar from '../components/BottomBar'
import { OptionsIcon, QuestIcon } from '../components/Icons'
import SettingsNavigator from './SettingsNavigator'

const { Navigator, Screen } = createBottomTabNavigator()

export const MainNavigator = () => {
  return (
    <Navigator tabBar={BottomBar}>
      <Screen name='Settings' component={SettingsNavigator} options={{ tabBarIcon: OptionsIcon }} />
      <Screen name='Trivia' component={TriviaNavigator} options={{ tabBarIcon: QuestIcon }} />
    </Navigator>
  )
}
