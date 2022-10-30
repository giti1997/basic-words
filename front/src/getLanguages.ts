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

export default getLanguages
