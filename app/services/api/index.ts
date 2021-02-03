import * as Trivia from './trivia'
import { HydrogenAPI } from './IHydrogenAPI'

const DefaultConfig = {
  useFake: false
}

export class Api {
  trivia: HydrogenAPI
  constructor (config = DefaultConfig) {
    this.trivia = config.useFake ? new Trivia.FakeApi() : new Trivia.Api()
  }

  async setup (): Promise<any> {
    await this.trivia.setup()
  }
}
