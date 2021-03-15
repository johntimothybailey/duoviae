import React, { ReactElement } from 'react'
import { Screen } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { List, Text } from '@ui-kitten/components'
import { useSelector } from 'react-redux'
import { RootState } from '../../state'
import { Category } from '../../components/Category'
import { useTranslation } from 'react-i18next'

export default function Settings (): ReactElement {
  const navigation = useNavigation()
  const isLoading = useSelector((state: RootState) => {
    return state.Categories.isPending
  })
  const categories = useSelector((state: RootState) => {
    return state.Categories.data
  })
  const onSelect = (value: any) => {
    navigation.goBack()
  }
  const { t } = useTranslation(['common'])
  const textCategories = t('categories')

  return (
    <Screen preset='list' isLoading={isLoading} withAppBar withBack title={textCategories}>
      <Text appearance='hint'>Currently disabled due to a bug with the API</Text>
      <List
        style={{ width: '100%' }}
        renderItem={({ item }) => <Category key={item.id} item={item} onPress={onSelect} />}
        data={categories}
      />
    </Screen>
  )
}
