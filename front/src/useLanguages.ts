import { useMemo } from 'react'

import languages from './assets/languages.json'

const getLanguages = (): {
  sourceIso: string
  targetIso: string
} => {
  const defaultSourceIso = navigator.language.split(/[-_]/)[0]
  const defaultTargetIso = defaultSourceIso === 'es' ? 'fr' : 'es'
  if (['/', '/privacy', '/tos'].indexOf(window.location.pathname) >= 0) {
    return {
      sourceIso: defaultSourceIso,
      targetIso: defaultTargetIso,
    }
  } else {
    const split = window.location.pathname.split('/')
    if (split.length == 3) {
      return {
        sourceIso: split[1],
        targetIso: split[2],
      }
    } else {
      return {
        sourceIso: split[1],
        targetIso: defaultTargetIso,
      }
    }
  }
}

const isRtl = (iso: string): boolean => {
  return (
    [
      'ae' /* Avestan */,
      'ar' /* 'العربية', Arabic */,
      'arc' /* Aramaic */,
      'bcc' /* 'بلوچی مکرانی', Southern Balochi */,
      'bqi' /* 'بختياري', Bakthiari */,
      'ckb' /* 'Soranî / کوردی', Sorani */,
      'dv' /* Dhivehi */,
      'fa' /* 'فارسی', Persian */,
      'glk' /* 'گیلکی', Gilaki */,
      'he' /* 'עברית', Hebrew */,
      'ku' /* 'Kurdî / كوردی', Kurdish */,
      'mzn' /* 'مازِرونی', Mazanderani */,
      'nqo' /* N'Ko */,
      'pnb' /* 'پنجابی', Western Punjabi */,
      'ps' /* 'پښتو', Pashto, */,
      'sd' /* 'سنڌي', Sindhi */,
      'ug' /* 'Uyghurche / ئۇيغۇرچە', Uyghur */,
      'ur' /* 'اردو', Urdu */,
      'yi' /* 'ייִדיש', Yiddish */,
    ].indexOf(iso) >= 0
  )
}

const useLanguages = (): {
  sourceIso: string
  targetIso: string
  sourceLanguage: string
  targetLanguage: string
  languageToIso: Map<string, string>
  languagesList: string[]
  isoList: string[]
  typographySx: { direction: 'rtl' | 'lrt' }
} => {
  const { sourceIso, targetIso } = getLanguages()
  const typographySx = { direction: isRtl(sourceIso) ? 'rtl' : 'ltr' } as {
    direction: 'rtl' | 'lrt'
  }

  const [isoToLanguage, languageToIso, languagesList, isoList] = useMemo(() => {
    const isoToLanguage = new Map(
      languages.map(({ code, language }) => [code, language])
    )
    const languageToIso = new Map(
      languages.map(({ code, language }) => [language, code])
    )
    const languagesList = languages.map(({ language }) => language)
    const isoList = languages.map(({ code }) => code)
    return [isoToLanguage, languageToIso, languagesList, isoList]
  }, [languages])

  const sourceLanguage = isoToLanguage.get(sourceIso) ?? 'English'
  const targetLanguage = isoToLanguage.get(targetIso) ?? 'English'

  return {
    sourceIso,
    targetIso,
    sourceLanguage,
    targetLanguage,
    languageToIso,
    languagesList,
    isoList,
    typographySx,
  }
}

export default useLanguages
