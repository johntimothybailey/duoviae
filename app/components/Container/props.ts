import * as React from 'react'
import { ViewStyle } from 'react-native'

export interface ContainerProps {
  children?: React.ReactNode | React.ReactNode[]

  style?: ViewStyle | ViewStyle[]

  preset?: 'form'

  width?: number | string

  height?: number | string

  ['fit-items']?: boolean

  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'

  row?: boolean

  reverse?: boolean

  space?: 'evenly' | 'between' | 'around'

  backgroundColor?: boolean

  /**
   * TODO We may expand into having 'strong' | 'regular' etc...
   */
  outline?: boolean
}
