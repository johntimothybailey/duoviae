import React, { ReactElement } from 'react'
import { Screen } from '../../components'
import { Spinner, Text } from '@ui-kitten/components'
import { useSelector } from 'react-redux'
import { RootState } from '../../state'

export default function Dashboard (): ReactElement {
  const list = useSelector((state: RootState) => {
    return state.Trivia.data
  })
  const isLoading = useSelector((state: RootState) => {
    return state.Trivia.isPending
  })
  return (
    <Screen>
      {isLoading ? <Spinner size='giant' /> : <Text category='h1'>Questions Coming soon! {list.length}</Text>}
    </Screen>
  )
}
