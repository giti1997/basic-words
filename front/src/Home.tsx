import React, { FC, useEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'
import { useNavigate } from 'react-router-dom'

import CustomAlert from './CustomAlert'
import Footer from './Footer'
import SEO from './SEO'
import Title from './Title'
import WordsList from './WordsList'
import getMessages from './getMessages'
import useLanguages from './useLanguages'
import { Box } from '@mui/material'

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
  const navigate = useNavigate()
  const {
    sourceIso,
    targetIso,
    sourceLanguage,
    targetLanguage,
    languageToIso,
    languagesList,
    isoList,
    typographySx,
  } = useLanguages()

  const [sourceWords, setSourceWords] = useState<string[] | undefined | null>(
    undefined
  )
  const [targetWords, setTargetWords] = useState<string[] | undefined | null>(
    undefined
  )
  const [audios, setAudios] = useState<string[] | undefined | null>(undefined)

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
    navigate(`/${languageToIso.get(language)}/${targetIso}`, { replace: true })
    setSourceWords(undefined)
    getWords(language).then((words) => {
      setSourceWords(words)
    })
  }
  const setTargetLanguageWithEffect = (language: string) => {
    navigate(`/${sourceIso}/${languageToIso.get(language)}`, { replace: true })
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
    navigate(`/${targetIso}/${sourceIso}`, { replace: true })
    setSourceWords(targetWords)
    setTargetWords(sourceWords)
  }

  return (
    <IntlProvider locale={sourceIso} messages={getMessages(sourceIso)}>
      <SEO iso={sourceIso} page="home" isoList={isoList}></SEO>
      <Title
        sourceLanguage={sourceLanguage}
        targetLanguage={targetLanguage}
        setSourceLanguage={setSourceLanguageWithEffect}
        setTargetLanguage={setTargetLanguageWithEffect}
        switchLanguages={switchLanguages}
        languages={languagesList}
        typographySx={typographySx}
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
            typographySx={typographySx}
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
              <CustomAlert severity="warning" typographySx={typographySx} />
            )}
            <WordsList
              sourceWords={sourceWords}
              targetWords={targetWords}
              typographySx={typographySx}
              audios={audios}
            />
          </>
        )}
      </Box>
      <Footer typographySx={typographySx} />
    </IntlProvider>
  )
}

export default Home
