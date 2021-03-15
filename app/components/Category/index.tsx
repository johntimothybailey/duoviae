import React from 'react'
import { Props } from './props'
import { ListItem, Icon } from '@ui-kitten/components'
import { ImageProps, ViewProps } from 'react-native'
import { Category as CategoryModel } from '../../state/modules/categories/Models'

/**
 * TODO: Should this be in the Reducers?
 * @param item
 */
export const getIconName = (item: CategoryModel): string => {
  switch (item.id) {
    case 10:
      return 'book-outline'
    case 11:
      return 'film-outline'
    case 12:
      return 'headphones-outline'
    case 17:
    case 18:
    case 19:
      return 'layers-outline'
    case 14:
      return 'tv-outline'
    case 22:
      return 'globe-2-outline'
    case 24:
      return 'people-outline'
    case 25:
      return 'color-palette-outline'
    default:
      return 'bulb-outline'
  }
}

export const Category = (props: Props): React.ReactElement => {
  const item: CategoryModel = props.item
  return (
    <ListItem
      onPress={() => props.onPress(item)}
      title={item.name}
      accessoryLeft={(props: Partial<ImageProps> | undefined) => <Icon {...props} name={getIconName(item)} />}
      accessoryRight={(props: ViewProps | undefined) => <Icon {...props} name='chevron-right-outline' />}
    />
  )
}
