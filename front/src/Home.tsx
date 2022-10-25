import React, { FC, useCallback, useEffect, useState } from 'react'

import Footer from './Footer'
import Title from './Title'
import WordsList from './WordsList'
import languages from './assets/languages.json'

const getWords = (language: string): Promise<string[]> => {
  const words =
    language == 'English'
      ? ['Hello', 'Sorry', 'Please']
      : ['Bonjour', 'Pardon', "S'il vous plaît"]

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(words)
    }, 1000)
  })
}

const getAudios = (language: string): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['', '', ''])
    }, 2000)
  })
}

const Home: FC = () => {
  const [sourceLanguage, setSourceLanguage] = useState(languages[0])
  const [targetLanguage, setTargetLanguage] = useState(languages[1])
  const [sourceWords, setSourceWords] = useState<string[] | undefined>(
    undefined
  )
  const [targetWords, setTargetWords] = useState<string[] | undefined>(
    undefined
  )
  const [audios, setAudios] = useState<string[] | undefined>(undefined)

  useEffect(() => {
    getWords(sourceLanguage).then((words) => {
      setSourceWords(words)
    })
    getWords(targetLanguage).then((words) => {
      setTargetWords(words)
    })
    getAudios(targetLanguage).then((audios) => setAudios(audios))
  }, [])

  const setSourceLanguageWithEffect = (language: string) => {
    setSourceLanguage(language)
    setSourceWords(undefined)
    getWords(language).then((words) => {
      setSourceWords(words)
    })
  }
  const setTargetLanguageWithEffect = (language: string) => {
    setTargetLanguage(language)
    setTargetWords(undefined)
    setAudios(undefined)
    getWords(language).then((words) => {
      setTargetWords(words)
    })
    getAudios(language).then((audios) => setAudios(audios))
  }

  return (
    <main>
      <Title
        sourceLanguage={sourceLanguage}
        targetLanguage={targetLanguage}
        setSourceLanguage={setSourceLanguageWithEffect}
        setTargetLanguage={setTargetLanguageWithEffect}
        languages={languages}
      />
      <WordsList
        sourceWords={sourceWords}
        targetWords={targetWords}
        audios={audios}
      />
      <Footer />
    </main>
  )
}

export default Home
