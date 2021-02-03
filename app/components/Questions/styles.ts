import { StyleSheet } from 'react-native'
import { Spacing } from '../../theme'

export const QuestionStyles = StyleSheet.create({
  question: {
    paddingHorizontal: Spacing.SMALL,
    paddingVertical: Spacing.SMALL
  },
  category: {
    textAlign: 'center',
    paddingVertical: Spacing.LARGE
  },
  answers: {
    paddingVertical: Spacing.LARGE,
    paddingHorizontal: Spacing.SMALLER
  }
})

export const ProgressStyles = StyleSheet.create({
  container: {
    flex: 0,
    paddingVertical: Spacing.LARGE,
    alignItems: 'center'
  },
  text: {
    paddingVertical: Spacing.SMALL
  }
})
