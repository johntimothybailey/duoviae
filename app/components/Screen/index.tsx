import React, { ReactElement } from 'react'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'
import Container from '../Container'
import { ScreenProps } from './props'
import styles from './styles'
import { ImageBackground, View } from 'react-native'
import { useTheme } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { Spacing } from '../../theme'
import AppBar from '../AppBar'
import { ScrollView } from 'react-native-gesture-handler'

const onBackPress = (withBack: boolean | undefined) => {
  if (withBack) {
    const navigation = useNavigation()
    return () => navigation.goBack()
  }
  return undefined
}

export const WithAppBar = (props: ScreenProps): ReactElement => {
  const safeAreaInsets: EdgeInsets = useSafeAreaInsets()
  return (
    <View style={{ flex: 1 }}>
      <AppBar
        title={props.title} subtitle={props.subtitle} onBackPress={onBackPress(props.withBack)}
        style={{ marginTop: Math.max(safeAreaInsets.top, Spacing.MEDIUM), backgroundColor: 'rgba(0,0,0,0)' }}
      />
      <Container height='100%' space='around' style={{ ...styles.Splash }}>
        {props.children}
      </Container>
    </View>
  )
}

const BackgroundImage = (props: ScreenProps): ReactElement => {
  return (
    <ImageBackground source={props.background} style={styles.BackgroundFull} resizeMode='cover'>
      <View style={styles.BackgroundOverlay}>
        {props.children}
      </View>
    </ImageBackground>
  )
}

const SplashScreen = (props: ScreenProps): ReactElement => {
  return props.withAppBar
    ? (
      <WithAppBar {...props}>
        {props.children}
      </WithAppBar>
      )
    : (
      <Container space='around' style={styles.Splash}>
        {props.children}
      </Container>
      )
}

const RegularScreen = (props: ScreenProps): ReactElement => {
  const theme = useTheme()
  const style = { flex: 1, ...styles.Splash }
  const safeAreaInsets: EdgeInsets = useSafeAreaInsets()
  if (!props.background) {
    style.backgroundColor = theme['background-basic-color-1']
  }
  return (
    <ScrollView style={{ flex: 1, marginTop: Math.max(safeAreaInsets.top, Spacing.MEDIUM) }}>
      <AppBar
        title={props.title} subtitle={props.subtitle} onBackPress={onBackPress(props.withBack)}
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      />
      <Container height='100%' space='around' style={{ ...styles.Regular }}>
        {props.children}
      </Container>
    </ScrollView>
  )
}

/***
 * TODO: Implement styles via https://akveo.github.io/react-native-ui-kitten/docs/design-system/custom-component-mapping
 * @param props
 * @constructor
 */
const Screen = (props: ScreenProps): ReactElement => {
  const screenSelection = props.preset === 'splash'
    ? (<SplashScreen {...props}>{props.children}</SplashScreen>)
    : (<RegularScreen {...props}>{props.children}</RegularScreen>)
  return props.background
    ? (
      <BackgroundImage background={props.background}>
        {screenSelection}
      </BackgroundImage>
      )
    : screenSelection
}
export default Screen
