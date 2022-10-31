import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import React, { FC } from 'react'
import { useIntl } from 'react-intl'

const Footer: FC = () => {
  const intl = useIntl()
  return (
    <Box
      bgcolor="primary.main"
      padding={3}
      component="footer"
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
    >
      <Link href="/privacy">
        <Typography variant="h6" align="center">
          {intl.formatMessage({ id: 'privacy' })}
        </Typography>
      </Link>
      <Link href="/tos">
        <Typography variant="h6" align="center">
          {intl.formatMessage({ id: 'tos' })}
        </Typography>
      </Link>

      <Typography variant="h6" align="center" marginTop={2}>
        {`\u00A9 ${intl.formatNumber(
          new Date().getFullYear()
        )} - ${intl.formatMessage({
          id: 'copyright',
        })}`}
      </Typography>
    </Box>
  )
}

export default Footer
