import { Skeleton, Typography } from '@mui/material'
import React, { FC } from 'react'

type Props = {
  word: string | undefined
  i: number
}

const LoadableWord: FC<Props> = ({ word, i }) => {
  const skeletonColor = i % 2 ? 'secondary.light' : 'secondary.dark'
  const fontVariant = i % 2 ? 'body1' : 'body2'
  if (word) {
    return (
      <Typography variant={fontVariant} textAlign="center">
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
