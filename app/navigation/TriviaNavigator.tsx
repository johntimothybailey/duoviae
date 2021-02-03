import React from 'react'
import { Header } from '../components'
import { useNavigation } from '@react-navigation/native'
import { Trivia } from '../screens'
import { createStackNavigator } from '@react-navigation/stack'
import { Divider, Layout } from '@ui-kitten/components'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Spacing } from '../theme'

const { Screen, Navigator } = createStackNavigator()

interface HeaderPropsOverrides {
  navigation: any
  hideGoBack?: boolean
  noAppTitle?: boolean
}

/**
 * @param overrides
 */
const createHeaderFactory = (overrides: HeaderPropsOverrides) => {
  return function renderHeader (props: any) {
    const safeAreaInsets: EdgeInsets = useSafeAreaInsets()
    const combinedProps = { ...props, ...overrides }
    return (
      <Layout style={{ minHeight: 128, paddingTop: Math.max(safeAreaInsets.top, Spacing.MEDIUM) }} level='1'>
        <Header title='Duoviae' subtitle='Questions' {...combinedProps} onBackPress={() => overrides.navigation.goBack()} />
        <Divider />
      </Layout>
    )
  }
}

export const TriviaNavigator = () => {
  const navigation = useNavigation()
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        header: createHeaderFactory({ navigation, hideGoBack: false, noAppTitle: true })
      }}
    >
      <Screen
        name='Questions' component={Trivia} options={{
          title: 'Trivia'
        }}
      />
    </Navigator>
  )
}

export default TriviaNavigator
