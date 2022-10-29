import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { IntlProvider } from 'react-intl'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import Home from './Home'
import Legal from './Legal'
import getMessages from './getMessages'
import theme from './theme'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

const language =
  ['/', '/privacy', '/tos'].indexOf(window.location.pathname) >= 0
    ? navigator.language.split(/[-_]/)[0]
    : window.location.pathname.split('/')[1]

root.render(
  <BrowserRouter>
    <IntlProvider locale={language} messages={getMessages(language)}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="privacy" element={<Legal type="privacy" />} />
          <Route path="tos" element={<Legal type="tos" />} />
        </Routes>
      </ThemeProvider>
    </IntlProvider>
  </BrowserRouter>
)
