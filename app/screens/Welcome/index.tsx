import React, { ReactElement } from 'react'
import { Container, Screen } from '../../components'
import { Button, Text } from '@ui-kitten/components'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { riverBackground } from '../../../assets/images'

const Welcome = (): ReactElement => {
  // State
  // Actions
  const navigation = useNavigation()
  const beginQuiz = () => {
    navigation.navigate('Main', {
      screen: 'Settings'
    })
  }
  // Translations
  const { t } = useTranslation(['welcomeScreen', 'common'])
  const textTitle = t('title')
  const textIntro = t('intro')
  const textBegin = t('next')
  const textGoal = t('goal')
  return (
    <Screen preset='splash' background={riverBackground}>
      <Text category='h1' style={styles.Header}>{textTitle}</Text>
      <Container style={{ flex: 0 }}>
        <Text category='h3' style={styles.IntroText}>{textIntro}</Text>
        <Text>{textGoal}</Text>
      </Container>
      <Button size='giant' onPress={beginQuiz}>{textBegin}</Button>
    </Screen>
  )
}

export default Welcome
