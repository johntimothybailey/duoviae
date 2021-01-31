import * as React from 'react'

/**
 * Please take note that `style` is not a property. I discourage using style directly in preference of using `preset`
 */
export interface ScreenProps {
  children: React.ReactNode | React.ReactNode[]
  preset?: 'splash' | 'regular'
  background?: any
}
