import { ArrowForward } from '@mui/icons-material'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React, { FC } from 'react'

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
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Basic Words
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Survival words for making short trips in any country!
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Select id="origin" value={origin} onChange={handleChangeOrigin}>
              <MenuItem value={'United States'}>United States</MenuItem>
              <MenuItem value={'France'}>France</MenuItem>
            </Select>
            <ArrowForward></ArrowForward>
            <Select
              id="destination"
              value={destination}
              onChange={handleChangeDestination}
            >
              <MenuItem value={'France'}>France</MenuItem>
              <MenuItem value={'United States'}>United States</MenuItem>
            </Select>
          </Stack>
        </Container>
      </Box>
    </main>
  )
}

export default Title
