import { Box } from '@mui/system'
import React, { FC, useEffect, useMemo, useState } from 'react'
import { IntlProvider } from 'react-intl'
import { useNavigate } from 'react-router-dom'

import CustomAlert from './CustomAlert'
import Footer from './Footer'
import Title from './Title'
import WordsList from './WordsList'
import languages from './assets/languages.json'
import getLanguages from './getLanguages'
import getMessages from './getMessages'

const getWords = (iso: string): Promise<string[] | null> => {
  const words =
    iso == 'en'
      ? ['Hello', 'Sorry', 'Please']
      : ['Bonjour', 'Pardon', "S'il vous plaît"]

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(words)
    }, 1000)
  })
}

const getAudios = (iso: string): Promise<string[] | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['', '', ''])
    }, 2000)
  })
}

const Home: FC = () => {
  const { sourceIso, targetIso } = getLanguages()

  const [sourceWords, setSourceWords] = useState<string[] | undefined | null>(
    undefined
  )
  const [targetWords, setTargetWords] = useState<string[] | undefined | null>(
    undefined
  )
  const [audios, setAudios] = useState<string[] | undefined | null>(undefined)

  const [isoToLanguage, languageToIso, languagesList] = useMemo(() => {
    const isoToLanguage = new Map(
      languages.map(({ code, language }) => [code, language])
    )
    const languageToIso = new Map(
      languages.map(({ code, language }) => [language, code])
    )
    const languagesList = languages.map(({ language }) => language)
    return [isoToLanguage, languageToIso, languagesList]
  }, [languages])

  const navigate = useNavigate()
  const sourceLanguage = isoToLanguage.get(sourceIso) ?? 'English'
  const targetLanguage = isoToLanguage.get(targetIso) ?? 'English'

  useEffect(() => {
    getWords(sourceIso).then((words) => {
      setSourceWords(words)
    })
    getWords(targetIso).then((words) => {
      setTargetWords(words)
    })
    getAudios(targetIso).then((audios) => setAudios(audios))
  }, [])

  const setSourceLanguageWithEffect = (language: string) => {
    navigate(`/${languageToIso.get(language)}/${targetIso}`)
    setSourceWords(undefined)
    getWords(language).then((words) => {
      setSourceWords(words)
    })
  }
  const setTargetLanguageWithEffect = (language: string) => {
    navigate(`/${sourceIso}/${languageToIso.get(language)}`)
    setTargetWords(undefined)
    setAudios(undefined)
    getWords(language).then((words) => {
      setTargetWords(words)
    })
    getAudios(language).then((audios) => setAudios(audios))
  }
  const switchLanguages = () => {
    setAudios(undefined)
    getAudios(sourceIso).then((audios) => setAudios(audios))
    navigate(`/${targetIso}/${sourceIso}`)
    setSourceWords(targetWords)
    setTargetWords(sourceWords)
  }

  return (
    <IntlProvider locale={sourceIso} messages={getMessages(sourceIso)}>
      <Title
        sourceLanguage={sourceLanguage}
        targetLanguage={targetLanguage}
        setSourceLanguage={setSourceLanguageWithEffect}
        setTargetLanguage={setTargetLanguageWithEffect}
        switchLanguages={switchLanguages}
        languages={languagesList}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingY={12}
      >
        {sourceWords === null || targetWords === null ? (
          <CustomAlert
            severity="error"
            onRetry={() => {
              if (sourceWords === null) {
                setSourceLanguageWithEffect(sourceLanguage)
              }
              if (targetWords === null) {
                setTargetLanguageWithEffect(targetLanguage)
              }
            }}
          />
        ) : (
          <>
            {audios === null && (
              <CustomAlert severity="warning" targetLanguage={targetLanguage} />
            )}
            <WordsList
              sourceWords={sourceWords}
              targetWords={targetWords}
              audios={audios}
            />
          </>
        )}
      </Box>
      <Footer />
    </IntlProvider>
  )
}

export default Home
