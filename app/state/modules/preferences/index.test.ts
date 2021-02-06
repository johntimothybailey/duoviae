import { ActionTypes } from './index'

describe('Answers State Module', () => {
  describe('ActionTypes', () => {
    it('has non-REST Action Types', () => {
      expect(ActionTypes).toHaveProperty('SET_ANSWER_TYPE', 'SET_ANSWER_TYPE')
      expect(ActionTypes).toHaveProperty('SET_QUESTIONS_TOTAL', 'SET_QUESTIONS_TOTAL')
    })
    it('does not have REST Action Types', () => {
      expect(ActionTypes).not.toHaveProperty('GET_DATA')
      expect(ActionTypes).not.toHaveProperty('CREATE_DATA')
      expect(ActionTypes).not.toHaveProperty('UPDATE_DATA')
      expect(ActionTypes).not.toHaveProperty('DELETE_DATA')
    })
  })
})
