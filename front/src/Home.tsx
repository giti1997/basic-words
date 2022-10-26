import { Alert, Button, Typography, alertClasses } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC, useEffect, useState } from 'react'

import Footer from './Footer'
import Title from './Title'
import WordsList from './WordsList'
import languages from './assets/languages.json'

const getWords = (language: string): Promise<string[] | null> => {
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
  const [sourceWords, setSourceWords] = useState<string[] | undefined | null>(
    undefined
  )
  const [targetWords, setTargetWords] = useState<string[] | undefined | null>(
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
  const switchLanguages = () => {
    setSourceLanguage(targetLanguage)
    setTargetLanguage(sourceLanguage)
    setSourceWords(targetWords)
    setTargetWords(sourceWords)
  }

  return (
    <main>
      <Title
        sourceLanguage={sourceLanguage}
        targetLanguage={targetLanguage}
        setSourceLanguage={setSourceLanguageWithEffect}
        setTargetLanguage={setTargetLanguageWithEffect}
        switchLanguages={switchLanguages}
        languages={languages}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingY={12}
      >
        {sourceWords === null || targetWords === null ? (
          <Alert
            severity="error"
            action={
              <Button
                color="inherit"
                onClick={() => {
                  if (sourceWords === null) {
                    setSourceLanguageWithEffect(sourceLanguage)
                  }
                  if (targetWords === null) {
                    setTargetLanguageWithEffect(targetLanguage)
                  }
                }}
              >
                <Typography variant="body1" color="inherit">
                  Try again
                </Typography>
              </Button>
            }
            sx={{
              borderRadius: '10px',
              width: '100%',
              maxWidth: 'min(90%, 600px)',
              [`& .${alertClasses.icon}`]: {
                paddingTop: '10px',
              },
            }}
          >
            <Typography variant="body1" color="inherit">
              We're very sorry, there was an error loading the translation data.
              Please try again.
            </Typography>
          </Alert>
        ) : (
          <WordsList
            sourceWords={sourceWords}
            targetWords={targetWords}
            audios={audios}
          />
        )}
      </Box>
      <Footer />
    </main>
  )
}

export default Home
