import { ActionTypes } from './index'

describe('Categories State Module', () => {
  describe('ActionTypes', () => {
    it('has REST Action Types', () => {
      expect(ActionTypes).toHaveProperty('GET_DATA', 'CATEGORIES__GET_DATA')
      expect(ActionTypes).toHaveProperty('UPDATE_DATA', 'CATEGORIES__UPDATE_DATA')
      expect(ActionTypes).toHaveProperty('CREATE_DATA', 'CATEGORIES__CREATE_DATA')
      expect(ActionTypes).toHaveProperty('DELETE_DATA', 'CATEGORIES__DELETE_DATA')
    })
  })
})
