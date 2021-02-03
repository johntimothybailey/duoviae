import React, { ReactElement } from 'react'
import { ViewStyle, View } from 'react-native'
import { ContainerProps } from './props'
import { Spacing } from '../../theme'
import R from 'ramda'

export const makeStyles = (props: ContainerProps): ViewStyle => {
  const styles: ViewStyle = {
    flex: 1,
    flexDirection: R.isEmpty(props.row) ? 'row' : 'column',
    justifyContent: 'center',
    alignContent: R.isEmpty(props['fit-items']) ? 'stretch' : 'center',
    alignItems: R.isEmpty(props['fit-items']) ? 'stretch' : 'center',
    flexWrap: props.wrap ?? 'wrap'
  }
  if (props.reverse) {
    if (props.row) {
      styles.flexDirection = 'row-reverse'
    } else {
      styles.flexDirection = 'column-reverse'
    }
  }
  if (props.space) {
    if (props.space === 'between') {
      styles.justifyContent = 'space-between'
    } else if (props.space === 'around') {
      styles.justifyContent = 'space-around'
    } else if (props.space === 'evenly') {
      styles.justifyContent = 'space-evenly'
    }
  }
  if (props.width) {
    styles.width = props.width
  }
  if (props.height) {
    styles.height = props.height
  }
  // TODO: Provide ability to have an Outlined container with options of size / appearance / purpose
  // TODO: Border color should be received from theme or directly setting it leaving it up to the higher component (e.g. Screen)
  if (props.outline) {
    styles.borderWidth = 1
    styles.borderColor = '#000'
  }
  // Apply presets
  if (props.preset === 'form') {
    styles.flexDirection = 'column'
    styles.alignContent = 'flex-start'
    styles.alignItems = 'flex-start'
  }
  return {
    ...styles,
    ...props.style
  }
}

/**
 * TODO: Memoize / Optimize
 * @param props
 * @constructor
 */
export default function Container (props: ContainerProps): ReactElement {
  const renderChildren = () => {
    const childStyles: ViewStyle = {}
    if (props['fit-items']) {
      childStyles.flex = 1
    }
    if (props.preset === 'form') {
      childStyles.marginVertical = Spacing.SMALLER
      childStyles.width = '100%'
    }
    if (R.is(Number, props.space)) {
      if (props.row) {
        childStyles.paddingHorizontal = props.space
      } else {
        childStyles.paddingVertical = props.space
      }
    }
    if (R.isNil(props.children)) {
      return null
    }
    let children = props.children
    if (!Array.isArray(props.children)) {
      children = [props.children]
    }
    const validChildren = R.filter((child: any) => {
      return child && React.isValidElement(child)
    }, children as any[])
    return React.Children.map(validChildren as ReactElement[], (child: ReactElement) => {
      return (React.cloneElement(child, {
        ...child.props,
        style: {
          ...child.props.style,
          ...childStyles
        }
      }))
    })
  }
  return (
    <View style={makeStyles(props)}>{renderChildren()}</View>
  )
}
