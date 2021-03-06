import { ApisauceInstance } from 'apisauce'
import API_CONFIG from '../config'
import * as Types from '../types'
import { ApiConfig, HydrogenAPI, SagaSauceAPI } from '../../IHydrogenAPI'

export const DATA: Types.Entity[] = [{
  id: 9,
  name: 'General Knowledge'
},
{
  id: 10,
  name: 'Entertainment: Books'
},
{
  id: 11,
  name: 'Entertainment: Film'
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
