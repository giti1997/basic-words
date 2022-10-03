import { SelectChangeEvent } from '@mui/material'
import React, { FC, useState } from 'react'

import Footer from './Footer'
import Title from './Title'
import WordsList from './WordsList'
import { WordTranslation } from './types'

const Home: FC = () => {
  const [origin, setOrigin] = useState('United States')
  const [destination, setDestination] = useState('France')
  const handleChangeOrigin = (event: SelectChangeEvent) => {
    setOrigin(event.target.value as string)
  }
  const handleChangeDestination = (event: SelectChangeEvent) => {
    setDestination(event.target.value as string)
  }
  const [words, setWords] = useState<WordTranslation[]>([
    { source: 'Hello', target: 'Bonjour' },
    { source: 'Sorry', target: 'Pardon' },
    { source: 'Please', target: "S'il vous plaît" },
  ])

  return (
    <main>
      <Title
        origin={origin}
        destination={destination}
        handleChangeOrigin={handleChangeOrigin}
        handleChangeDestination={handleChangeDestination}
      />
      <WordsList words={words} />
      <Footer />
    </main>
  )
}

export default Home
