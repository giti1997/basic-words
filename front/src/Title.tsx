import { ArrowForward } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React, { FC } from 'react'

import CustomAutocomplete from './CustomAutocomplete'
import Image from './assets/background.png'
import { ReactComponent as Logo } from './assets/icon.svg'

type Props = {
  sourceLanguage: string
  targetLanguage: string
  setSourceLanguage: (value: string) => void
  setTargetLanguage: (value: string) => void
  languages: string[]
}

const Title: FC<Props> = ({
  sourceLanguage,
  targetLanguage,
  setSourceLanguage,
  setTargetLanguage,
  languages,
}) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    sx={{
      backgroundImage: `url(${Image})`,
      backgroundSize: '100%',
    }}
  >
    <Box maxWidth="sm">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop="10px"
      >
        <Logo width="35px" />
        <Typography variant="caption" marginLeft="10px">
          Basic Words
        </Typography>
      </Box>
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
        height="70px"
        marginBottom="-30px"
        zIndex="1"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
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
        <ArrowForward />
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
