import { Question } from '../../app/state/modules/quiz/Models'
export const FalseBoolean: Question = {
  category: 'Science & Nature',
  type: 'boolean',
  difficulty: 'hard',
  question: 'The chemical element Lithium is named after the country of Lithuania.',
  possibleAnswers: ['True', 'False'],
  correctAnswer: 'False',
  incorrectAnswers: ['True']
}
export const TrueBoolean: Question = {
  category: 'Entertainment: Video Games',
  type: 'boolean',
  difficulty: 'hard',
  question: 'The video game &quot;Fuel&quot; has an open world that is 5,560 square miles?',
  possibleAnswers: ['True', 'False'],
  correctAnswer: 'True',
  incorrectAnswers: ['False']
}
export const LIST: Question[] = [
  TrueBoolean,
  FalseBoolean
]
