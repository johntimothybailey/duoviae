import { ApisauceInstance } from 'apisauce'
import API_CONFIG from '../config'
import * as Types from '../types'
import { ApiConfig, HydrogenAPI, SagaSauceAPI } from '../../IHydrogenAPI'

export const DATA: Types.Entity[] = [{
  category: 'Entertainment: Video Games',
  type: 'boolean',
  difficulty: 'hard',
  question: 'Unturned originally started as a Roblox game.',
  correct_answer: 'True',
  incorrect_answers: ['False']
}, {
  category: 'Science: Mathematics',
  type: 'boolean',
  difficulty: 'hard',
  question: 'The binary number &quot;101001101&quot; is equivalent to the Decimal number &quot;334&quot;',
  correct_answer: 'False',
  incorrect_answers: ['True']
}, {
  category: 'General Knowledge',
  type: 'boolean',
  difficulty: 'hard',
  question: '&quot;Number 16 Bus Shelter&quot; was a child&#039;s name that was approved by the New Zealand government.',
  correct_answer: 'True',
  incorrect_answers: ['False']
}, {
  category: 'Politics',
  type: 'boolean',
  difficulty: 'hard',
  question: 'Nazi Germany surrendered on Harry Truman&#039;s birthday while he was president.',
  correct_answer: 'True',
  incorrect_answers: ['False']
}, {
  category: 'Entertainment: Television',
  type: 'boolean',
  difficulty: 'hard',
  question: 'The Klingon home planet is Qo&#039;noS.',
  correct_answer: 'True',
  incorrect_answers: ['False']
}, {
  category: 'Entertainment: Music',
  type: 'boolean',
  difficulty: 'hard',
  question: 'The song Scatman&#039;s World was released after Scatman (Ski-Ba-Bop-Ba-Dop-Bop).',
  correct_answer: 'True',
  incorrect_answers: ['False']
}, {
  category: 'Mythology',
  type: 'boolean',
  difficulty: 'hard',
  question: 'Janus was the Roman god of doorways and passageways.',
  correct_answer: 'True',
  incorrect_answers: ['False']
}, {
  category: 'Art',
  type: 'boolean',
  difficulty: 'hard',
  question: 'The Statue of Liberty&#039;s official name is &ldquo;Liberty Enlightening the World&rdquo;.',
  correct_answer: 'True',
  incorrect_answers: ['False']
}, {
  category: 'Entertainment: Video Games',
  type: 'boolean',
  difficulty: 'hard',
  question: 'The Paradox Interactive game &quot;Stellaris&quot; was released in 2016.',
  correct_answer: 'True',
  incorrect_answers: ['False']
}, {
  category: 'Entertainment: Musicals & Theatres',
  type: 'boolean',
  difficulty: 'hard',
  question: 'The protagonist&#039;s names in &#039;Who&#039;s Afraid of Virginia Woolf&#039;, George and Martha, were derived from George Washington and his wife.',
  correct_answer: 'True',
  incorrect_answers: ['False']
}]

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

  }

  /* ----- Existing SagaSauce API Structure. Very much a work in-progress ---- */
  getData = async (): Promise<any> => {
    // transform the data into the format we are expecting
    try {
      return { ok: true, kind: 'ok', data: { data: DATA } }
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
