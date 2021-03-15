import { TextStyle, ViewStyle } from 'react-native'
import Spacing from '../../theme/spacing'

const Overview: ViewStyle = {
  width: '90%',
  marginBottom: Spacing.LARGE
}

const OverviewContent: ViewStyle = {
  alignSelf: 'center'
}

const CardTitle: TextStyle = {
  textAlign: 'center',
  padding: Spacing.MEDIUM
}

const Details: ViewStyle = {
  width: '90%',
  marginBottom: Spacing.LARGE
}

const Buttons: ViewStyle = {
  marginBottom: Spacing.LARGER
}

export default {
  CardTitle,
  Overview,
  OverviewContent,
  Details,
  Buttons
}
