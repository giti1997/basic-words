import { ArrowForward } from '@mui/icons-material'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
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
    <main>
      <Box
        sx={{
          pt: 8,
          pb: 6,
          backgroundImage: `url(${Image})`,
          backgroundSize: '100%',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h1" align="center" gutterBottom>
            Essential expressions for traveling to any country
          </Typography>
          <Typography variant="subtitle1" align="center" paragraph>
            We grouped the most basic words you may need for a quick trip. In a
            clean and organized place, with audios included!
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Select id="origin" value={origin} onChange={handleChangeOrigin}>
              <MenuItem value={'English'}>English</MenuItem>
              <MenuItem value={'French'}>French</MenuItem>
            </Select>
            <ArrowForward></ArrowForward>
            <Select
              id="destination"
              value={destination}
              onChange={handleChangeDestination}
            >
              <MenuItem value={'French'}>French</MenuItem>
              <MenuItem value={'English'}>English</MenuItem>
            </Select>
          </Stack>
        </Container>
      </Box>
    </main>
  )
}

export default Title
