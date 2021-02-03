import { ApiResponse, ApisauceInstance, create } from 'apisauce'
import API_CONFIG from './config'
import { Entity, GetQueryParams } from './types'
import { ApiConfig, HydrogenAPI, SagaSauceAPI } from '../IHydrogenAPI'
import { Question } from '../../../state/modules/trivia/Models'

const DATA_KEY = 'results'

/**
 * SagaSauce currently does not support an easy way to make this mapping
 * @param value
 */
const mapEntity = (value: Entity): Question => {
  return {
    category: value.category,
    type: value.type,
    difficulty: value.difficulty,
    question: value.question,
    possibleAnswers: [value.correct_answer].concat(value.incorrect_answers),
    correctAnswer: value.correct_answer,
    incorrectAnswers: value.incorrect_answers
  }
}

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
      return { ok: false, kind: 'bad-data', error: response.problem }
    }
    // transform the data into the format we are expecting
    try {
      const result: Question[] = response.data[DATA_KEY].map(mapEntity)
      return { ok: true, kind: 'ok', data: { data: result } }
    } catch (error) {
      return { ok: false, kind: 'bad-data', error }
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
