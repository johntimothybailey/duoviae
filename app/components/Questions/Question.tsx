import { QuestionProps } from './props'
import React, { ReactElement, useEffect, useState } from 'react'
import { Button, Card, Layout, Radio, RadioGroup, Text } from '@ui-kitten/components'
import { QuestionStyles } from './styles'
import V from 'voca'
import Category from './Category'

const Question = (props: QuestionProps): ReactElement => {
  const [selected, setSelect] = useState(undefined)
  const { possibleAnswers } = props.item
  useEffect(() => {
    setSelect(undefined)
  }, [props.item])
  return (
    <Card
      style={{ width: '100%' }}
      header={() => <Category {...props} />}
      footer={() => <Button accessibilityHint='Continue' disabled={selected === undefined} onPress={() => props.onSelect(possibleAnswers[selected])}>{props.continueLabel}</Button>}
    >
      <Layout level='4' style={{ ...QuestionStyles.question, width: '100%' }}>
        <Text category='p1' style={QuestionStyles.question}>{V.unescapeHtml(props.item.question)}</Text>
      </Layout>
      <RadioGroup
        style={QuestionStyles.answers}
        selectedIndex={selected}
        onChange={setSelect}
      >
        {possibleAnswers.map((value: string, index: number) => {
          return (<Radio key={index}>{value}</Radio>)
        })}
      </RadioGroup>
    </Card>
  )
}

export default Question
