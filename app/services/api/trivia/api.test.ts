import { Api } from './api'
import MockAdapter from 'axios-mock-adapter'

describe('Services > Trivia API', () => {
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
})
