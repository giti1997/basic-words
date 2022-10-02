import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { createRoot } from 'react-dom/client'

import Footer from './Footer'
import Title from './Title'
import WordsList from './WordsList/WordsList'
import theme from './theme'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <TopBar /> */}
        <Title />
        <WordsList />
        <Footer />
    </ThemeProvider>
)
