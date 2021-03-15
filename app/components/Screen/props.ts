import * as React from 'react'
import Spacing from '../../theme/spacing'

/**
 * Please take note that `style` is not a property. I discourage using style directly in preference of using `preset`
 */
export interface ScreenProps {
  children: React.ReactNode | React.ReactNode[]
  preset?: 'splash' | 'regular' | 'list'
  withBack?: boolean // Really, we're talking about this becoming a setting via Navigator or preset
  background?: any
  withAppBar?: boolean
  title?: string
  subtitle?: string
  isLoading?: boolean
  space?: 'evenly' | 'between' | 'around' | Spacing
}
