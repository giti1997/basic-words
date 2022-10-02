import * as React from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import Album from './Album'
import TopBar from './TopBar'
import theme from './theme'
import Footer from './Footer'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <TopBar />
    <Album />
    <Footer />
  </ThemeProvider>
)
