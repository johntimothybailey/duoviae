import { ScreenProps } from './props'
import React, { ReactElement } from 'react'
import { ImageBackground, View } from 'react-native'
import styles from './styles'

const BackgroundImage = (props: ScreenProps): ReactElement => {
  return (
    <ImageBackground source={props.background} style={styles.BackgroundFull} resizeMode='cover'>
      <View style={styles.BackgroundOverlay}>
        {props.children}
      </View>
    </ImageBackground>
  )
}

export default BackgroundImage
