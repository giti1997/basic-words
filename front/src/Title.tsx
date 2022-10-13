import { ArrowForward } from '@mui/icons-material'
import { Autocomplete, SelectChangeEvent, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React, { FC } from 'react'

import Image from './assets/background.png'

type Props = {
  origin: string
  destination: string
  handleChangeOrigin: (event: SelectChangeEvent) => void
  handleChangeDestination: (event: SelectChangeEvent) => void
}

const Title: FC<Props> = ({
  origin,
  destination,
  handleChangeOrigin,
  handleChangeDestination,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        backgroundImage: `url(${Image})`,
        backgroundSize: '100%',
      }}
    >
      <Container maxWidth="sm" sx={{ marginTop: 15, marginBottom: 10 }}>
        <Typography variant="h1" align="center" gutterBottom>
          Essential expressions for traveling to any country
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph>
          We grouped the most basic words you may need for a quick trip. In a
          clean and organized place, with audios included!
        </Typography>
      </Container>

      <Stack
        sx={{
          backgroundColor: 'background.default',
          borderRadius: '10px',
        }}
        maxWidth="sm"
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Autocomplete
          disablePortal
          id="source_language"
          options={[{ label: 'English' }, { label: 'Français' }]}
          renderInput={(params) => (
            <TextField {...params} label="Source language" />
          )}
        />
        <ArrowForward />
        <Autocomplete
          disablePortal
          id="target_language"
          options={[{ label: 'English' }, { label: 'Français' }]}
          renderInput={(params) => (
            <TextField {...params} label="Target language" />
          )}
        />
      </Stack>
    </Box>
  )
}

export default Title
