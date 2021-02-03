/**
 * While there is a bit of duplication at this time with the Services/API types, often these don't stay the same in large scale applications and require mapping
 */
import { Question as QuestionModel } from '../../state/modules/trivia/Models'

export interface QuestionsProps {
  list: QuestionModel[]
  saveAnswer: any
}

export interface QuestionProps {
  item: QuestionModel
  index: number
  onSelect: any
}
