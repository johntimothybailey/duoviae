import React from 'react'
import {
  IndexPath,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionElement
} from '@ui-kitten/components'
import { isFunction } from 'lodash'
import { BackIcon, MoreVerticalIcon } from '../Icons'
import { AppBarProps } from './props'
import { ViewStyle } from 'react-native'
import { TransparentBackground } from './styles'

/**
 * @cite
 * @param props
 * @constructor
 */
export const AppBar = (props: AppBarProps): TopNavigationActionElement => {
  const { menu, backIcon, menuIcon, onBackPress, ...topNavigationProps } = props
  const [menuVisible, setMenuVisible] = React.useState(false)

  const onMenuSelect = (index: IndexPath) => {
    setMenuVisible(false)
  }

  const onMenuActionPress = () => {
    setMenuVisible(!menuVisible)
  }

  const renderMenuAnchorAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={props.menuIcon ? MoreVerticalIcon : undefined}
      onPress={onMenuActionPress}
    />
  )

  const renderMenuAction = (): TopNavigationActionElement => (
    <OverflowMenu
      visible={menuVisible}
      anchor={renderMenuAnchorAction}
      placement='bottom end'
      onSelect={onMenuSelect}
      onBackdropPress={onMenuActionPress}
    >
      {isFunction(menu) ? menu() : undefined}
    </OverflowMenu>
  )

  const renderBackAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={props.backIcon ?? BackIcon}
      onPress={onBackPress}
    />
  )

  const style: ViewStyle = props.transparent ? TransparentBackground : {}

  return (
    <TopNavigation
      {...topNavigationProps}
      style={{ ...style, ...props.style as {} }}
      alignment='center'
      accessoryLeft={onBackPress && renderBackAction}
      accessoryRight={menu && renderMenuAction}
    />
  )
}

export default AppBar
