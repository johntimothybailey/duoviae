import { StyleSheet } from 'react-native'
import { Spacing } from '../../theme'

export const QuestionStyles = StyleSheet.create({
  question: {
    paddingHorizontal: Spacing.SMALL,
    paddingVertical: Spacing.SMALL
  },
  category: {
    textAlign: 'center',
    paddingHorizontal: Spacing.SMALLER,
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
    width: '100%',
    marginVertical: Spacing.LARGE,
    paddingTop: Spacing.TINY,
    paddingBottom: Spacing.SMALLER,
    alignItems: 'center'
  },
  text: {
    flex: 0,
    paddingBottom: Spacing.MEDIUM
  }
})
