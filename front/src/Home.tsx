import React, { FC, useState } from 'react'

import Footer from './Footer'
import Title from './Title'
import WordsList from './WordsList'
import { WordTranslation } from './types'

const Home: FC = () => {
  const languages = ['English', 'Français']
  const [sourceLanguage, setSourceLanguage] = useState(languages[0])
  const [targetLanguage, setTargetLanguage] = useState(languages[1])
  const [words, setWords] = useState<WordTranslation[]>([
    { source: 'Hello', target: 'Bonjour' },
    { source: 'Sorry', target: 'Pardon' },
    { source: 'Please', target: "S'il vous plaît" },
  ])

  return (
    <main>
      <Title
        sourceLanguage={sourceLanguage}
        targetLanguage={targetLanguage}
        setTargetLanguage={setTargetLanguage}
        setSourceLanguage={setSourceLanguage}
        languages={languages}
      />
      <WordsList words={words} />
      <Footer />
    </main>
  )
}

export default Home
