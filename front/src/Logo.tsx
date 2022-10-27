import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'

import { ReactComponent as LogoIcon } from './assets/icon.svg'

const Logo: FC<{ onClick?: () => void }> = ({ onClick }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    marginY="10px"
    onClick={onClick}
    sx={{ cursor: onClick ? 'pointer' : undefined }}
  >
    <LogoIcon width="min(35px, 8vw)" />
    <Typography variant="caption" marginLeft="10px">
      Basic Words
    </Typography>
  </Box>
)

export default Logo
