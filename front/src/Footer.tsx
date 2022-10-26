import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import React, { FC } from 'react'

const Footer: FC = () => (
  <Box sx={{ backgroundColor: 'primary.main', padding: 3 }} component="footer">
    <Link href="about">
      <Typography variant="h6" align="center">
        About
      </Typography>
    </Link>
    <Link href="privacy_policy">
      <Typography variant="h6" align="center">
        Privacy Policy
      </Typography>
    </Link>
    <Link href="terms_of_service">
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
