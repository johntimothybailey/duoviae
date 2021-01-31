import React, { ReactElement } from 'react'
import { Container, Screen } from '../../components'
import { Button, Text } from '@ui-kitten/components'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { riverBackground } from '../../../assets/images'

export default function Dashboard (): ReactElement {
  const navigation = useNavigation()
  const { t } = useTranslation('welcomeScreen')
  const textTitle = t('title')
  const textIntro = t('boolean', { numberOfQuestions: 10 })
  const textBegin = t('begin')
  const textGoal = t('goal')
  return (
    <Screen preset='splash' background={riverBackground}>
      <Text category='h1'>{textTitle}</Text>
      <Container style={{ flex: 0 }}>
        <Text category='h3' style={styles.IntroText}>{textIntro}</Text>
        <Text>{textGoal}</Text>
      </Container>
      <Button size='giant' onPress={() => navigation.navigate('Questions')}>{textBegin}</Button>
    </Screen>
  )
}
