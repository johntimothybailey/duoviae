import { locale } from 'expo-localization'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    common: require('./common/english.json'),
    settings: require('./settings/english.json'),
    welcomeScreen: require('./welcomeScreen/english.json')
  }
}

// eslint-disable-next-line no-void
void i18n
  .use(initReactI18next)
  .init({
    ns: ['welcomeScreen', 'settings', 'common'],
    resources,
    lng: locale,
    debug: __DEV__,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
