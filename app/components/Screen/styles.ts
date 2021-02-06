import { ViewStyle, StyleSheet } from 'react-native'
import { Spacing } from '../../theme'

const SplashBase: ViewStyle = {
  paddingHorizontal: Spacing.LARGER,
  paddingVertical: Spacing.SMALL
}

const RegularBase: ViewStyle = {
  paddingHorizontal: Spacing.MEDIUM,
  paddingVertical: Spacing.SMALL
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
  Splash: SplashBase,
  Regular: RegularBase
})
