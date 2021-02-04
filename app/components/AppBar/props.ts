import { StyleType, TopNavigationProps } from '@ui-kitten/components'
import React from 'react'
import { ImageProps } from 'react-native'

export interface AppBarProps extends TopNavigationProps {
  menu?: () => React.ReactElement
  backIcon?: (style: StyleType) => React.ReactElement<ImageProps>
  menuIcon?: (style: StyleType) => React.ReactElement<ImageProps>
  onBackPress?: () => void
  useSafeTop?: boolean // TODO: implement
  transparent?: boolean // TODO: implement
}
