import React from 'react'
import Props from './props'
import Slider from '@react-native-community/slider'
import { Text, useTheme } from '@ui-kitten/components'
import styles from './styles'

export default (props: Props): React.ReactElement => {
  const theme = useTheme()
  let style = styles.SliderDefault
  if (props.style) {
    // @ts-expect-error
    style = { ...style, ...props.style }
  }
  return (
    <>
      {/* @ts-expect-error */}
      <Slider
        style={style}
        minimumTrackTintColor={theme['color-primary-500']}
        {...props}
      />
      <Text style={styles.Value}>{props.value}</Text>
    </>
  )
}
