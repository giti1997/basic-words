import { red } from '@mui/material/colors'
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
      main: DEFAULT_COLORS['richBlack'],
    },
    secondary: {
      main: DEFAULT_COLORS['beauBlue'],
    },
    text: {
      primary: DEFAULT_COLORS['richBlack'],
      secondary: DEFAULT_COLORS['gainsboro'],
    },
    error: {
      main: DEFAULT_COLORS['red'],
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: 64,
      fontWeight: 'bold',
      color: 'text.primary',
    },
    subtitle1: {
      fontSize: 24,
      fontWeight: 'regular',
      color: 'text.secondary',
    },
  },
})

export default theme
