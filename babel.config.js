module.exports = function (api) {
  api.cache(false)
  return {
    extends: [
      'plugin:redux-saga/recommended'
    ],
    presets: [
      'babel-preset-expo',
      '@babel/typescript'
    ],
    plugins: [
      'redux-saga',
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true
      }]
    ]
  }
}
