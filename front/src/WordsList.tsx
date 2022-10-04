import { IconButton } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React, { FC } from 'react'

import { ReactComponent as ListenIcon } from './assets/listen.svg'
import { WordTranslation } from './types'

type Props = {
  words: WordTranslation[]
}

const WordsList: FC<Props> = ({ words }) => {
  return (
    <Container sx={{ py: 8 }} maxWidth="sm">
      {/* End hero unit */}
      <Grid container direction="column" spacing={4}>
        {words.map(({ source, target }) => (
          <Grid item>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {source}
                </Typography>
              </CardContent>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {target}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton color="primary" aria-label="listen">
                  <ListenIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default WordsList
