import { Api, mapEntity } from './api'
import MockAdapter from 'axios-mock-adapter'

describe('Services > Trivia API', () => {
  describe('mapEntity()', () => {
    it('orders boolean answers by False then True', () => {
      let result = mapEntity({
        category: 'Science: Mathematics',
        type: 'boolean',
        difficulty: 'hard',
        question: 'The binary number &quot;101001101&quot; is equivalent to the Decimal number &quot;334&quot;',
        correct_answer: 'False',
        incorrect_answers: ['True']
      })
      expect(result).toHaveProperty('possibleAnswers', ['False', 'True'])

      result = mapEntity({
        category: 'History',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Joseph Stalin&#039;s real name was Ioseb Bessarionis dze Dzugashvili.',
        correct_answer: 'True',
        incorrect_answers: [
          'False'
        ]
      })
      expect(result).toHaveProperty('possibleAnswers', ['False', 'True'])
    })
  })
  describe('getData()', () => {
    it('mutates response to State Model Question', async () => {
      const api = new Api()
      await api.setup()

      // Fake Response
      const data = {
        results: [
          {
            category: 'Science: Mathematics',
            type: 'boolean',
            difficulty: 'hard',
            question: 'The binary number &quot;101001101&quot; is equivalent to the Decimal number &quot;334&quot;',
            correct_answer: 'False',
            incorrect_answers: ['True']
          }
        ]
      }
      const mockedAxios = new MockAdapter(api.apisauce.axiosInstance)
      mockedAxios.onGet().reply(200, data)
      const result = await api.getData()
      expect(result).toHaveProperty('data.data')
      expect(result.data.data).toHaveLength(1)
      const question = result.data.data[0]
      expect(question).toHaveProperty('category', 'Science: Mathematics')
      expect(question).toHaveProperty('type', 'boolean')
      expect(question).toHaveProperty('difficulty', 'hard')
      expect(question).toHaveProperty('question', 'The binary number &quot;101001101&quot; is equivalent to the Decimal number &quot;334&quot;')
      expect(question).toHaveProperty('possibleAnswers', ['False', 'True'])
      expect(question).toHaveProperty('correctAnswer', 'False')
      expect(question).toHaveProperty('incorrectAnswers', ['True'])
    })
  })
  describe('createData', () => {
    it('is not implement', async () => {
      const api = new Api()
      await api.setup()
      await expect(api.createData()).rejects.toEqual(Error('Not implemented, because the HTTP API provided by https://opentdb.com/ does not support Create [POST]'))
    })
  })
  describe('updateData', () => {
    it('is not implement', async () => {
      const api = new Api()
      await api.setup()
      await expect(api.updateData()).rejects.toEqual(Error('Not implemented, because the HTTP API provided by https://opentdb.com/ does not support Update [PUT/PATCH]'))
    })
  })
  describe('deleteData', () => {
    it('is not implement', async () => {
      const api = new Api()
      await api.setup()
      await expect(api.deleteData()).rejects.toEqual(Error('Not implemented, because the HTTP API provided by https://opentdb.com/ does not support Delete [DELETE]'))
    })
  })
})
