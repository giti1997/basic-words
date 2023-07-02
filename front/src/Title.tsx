import { IconButton } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React, { FC } from 'react'
import { useIntl } from 'react-intl'

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
  typographySx: { direction: 'rtl' | 'lrt' }
}

const Title: FC<Props> = ({
  sourceLanguage,
  targetLanguage,
  setSourceLanguage,
  setTargetLanguage,
  switchLanguages,
  languages,
  typographySx,
}) => {
  const intl = useIntl()

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        backgroundImage: 'url(/background.webp)',
        backgroundSize: 'cover',
      }}
    >
      <Box width="100%" maxWidth="min(90%, 600px)">
        <Logo />
        <Box marginTop="15vh" marginBottom="15vh">
          <Typography variant="h1" align="center" sx={typographySx}>
            {intl.formatMessage({ id: 'title' })}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            paragraph
            marginTop={2}
            sx={typographySx}
          >
            {intl.formatMessage({ id: 'subtitle' })}
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
}

export default Title
