import messages_en from './translations/en.json'

const messages: Record<string, Record<string, string>> = {
  en: messages_en,
}

const getMessages = (language?: string): Record<string, string> => {
  // if (language == null || language === '') {
  //   const defaultLanguage = navigator.language.split(/[-_]/)[0]
  //   return messages[defaultLanguage]
  // } else {
  //   return messages[language]
  // }
  return messages.en
}

export default getMessages
