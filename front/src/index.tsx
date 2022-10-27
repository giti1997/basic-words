import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Legal from './Legal'
import theme from './theme'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route index element={<Home />} />
        <Route path="privacy" element={<Legal type="privacy" />} />
        <Route path="tos" element={<Legal type="tos" />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
)
