import { Divider, Stack } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import React, { FC } from 'react'

import ListenButton from './ListenButton'
import { WordTranslation } from './types'

type Props = {
  words: WordTranslation[]
}

const WordsList: FC<Props> = ({ words }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Stack py={12} spacing={4} maxWidth="min(90%, 600px)" width="100%">
        {words.map(({ source, target }, i) => {
          const backgroundColor = i % 2 ? 'secondary.main' : 'primary.main'
          const fontVariant = i % 2 ? 'body1' : 'body2'
          return (
            <Card
              key={source}
              sx={{
                minHeight: '70px',
                display: 'flex',
                flexDirection: 'row',
                borderRadius: '10px',
                zIndex: 1,
                boxShadow: 2,
                backgroundColor: backgroundColor,
              }}
            >
              <CardContent
                sx={{
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant={fontVariant} textAlign="center">
                  {source}
                </Typography>
              </CardContent>
              <Divider
                orientation="vertical"
                sx={{
                  alignSelf: 'center',
                  height: '50px',
                  borderColor: 'secondary.light',
                }}
              />
              <Box
                width="50%"
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                <CardContent
                  sx={{
                    margin: '0 auto',
                    maxWidth: '63%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant={fontVariant} textAlign="center">
                    {target}
                  </Typography>
                </CardContent>
                <CardActions sx={{ position: 'absolute' }}>
                  <ListenButton colorType={i} />
                </CardActions>
              </Box>
            </Card>
          )
        })}
      </Stack>
    </Box>
  )
}

export default WordsList
