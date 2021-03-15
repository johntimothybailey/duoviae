import { ApiConfig } from '../IHydrogenAPI'

// Use this import if you want to use "env.js" file
// const { API_URL } = require("@env")
// Or just specify it directly like this:
const API_URL = 'https://opentdb.com/api_category.php'

/**
 * The default configuration
 */
const CONFIG: ApiConfig = {
  url: API_URL,
  timeout: 10000
}
export default CONFIG
