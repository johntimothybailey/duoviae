import { Api } from './api'
import MockAdapter from 'axios-mock-adapter'

describe('Services > Categories API', () => {
  describe('getData()', () => {
    it('mutates response to State Model Question', async () => {
      const api = new Api()
      await api.setup()

      // Fake Response
      const data = {
        trivia_categories: [
          {
            id: 19,
            name: 'Science: Mathematics'
          }
        ]
      }
      const mockedAxios = new MockAdapter(api.apisauce.axiosInstance)
      mockedAxios.onGet().reply(200, data)
      const result = await api.getData()
      expect(result).toHaveProperty('data.data')
      expect(result.data.data).toHaveLength(1)
      const question = result.data.data[0]
      expect(question).toHaveProperty('name', 'Science: Mathematics')
      expect(question).toHaveProperty('id', 19)
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
