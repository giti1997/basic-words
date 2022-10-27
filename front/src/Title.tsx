import { IconButton } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React, { FC } from 'react'

import CustomAutocomplete from './CustomAutocomplete'
import Logo from './Logo'
import { ReactComponent as SwitchArrows } from './assets/switch.svg'

type Props = {
  sourceLanguage: string
  targetLanguage: string
  setSourceLanguage: (value: string) => void
  setTargetLanguage: (value: string) => void
  switchLanguages: () => void
  languages: string[]
}

const Title: FC<Props> = ({
  sourceLanguage,
  targetLanguage,
  setSourceLanguage,
  setTargetLanguage,
  switchLanguages,
  languages,
}) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    sx={{
      backgroundImage: 'url(/background.jpeg)',
      backgroundSize: 'cover',
    }}
  >
    <Box maxWidth="min(90%, 600px)">
      <Logo />
      <Box marginTop="15vh" marginBottom="15vh">
        <Typography variant="h1" align="center">
          Essential expressions for traveling to any country
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph marginTop={2}>
          We grouped the most basic words you may need for a quick trip. In a
          clean and organized place, with audios included!
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        height="70px"
        marginBottom="-30px"
        zIndex={1}
        boxShadow={2}
        borderRadius="10px"
        sx={{
          backgroundColor: 'background.default',
        }}
      >
        <CustomAutocomplete
          id="sourceLanguage"
          value={sourceLanguage}
          setValue={setSourceLanguage}
          options={languages}
        />
        <IconButton
          aria-label="switch languages"
          sx={{
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.contrastText',
            },
            position: 'absolute',
            zIndex: 3,
            padding: '6px',
            width: '35px',
            height: '35px',
          }}
          onClick={switchLanguages}
        >
          <SwitchArrows fill="white" />
        </IconButton>
        <CustomAutocomplete
          id="targetLanguage"
          value={targetLanguage}
          setValue={setTargetLanguage}
          options={languages}
        />
      </Box>
    </Box>
  </Box>
)

export default Title
