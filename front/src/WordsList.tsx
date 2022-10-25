import { Divider, IconButton, Stack } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import React, { FC } from 'react'

import { ReactComponent as ListenIcon } from './assets/listen.svg'
import theme from './theme'
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
          const iconBackgroundColor =
            i % 2 ? theme.palette.primary.main : theme.palette.secondary.main
          const iconBackgroundHoverColor =
            i % 2
              ? theme.palette.primary.contrastText
              : theme.palette.secondary.contrastText
          const iconColor = i % 2 ? 'white' : theme.palette.primary.main
          const fontVariant = i % 2 ? 'body1' : 'body2'
          return (
            <Card
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
                  <IconButton
                    aria-label="listen"
                    sx={{
                      backgroundColor: iconBackgroundColor,
                      '&:hover': {
                        backgroundColor: iconBackgroundHoverColor,
                      },
                      marginRight: '7px',
                      padding: '8px',
                      width: '35px',
                      height: '35px',
                    }}
                  >
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
