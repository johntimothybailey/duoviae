import { IconProps, TopNavigationProps } from '@ui-kitten/components'
import React from 'react'
import { ImageProps } from 'react-native'

export interface AppBarProps extends TopNavigationProps {
  menu?: () => React.ReactElement
  backIcon?: (props: IconProps) => React.ReactElement<ImageProps>
  menuIcon?: (props: IconProps) => React.ReactElement<ImageProps>
  onBackPress?: () => void
  transparent?: boolean
}
