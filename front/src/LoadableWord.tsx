import { Skeleton, Typography } from '@mui/material'
import React, { FC } from 'react'

type Props = {
  word: string | undefined
  i: number
  typographySx: { direction: 'rtl' | 'lrt' }
}

const LoadableWord: FC<Props> = ({ word, i, typographySx }) => {
  const skeletonColor = i % 2 ? 'secondary.light' : 'secondary.dark'
  const color = i % 2 ? 'primary.main' : 'white'
  if (word) {
    return (
      <Typography variant="body1" color={color} textAlign="center" sx={typographySx}>
        {word}
      </Typography>
    )
  } else {
    return (
      <Skeleton
        variant="rounded"
        animation="wave"
        width="min(100px, 15vw)"
        height="16px"
        sx={{ backgroundColor: skeletonColor }}
      />
    )
  }
}

export default LoadableWord
