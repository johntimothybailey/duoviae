import { Spacing } from '../../theme'
import { FlexStyle, ViewStyle } from 'react-native'

const Main: FlexStyle = {
  flex: 0,
  flexDirection: 'column'
}

const Items: ViewStyle = {
  paddingTop: Spacing.SMALL,
  paddingBottom: Spacing.LARGE
}

export default {
  Main,
  Items
}
