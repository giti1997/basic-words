import { Divider, IconButton, Stack } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import React, { FC } from 'react'

import { ReactComponent as ListenIcon } from './assets/listen.svg'
import { WordTranslation } from './types'

type Props = {
  words: WordTranslation[]
}

const WordsList: FC<Props> = ({ words }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Stack py={12} spacing={4} maxWidth="sm" width="100%">
        {words.map(({ source, target }, i) => {
          const backgroundColor = i % 2 ? 'secondary.main' : 'primary.main'
          const iconColor = i % 2 ? 'primary.main' : 'white'
          const fontVariant = i % 2 ? 'body1' : 'body2'
          return (
            <Card
              sx={{
                height: '60px',
                display: 'flex',
                flexDirection: 'row',
                borderRadius: '10px',
                zIndex: 1,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                backgroundColor: backgroundColor,
              }}
            >
              <CardContent sx={{ width: '50%' }}>
                <Typography
                  gutterBottom
                  variant={fontVariant}
                  textAlign="center"
                >
                  {source}
                </Typography>
              </CardContent>
              <Divider
                orientation="vertical"
                sx={{
                  alignSelf: 'center',
                  height: '70%',
                  borderColor: 'secondary.light',
                }}
              />
              <Box display="flex" justifyContent="flex-end" width="50%">
                <CardContent sx={{ margin: '0 auto' }}>
                  <Typography
                    gutterBottom
                    variant={fontVariant}
                    textAlign="center"
                  >
                    {target}
                  </Typography>
                </CardContent>
                <CardActions sx={{ position: 'absolute' }}>
                  <IconButton aria-label="listen">
                    <ListenIcon stroke={iconColor} />
                  </IconButton>
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
