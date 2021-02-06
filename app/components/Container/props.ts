import * as React from 'react'
import { ViewStyle } from 'react-native'
import Spacing from '../../theme/spacing'

export interface ContainerProps {
  /**
   * TODO: Temporary name and usage!
   */
  flex?: number

  children?: React.ReactNode | React.ReactNode[]

  style?: ViewStyle | ViewStyle[]

  preset?: 'form'

  width?: number | string

  height?: number | string

  ['fit-items']?: boolean

  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'

  row?: boolean

  reverse?: boolean

  space?: 'evenly' | 'between' | 'around' | Spacing

  backgroundColor?: boolean

  /**
   * TODO We may expand into having 'strong' | 'regular' etc...
   */
  outline?: boolean
}
