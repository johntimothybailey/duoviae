/* -------- RESPONSE TYPES --------- */
export type AnswerType = 'boolean' | 'multiple'

export type Difficulty = 'easy' | 'medium' |'hard'

export enum Category {
  RANDOM,
  GENERAL_KNOWLEDGE = 9,
  SCIENCE_COMPUTERS = 18
}

export interface Boolean {
  category: string
  type: 'boolean'
  difficulty: Difficulty
  question: string
  correct_answer: 'True' | 'False'
  incorrect_answers: string[]
}

export interface Entity {
  category: string
  type: AnswerType
  difficulty: Difficulty
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

/* -------- REQUEST TYPES --------- */
export interface GetQueryParams {
  amount?: number
  difficulty?: 'easy' | 'medium' | 'hard'
  type?: AnswerType
  category?: Category
}
