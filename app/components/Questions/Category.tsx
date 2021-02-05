import { QuestionProps } from './props'
import React, { ReactElement } from 'react'
import { Text } from '@ui-kitten/components'
import { QuestionStyles } from './styles'

const Category = (props: QuestionProps): ReactElement => {
  return (
    <Text category='h5' style={QuestionStyles.category}>{props.item.category}</Text>
  )
}

export default Category
