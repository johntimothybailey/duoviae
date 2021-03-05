import React, { ReactElement } from 'react'
import { Screen } from '../../components'
import { ListItem } from '@ui-kitten/components'
import { useSelector } from 'react-redux'
import { RootState } from '../../state'

export default function Settings (): ReactElement {
  const preferences = useSelector((state: RootState) => {
    return state.Preferences
  })
  const isLoading = useSelector((state: RootState) => {
    return state.Categories.isPending
  })
  return (
    <Screen isLoading={isLoading} preset='splash' withAppBar withBack title='Categories'>
      <ListItem title='Category' description={preferences.category?.name ?? 'Any'} />
    </Screen>
  )
}
