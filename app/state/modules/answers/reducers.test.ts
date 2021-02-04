import { reducerClearCurrent, reducerCreateAnswer, State } from './index'
import { Question } from '../trivia/Models'
import { Answer } from './Models'
import { IsCorrectAnswer, IsIncorrectAnswer } from '../../../../test/fixtures/AnswersStateMachine'

describe('Answers State Module > Reducers', () => {
  describe('Clear Current', () => {
    it('sets "current" state to empty array', () => {
      const state: State = { current: [IsCorrectAnswer, IsIncorrectAnswer] }
      const result = reducerClearCurrent(state)
      expect(result.current).toHaveLength(0)
    })
  })
  describe('CreateAnswer', () => {
    it('adds the state list of answers', () => {
      const startState: State = { current: [] }
      const question: Question = {
        category: 'Science & Nature',
        type: 'boolean',
        difficulty: 'hard',
        question: 'The chemical element Lithium is named after the country of Lithuania.',
        possibleAnswers: ['True', 'False'],
        correctAnswer: 'False',
        incorrectAnswers: ['True']
      }
      const result = reducerCreateAnswer(startState, {
        question,
        selection: 'True'
      })
      expect(result.current).toHaveLength(1)
      const answer: Answer = result.current[0]
      expect(answer.isCorrect).toEqual(false)
    })

    it('sets isCorrect to true', () => {
      const startState: State = { current: [] }
      const question: Question = {
        category: 'Entertainment: Video Games',
        type: 'boolean',
        difficulty: 'hard',
        question: 'The video game &quot;Fuel&quot; has an open world that is 5,560 square miles?',
        possibleAnswers: ['True', 'False'],
        correctAnswer: 'True',
        incorrectAnswers: ['False']
      }
      const result = reducerCreateAnswer(startState, {
        question: question,
        selection: 'True'
      })
      expect(result.current).toHaveLength(1)
      const answer: Answer = result.current[0]
      expect(answer.isCorrect).toEqual(true)
    })

    it('sets isCorrect to false', () => {
      const startState: State = { current: [] }
      const question: Question = {
        category: 'Science & Nature',
        type: 'boolean',
        difficulty: 'hard',
        question: 'The chemical element Lithium is named after the country of Lithuania.',
        possibleAnswers: ['True', 'False'],
        correctAnswer: 'False',
        incorrectAnswers: ['True']
      }
      const result = reducerCreateAnswer(startState, {
        question: question,
        selection: 'True'
      })
      expect(result.current).toHaveLength(1)
      const answer: Answer = result.current[0]
      expect(answer.isCorrect).toEqual(false)
    })
  })
})
