import { ActionTypes } from './index'

describe('Trivia State Module', () => {
  describe('ActionTypes', () => {
    it('has REST Action Types', () => {
      // Note: While we don't need to know the exact value of the GET_DATA key, it is helpful for debugging
      expect(ActionTypes).toHaveProperty('GET_DATA', 'TRIVIA__GET_DATA')
    })
  })
})
