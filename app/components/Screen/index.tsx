import React, { ReactElement } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Container from '../Container'
import { ScreenProps } from './props'
import styles from './styles'
import { ImageBackground, View } from 'react-native'
import { useTheme } from '@ui-kitten/components'

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
  return (
    <Container space='around' style={styles.SplashBase}>
      {props.children}
    </Container>
  )
}

const SafeViewScreen = (props: ScreenProps): ReactElement => {
  const theme = useTheme()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme['background-basic-color-1'] }}>
      <Container>
        {props.children}
      </Container>
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
