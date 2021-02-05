import { ActionTypes, reducerNextStep, State } from './index'

describe('Trivia State Module', () => {
  describe('ActionTypes', () => {
    it('non-REST Action Types', () => {
      expect(ActionTypes).toHaveProperty('NEXT_STEP')
    })
    it('has REST Action Types', () => {
      expect(ActionTypes).toHaveProperty('GET_DATA', 'TRIVIA__GET_DATA')
      expect(ActionTypes).toHaveProperty('UPDATE_DATA', 'TRIVIA__UPDATE_DATA')
      expect(ActionTypes).toHaveProperty('CREATE_DATA', 'TRIVIA__CREATE_DATA')
      expect(ActionTypes).toHaveProperty('DELETE_DATA', 'TRIVIA__DELETE_DATA')
    })
  })
  describe('Reducer Handlers', () => {
    describe('nextStep', () => {
      const state: State = { data: [], errors: null, isPending: false, step: 2 }
      const result = reducerNextStep(state)
      expect(result).toHaveProperty('step', 3)
    })
  })
})
