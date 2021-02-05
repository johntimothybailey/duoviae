import React, { ReactElement } from 'react'
import { AnswersItemProp } from './props'
import { Icon, IconProps, ListItem } from '@ui-kitten/components'
import V from 'voca'
import { Answer } from '../../state/modules/answers/Models'
import { StyleProp, ViewProps } from 'react-native'

const getIconProps = (item: Answer, props: ViewProps | undefined): IconProps => {
  const styleProps: StyleProp<any> = props?.style ?? {}
  if (item.isCorrect) {
    return {
      ...props,
      name: 'checkmark-outline',
      style: {
        ...styleProps,
        tintColor: 'green'
      }
    }
  } else {
    return {
      ...props,
      name: 'close-outline',
      style: {
        ...styleProps,
        tintColor: 'red'
      }
    }
  }
}

const Component = (props: AnswersItemProp): ReactElement => {
  const item: Answer = props.item
  return (
    <ListItem
      title={V.unescapeHtml(item.question)}
      description={`You answered '${item.selection}'`}
      accessoryRight={(props) => {
        const iconProps: IconProps = {
          ...getIconProps(item, props)
        }
        return <Icon {...iconProps} />
      }}
    />
  )
}

export default Component
