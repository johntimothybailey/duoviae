import React, { PropsWithChildren, ReactElement } from 'react'
import * as eva from '@eva-design/eva'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

export const BootComponent = (props: PropsWithChildren<any>): ReactElement => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={eva.mapping} theme={eva.light}>
        <SafeAreaProvider initialSafeAreaInsets={{ top: 1, left: 2, right: 3, bottom: 4 }}>
          {props.children}
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  )
}
export default BootComponent
