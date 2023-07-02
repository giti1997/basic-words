import { Avatar, CircularProgress, IconButton, keyframes } from '@mui/material'
import React, { FC, useState } from 'react'
import { isMobile } from 'react-device-detect'

import { ReactComponent as ListenIcon } from './assets/listen.svg'
import theme from './theme'

const getAnimationStyle = (isAnimating: boolean) => {
  const playKeyframes = keyframes`
    0% {
      transform: scaleY(1)
    } 25% {
      transform: scaleY(0.3)
    } 50% {
      transform: scaleY(0.7)
    } 75% {
      transform: scaleY(0.15)
    }`
  const ids = ['line1', 'line2', 'line3', 'line4', 'line5']
  const periods = ['.1s', '.2s', '.3s', '.2s', '.1s']
  if (isAnimating) {
    return ids.reduce<{
      [key: string]: { animation: string; transformOrigin: string }
    }>((acc, id, i) => {
      acc[`#${id}`] = {
        animation: `${playKeyframes} 1s linear ${periods[i]} infinite`,
        transformOrigin: 'center',
      }
      return acc
    }, {})
  } else {
    return {}
  }
}

const ListenButton: FC<{
  colorType: number
  audio: string | undefined
}> = ({ colorType, audio }) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const iconColor = colorType % 2 ? 'white' : theme.palette.primary.main
  const iconBackgroundColor =
    colorType % 2 ? theme.palette.primary.main : theme.palette.secondary.main
  const iconBackgroundHoverColor =
    colorType % 2
      ? theme.palette.primary.contrastText
      : theme.palette.secondary.contrastText

  if (audio == null) {
    return (
      <Avatar
        sx={{
          backgroundColor: iconBackgroundColor,
          width: isMobile ? '28px' : '35px',
          height: isMobile ? '28px' : '35px',
          marginRight: '3px',
        }}
      >
        <CircularProgress
          size="50%"
          aria-label="loading-audio"
          sx={{ color: iconColor }}
        />
      </Avatar>
    )
  } else {
    return (
      <IconButton
        onClick={() => {
          if (!isAnimating) {
            setIsAnimating(true)
            setTimeout(() => {
              setIsAnimating(false)
            }, 1000)
          }
        }}
        aria-label="audio"
        sx={{
          backgroundColor: iconBackgroundColor,
          '&:hover': {
            backgroundColor: iconBackgroundHoverColor,
          },
          ...getAnimationStyle(isAnimating),
          marginRight: '3px',
          padding: isMobile ? '6px' : '9px',
          width: isMobile ? '28px' : '35px',
          height: isMobile ? '28px' : '35px',
        }}
      >
        <ListenIcon stroke={iconColor} />
      </IconButton>
    )
  }
}

export default ListenButton
