import { Divider, Stack } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { Box } from '@mui/system'
import React, { FC } from 'react'

import ListenButton from './ListenButton'
import LoadableWord from './LoadableWord'

type Props = {
  sourceWords: string[] | undefined
  targetWords: string[] | undefined
  audios: string[] | undefined | null
}

const WordsList: FC<Props> = ({ sourceWords, targetWords, audios }) => {
  const words = sourceWords
    ? sourceWords.map((sourceWord, i) => ({
        source: sourceWord,
        target: targetWords?.at(i),
      }))
    : targetWords
    ? targetWords.map((targetWord) => ({
        source: undefined,
        target: targetWord,
      }))
    : Array(5).fill({ source: undefined, value: undefined })

  return (
    <Stack spacing={4} maxWidth="min(90%, 600px)" width="100%">
      {words.map(({ source, target }, i) => {
        const backgroundColor = i % 2 ? 'secondary.main' : 'primary.main'
        const audio = audios === null ? null : audios?.at(i)
        return (
          <Card
            key={i}
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
              <LoadableWord word={source} i={i} />
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
                  maxWidth: audio === null ? '100%' : '63%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:last-child': {
                    padding: 0,
                  },
                }}
              >
                <LoadableWord word={target} i={i} />
              </CardContent>
              {audio !== null && (
                <CardActions sx={{ position: 'absolute' }}>
                  <ListenButton colorType={i} audio={audio} />
                </CardActions>
              )}
            </Box>
          </Card>
        )
      })}
    </Stack>
  )
}

export default WordsList
