import { ApiResponse, ApisauceInstance, create } from 'apisauce'
import API_CONFIG from './config'
import * as Types from './types'
import { Category, GetQueryParams } from './types'
import { ApiConfig, HydrogenAPI, SagaSauceAPI } from '../IHydrogenAPI'

const DATA_KEY = 'results'

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
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  async setup (): Promise<any> {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: 'application/json'
      }
    })
  }

  /* ----- Existing SagaSauce API Structure. Very much a work in-progress ---- */
  getData = async (data: GetQueryParams = {}): Promise<any> => {
    data = {
      amount: 10,
      type: 'boolean',
      difficulty: 'hard',
      ...data
    }
    const response: ApiResponse<any> = await this.apisauce.get('/', data && { ...data })
    // the typical ways to die when calling an api
    if (!response.ok) {
      return response.problem
    }

    // transform the data into the format we are expecting
    try {
      const result: Types.Entity[] = response.data[DATA_KEY]
      return { ok: true, kind: 'ok', data: { data: result } }
    } catch {
      return { ok: false, kind: 'bad-data' }
    }
  }

  createData = async (): Promise<any> => {
    throw new Error('Currently the HTTP API provided by https://opentdb.com/ does not support POST/Create')
  }

  updateData = async (): Promise<any> => {
    throw new Error('Currently the HTTP API provided by https://opentdb.com/ does not support PUT/PATCH/Update')
  }

  deleteData = async (): Promise<any> => {
    throw new Error('Currently the HTTP API provided by https://opentdb.com/ does not support DELETE/Delete')
  }
}
