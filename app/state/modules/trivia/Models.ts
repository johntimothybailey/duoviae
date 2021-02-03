export type Answer = 'boolean' | 'multiple'

export type Difficulty = 'easy' | 'medium' |'hard'

export interface Question {
  category: string
  type: Answer
  difficulty: Difficulty
  question: string
  possibleAnswers: string[]
  correctAnswer: string
  incorrectAnswers: string[]
}
