import React, { ReactElement } from 'react'
import { Screen, Slider } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { Button, ButtonGroup, Icon, IconElement, ListItem, Text } from '@ui-kitten/components'
import { batch, useDispatch, useSelector } from 'react-redux'
import { ActionTypes as Categories } from '../../state/modules/categories'
import { ActionTypes as Quiz } from '../../state/modules/quiz'
import { ActionTypes as Preferences } from '../../state/modules/preferences'
import { RootState } from '../../state'
import { View } from 'react-native'
import styles from './styles'
import { useTranslation } from 'react-i18next'
import Spacing from '../../theme/spacing'
import { Answer } from '../../state/modules/quiz/Models'

export default function Settings (): ReactElement {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const preferences = useSelector((state: RootState) => {
    return state.Preferences
  })
  const isLoading = useSelector((state: RootState) => {
    return state.Categories.isPending
  })

  const chooseCategory = () => {
    dispatch({ type: Categories.GET_DATA })
    navigation.navigate('Main', {
      screen: 'Settings',
      params: {
        screen: 'Categories'
      }
    })
  }

  const beginQuiz = () => {
    batch(() => {
      const quizFilters = {
        amount: preferences.totalQuestions,
        type: preferences.answerType,
        category: preferences.category?.id
      }
      dispatch({ type: Quiz.START })
      dispatch({
        type: Quiz.GET_DATA,
        data: quizFilters
      })
    })
    navigation.navigate('Main', {
      screen: 'Trivia',
      params: { screen: 'Questions' }
    })
  }

  const onPressDifficulty = (value: 'easy' | 'medium' | 'hard') => {
    return () => dispatch({ type: Preferences.SET_ANY, difficulty: value })
  }

  const onPressType = (value: Answer) => {
    return () => dispatch({ type: Preferences.SET_ANY, answerType: value })
  }

  const { t } = useTranslation(['settings', 'common'])
  const textBegin = t('common:begin')
  const textHeading = t('heading')
  return (
    <Screen isLoading={isLoading} withAppBar withBack title='Settings' space={Spacing.LARGE}>
      <Text category='h5' style={styles.Header}>{textHeading}</Text>
      <View style={{ flexDirection: 'column', flex: 1, width: '100%', paddingTop: Spacing.TINY, paddingBottom: Spacing.MASSIVE }}>
        <ListItem
          title='Difficulty'
          accessoryRight={(props): IconElement => {
            return (
              <ButtonGroup status='basic' size='small'>
                <Button disabled={preferences.difficulty === 'easy'} onPress={onPressDifficulty('easy')}>Easy</Button>
                <Button disabled={preferences.difficulty === 'medium'} onPress={onPressDifficulty('medium')}>Medium</Button>
                <Button disabled={preferences.difficulty === 'hard'} onPress={onPressDifficulty('hard')}>Hard</Button>
              </ButtonGroup>
            )
          }}
        />
        <ListItem
          title='Type'
          accessoryRight={(props): IconElement => {
            return (
              <ButtonGroup status='basic' size='small'>
                <Button disabled={preferences.answerType === 'boolean'} onPress={onPressType('boolean')}>Boolean</Button>
                <Button disabled={preferences.answerType === 'multiple'} onPress={onPressType('multiple')}>Multiple Choice</Button>
              </ButtonGroup>
            )
          }}
        />
        <ListItem
          title='Total Questions'
          accessoryRight={(props): IconElement => {
            return (
              <>
                <Slider
                  value={preferences.totalQuestions}
                  minimumValue={1}
                  maximumValue={25}
                  onValueChange={(value) => dispatch({ type: Preferences.SET_ANY, totalQuestions: Math.floor(value) })}
                />
              </>
            )
          }}
        />
        <ListItem
          title='Category'
          accessoryRight={(props): IconElement => {
            return (
              <>
                <Text appearance='hint'>{preferences.category?.name ?? 'Any'}</Text>
                <Icon {...props} name='chevron-right-outline' />
              </>
            )
          }}
          onPress={chooseCategory}
        />
      </View>
      <Button size='giant' onPress={beginQuiz}>{textBegin}</Button>
    </Screen>
  )
}
