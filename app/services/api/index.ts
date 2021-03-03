import * as Trivia from './trivia'
import * as Categories from './categories'
import { HydrogenAPI } from './IHydrogenAPI'

const DefaultConfig = {
  useFake: false
}

export class Api {
  trivia: HydrogenAPI
  categories: HydrogenAPI
  constructor (config = DefaultConfig) {
    this.trivia = config.useFake ? new Trivia.FakeApi() : new Trivia.Api()
    this.categories = config.useFake ? new Categories.FakeApi() : new Categories.Api()
  }

  async setup (): Promise<any> {
    await this.trivia.setup()
    await this.categories.setup()
  }
}
