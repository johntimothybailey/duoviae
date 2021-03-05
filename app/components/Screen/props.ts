import * as React from 'react'

/**
 * Please take note that `style` is not a property. I discourage using style directly in preference of using `preset`
 */
export interface ScreenProps {
  children: React.ReactNode | React.ReactNode[]
  preset?: 'splash' | 'regular'
  withBack?: boolean // Really, we're talking about this becoming a setting via Navigator or preset
  background?: any
  withAppBar?: boolean
  title?: string
  subtitle?: string
  isLoading?: boolean
}
