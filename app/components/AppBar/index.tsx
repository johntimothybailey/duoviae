import React from 'react'
import {
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionElement
} from '@ui-kitten/components'
import { BackIcon, MoreVerticalIcon } from '../Icons'
import { HeaderProps } from './props'

export const Header = (props: HeaderProps): TopNavigationActionElement => {
  const { menu, backIcon, menuIcon, onBackPress, ...topNavigationProps } = props
  const [menuVisible, setMenuVisible] = React.useState(false)

  const onMenuSelect = (index: number) => {
    setMenuVisible(false)
  }

  const onMenuActionPress = () => {
    setMenuVisible(!menuVisible)
  }

  const renderMenuAnchorAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={props.menuIcon ?? MoreVerticalIcon}
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
      {menu()}
    </OverflowMenu>
  )

  const renderBackAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={props.backIcon ?? BackIcon}
      onPress={onBackPress}
    />
  )

  return (
    <TopNavigation
      {...topNavigationProps}
      alignment='center'
      accessoryLeft={onBackPress && renderBackAction}
      accessoryRight={menu && renderMenuAction}
    />
  )
}

export default Header
