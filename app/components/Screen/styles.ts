import { ViewStyle, StyleSheet } from 'react-native'
import { spacing } from '../../theme'

const SplashBase: ViewStyle = {
  paddingHorizontal: spacing.LARGER,
  paddingVertical: spacing.SMALL
}

const BackgroundImageFull: ViewStyle = {
  width: '100%',
  height: '100%'
}

const BackgroundOverlay: ViewStyle = {
  flex: 1,
  backgroundColor: 'rgba(45,45,45,0.45)'
}

export default StyleSheet.create({
  BackgroundOverlay: BackgroundOverlay,
  BackgroundFull: BackgroundImageFull,
  SplashBase: SplashBase
})
