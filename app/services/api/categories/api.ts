import { ApiResponse, ApisauceInstance, create } from 'apisauce'
import API_CONFIG from './config'
import { ApiConfig, HydrogenAPI, SagaSauceAPI } from '../IHydrogenAPI'
import { Category } from '../../../state/modules/categories/Models'

const DATA_KEY = 'trivia_categories'

/**
 * Manages all requests to the API.
 * TODO Generator for APIs. We may need to connect to different APIs
 */
export class Api implements SagaSauceAPI, HydrogenAPI {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor (config: ApiConfig = API_CONFIG) {
    this.config = config
  }

  /**
   * Setup the API
   */
  async setup (): Promise<any> {
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: 'application/json'
      }
    })
  }

  /* ----- Existing SagaSauce API Structure. Very much a work in-progress ---- */
  getData = async (): Promise<any> => {
    const response: ApiResponse<any> = await this.apisauce.get('/')
    // the typical ways to die when calling an api
    if (!response.ok) {
      return { ok: false, kind: 'bad-data', error: response.problem }
    }
    // transform the data into the format we are expecting
    try {
      const result: Category[] = response.data[DATA_KEY]
      return { ok: true, kind: 'ok', data: { data: result } }
    } catch (error) {
      return { ok: false, kind: 'bad-data', error }
    }
  }

  createData = async (): Promise<any> => {
    throw new Error('Not implemented, because the HTTP API provided by https://opentdb.com/ does not support Create [POST]')
  }

  updateData = async (): Promise<any> => {
    throw new Error('Not implemented, because the HTTP API provided by https://opentdb.com/ does not support Update [PUT/PATCH]')
  }

  deleteData = async (): Promise<any> => {
    throw new Error('Not implemented, because the HTTP API provided by https://opentdb.com/ does not support Delete [DELETE]')
  }
}
