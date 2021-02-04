import React, { PropsWithChildren } from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

export const BootComponent = (props: PropsWithChildren<any>) => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={eva.mapping} theme={eva.light}>
        {props.children}
      </ApplicationProvider>
    </>
  )
}
export default BootComponent
