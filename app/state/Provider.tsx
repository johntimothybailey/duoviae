import React, { ReactElement, useEffect, useState } from 'react'
import { Store } from 'redux'
import createStore from './createStore'
import { Provider as ReduxProvider } from 'react-redux'
import { Screen } from '../components'
import { ActivityIndicator } from 'react-native'
import { riverBackground } from '../../assets/images'
import { ProviderProps } from './props'

// TODO: https://docs.expo.io/versions/latest/sdk/app-loading/
const Loading = (): ReactElement => {
  return (
    <Screen preset='splash' background={riverBackground}>
      <ActivityIndicator size='large' color='#ffffff' />
    </Screen>
  )
}

/**
 * Following the best practice of only having one instance of Redux / one State Machine, I'm making it easy to simply use this Provider
 * @param props
 */
const Provider = (props: ProviderProps): ReactElement => {
  const [store, setRootStore] = useState<Store | undefined>(undefined)

  useEffect(() => {
    // eslint-disable-next-line no-void
    void (async () => {
      setRootStore(await createStore(props.inspection))
    })()
  }, [])

  if (!store) {
    return (
      <Loading />
    )
  }
  return (
    <ReduxProvider store={store}>
      {props.children}
    </ReduxProvider>
  )
}

export default Provider
