import React, { FC, useState } from 'react'

import Footer from './Footer'
import Title from './Title'
import WordsList from './WordsList'
import { WordTranslation } from './types'

const getWords = (language: string): string[] => {
  if (language == 'English') {
    return ['Hello', 'Sorry', 'Please']
  } else {
    return ['Bonjour', 'Pardon', "S'il vous plaît"]
  }
}

const getDefaultWords = (
  sourceLanguage: string,
  targetLanguage: string
): WordTranslation[] => {
  const sourceWords = getWords(sourceLanguage)
  const targetWords = getWords(targetLanguage)

  const words: WordTranslation[] = []
  for (let i = 0; i < sourceWords.length; i++) {
    words.push({ source: sourceWords[i], target: targetWords[i] })
  }
  return words
}

const Home: FC = () => {
  const languages = ['English', 'Français']
  const [sourceLanguage, setSourceLanguage] = useState(languages[0])
  const [targetLanguage, setTargetLanguage] = useState(languages[1])
  const [words, setWords] = useState<WordTranslation[]>(
    getDefaultWords(sourceLanguage, targetLanguage)
  )

  const setSourceLanguageWithEffect = (language: string) => {
    setSourceLanguage(language)
    const newSourceWords = getWords(language)
    console.log(newSourceWords, words)
    setWords((words) => {
      return words.map(({ target }, i) => ({
        source: newSourceWords[i],
        target: target,
      }))
    })
  }
  const setTargetLanguageWithEffect = (language: string) => {
    setTargetLanguage(language)
    const newTargetWords = getWords(language)
    setWords((words) => {
      return words.map(({ source }, i) => ({
        source: source,
        target: newTargetWords[i],
      }))
    })
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
      <WordsList words={words} />
      <Footer />
    </main>
  )
}

export default Home
