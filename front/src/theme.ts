import { createTheme } from '@mui/material/styles'

const DEFAULT_COLORS = {
  richBlack: '#111F2A',
  charcoal: '#354045',
  lightSlateGray: '#82909A',
  silverChalice: '#ABB4B9',
  beauBlue: '#D4E2ED',
  gainsboro: '#DDE5E9',
  lightGray: '#EFEFEF',
  white: '#FFFFFF',
  red: '#FF7676',
}

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: DEFAULT_COLORS.richBlack,
      light: DEFAULT_COLORS.charcoal,
    },
    secondary: {
      main: DEFAULT_COLORS.beauBlue,
      light: DEFAULT_COLORS.lightSlateGray,
    },
    error: {
      main: DEFAULT_COLORS.red,
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: 42,
      fontWeight: 'bold',
      color: DEFAULT_COLORS.white,
    },
    subtitle1: {
      fontSize: 20,
      fontWeight: 'light',
      color: DEFAULT_COLORS.gainsboro,
    },
    body1: {
      fontSize: 20,
      fontWeight: 'regular',
      color: DEFAULT_COLORS.richBlack,
    },
    body2: {
      fontSize: 20,
      fontWeight: 'regular',
      color: DEFAULT_COLORS.white,
    },
    caption: {
      fontSize: 20,
      fontWeight: 'light',
      color: DEFAULT_COLORS.white,
    },
  },
})

export default theme
