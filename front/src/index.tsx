import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from './Home'
import theme from './theme'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

root.render(
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  </Router>
)
