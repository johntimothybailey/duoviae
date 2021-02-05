import { Answer } from '../../app/state/modules/answers/Models'

export const IsCorrectAnswer: Answer = {
  question: 'The video game &quot;Fuel&quot; has an open world that is 5,560 square miles?',
  selection: 'True',
  isCorrect: true,
  correctAnswer: 'True',
  datetime: ''
}

export const IsIncorrectAnswer: Answer = {
  question: 'The video game &quot;Fuel&quot; has an open world that is 5,560 square miles?',
  selection: 'False',
  isCorrect: false,
  correctAnswer: 'True',
  datetime: ''
}
