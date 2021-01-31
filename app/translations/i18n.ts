import { locale } from 'expo-localization'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    welcomeScreen: require('./welcomeScreen/english.json')
  }
}

i18n
  .use(initReactI18next)
  .init({
    ns: ['welcomeScreen'],
    resources,
    lng: locale,
    debug: __DEV__,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
