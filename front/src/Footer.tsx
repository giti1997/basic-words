import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import React, { FC } from 'react'

const Footer: FC = () => (
  <Box
    bgcolor="primary.main"
    padding={3}
    component="footer"
    display="flex"
    flexDirection="column"
    alignItems="center"
    width="100%"
  >
    <Link href="privacy">
      <Typography variant="h6" align="center">
        Privacy Policy
      </Typography>
    </Link>
    <Link href="tos">
      <Typography variant="h6" align="center">
        Terms of Service
      </Typography>
    </Link>

    <Typography variant="h6" align="center" marginTop={2}>
      © {new Date().getFullYear()} - All rights reserved
    </Typography>
  </Box>
)

export default Footer
