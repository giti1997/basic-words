import { createTheme } from '@mui/material/styles'

const DEFAULT_COLORS = {
  richBlack: '#111F2A',
  richBlackToned: '#6A7987',
  charcoal: '#354045',
  lightSlateGray: '#82909A',
  silverChalice: '#ABB4B9',
  beauBlue: '#D4E2ED',
  beauBlueToned: '#BCCAD4',
  gainsboro: '#DDE5E9',
  lightGray: '#EFEFEF',
  white: '#FFFFFF',
}

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: DEFAULT_COLORS.richBlack,
      light: DEFAULT_COLORS.charcoal,
      contrastText: DEFAULT_COLORS.richBlackToned,
    },
    secondary: {
      main: DEFAULT_COLORS.beauBlue,
      light: DEFAULT_COLORS.lightSlateGray,
      dark: DEFAULT_COLORS.gainsboro,
      contrastText: DEFAULT_COLORS.beauBlueToned,
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial',
    h1: {
      fontSize: 'min(42px, 7vw)',
      fontWeight: 'bold',
      color: DEFAULT_COLORS.white,
    },
    subtitle1: {
      fontSize: 'min(20px, 4vw)',
      fontWeight: 'lighter',
      color: DEFAULT_COLORS.gainsboro,
    },
    body1: {
      fontSize: 'min(20px, 4vw)',
      fontWeight: 'normal',
      color: DEFAULT_COLORS.richBlack,
    },
    body2: {
      fontSize: 'min(16px, 3vw)',
      fontWeight: 'normal',
      color: DEFAULT_COLORS.white,
    },
    caption: {
      fontSize: 'min(20px, 4vw)',
      fontWeight: 'normal',
      color: DEFAULT_COLORS.white,
    },
  },
})

export default theme
