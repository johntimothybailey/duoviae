import { ActionTypes } from './index'

describe('Answers State Module', () => {
  describe('ActionTypes', () => {
    it('has non-REST Action Types', () => {
      expect(ActionTypes).toHaveProperty('CREATE_ANSWER', 'CREATE_ANSWER')
      expect(ActionTypes).toHaveProperty('CLEAR_CURRENT', 'CLEAR_CURRENT')
    })
    it('does not have REST Action Types', () => {
      expect(ActionTypes).not.toHaveProperty('GET_DATA')
      expect(ActionTypes).not.toHaveProperty('CREATE_DATA')
      expect(ActionTypes).not.toHaveProperty('UPDATE_DATA')
      expect(ActionTypes).not.toHaveProperty('DELETE_DATA')
    })
  })
})
