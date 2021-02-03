import React, { ReactElement } from 'react'
import { EdgeInsets, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import Container from '../Container'
import { ScreenProps } from './props'
import styles from './styles'
import { ImageBackground, View } from 'react-native'
import { Divider, useTheme } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { Spacing } from '../../theme'
import Header from '../AppBar'

export const WithAppBar = (props: ScreenProps): ReactElement => {
  const safeAreaInsets: EdgeInsets = useSafeAreaInsets()
  const navigation = useNavigation()
  return (
    <View style={{
      flex: 1
    }}
    >
      <View style={{ flex: 0, minHeight: Spacing.LARGE, paddingTop: Math.max(safeAreaInsets.top, Spacing.MEDIUM) }}>
        <Header title={props.title} subtitle={props.subtitle} onBackPress={() => navigation.goBack()} style={{ backgroundColor: 'rgba(0,0,0,0)' }} />
      </View>
      <Container height='100%' space='around' style={{ ...styles.SplashBase, flex: 1 }}>
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
      <Container space='around' style={styles.SplashBase}>
        {props.children}
      </Container>
      )
}

const SafeViewScreen = (props: ScreenProps): ReactElement => {
  const theme = useTheme()
  const style = { flex: 1, ...styles.SplashBase }
  if (!props.background) {
    style.backgroundColor = theme['background-basic-color-1']
  }
  return (
    <SafeAreaView style={style}>
      {props.children}
    </SafeAreaView>
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
    : (<SafeViewScreen {...props}>{props.children}</SafeViewScreen>)
  return props.background
    ? (
      <BackgroundImage background={props.background}>
        {screenSelection}
      </BackgroundImage>
      )
    : screenSelection
}
export default Screen
