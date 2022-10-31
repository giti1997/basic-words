import translations from './assets/translations.json'

const getMessages = (code?: string): Record<string, string> => {
  if (code && code in translations) {
    return translations[code as keyof typeof translations]
  } else {
    return translations.en
  }
}

export default getMessages
