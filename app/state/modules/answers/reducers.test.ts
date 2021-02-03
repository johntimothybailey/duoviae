import { reducerCreateAnswer, State } from './index'
import { Question } from '../trivia/Models'
import { Answer } from './Models'

describe('Answers State Module > Reducers', () => {
  describe('reducerCreateAnswer', () => {
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
      const changedState = reducerCreateAnswer(startState, {
        question,
        selection: 'True'
      })
      expect(changedState.current).toHaveLength(1)
      const answer: Answer = changedState.current[0]
      expect(answer.isCorrect).toEqual(false)
    })
  })
})
