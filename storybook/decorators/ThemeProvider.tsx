import React, { ReactElement } from 'react'
import { ApplicationProvider as ThemeProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import * as eva from '@eva-design/eva'
import { Palette } from '../../app/theme/config'

export default (Story: any): ReactElement => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ThemeProvider {...eva} theme={{ ...eva.dark, ...Palette }}>
      {Story()}
    </ThemeProvider>
  </>
)
