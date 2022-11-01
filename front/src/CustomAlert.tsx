import { Alert, Button, Typography, alertClasses } from '@mui/material'
import React, { FC } from 'react'
import { useIntl } from 'react-intl'

const CustomAlert: FC<{
  severity: string
  targetLanguage?: string
  typographySx: { direction: 'rtl' | 'lrt' }
  onRetry?: () => void
}> = ({ severity, targetLanguage, typographySx, onRetry }) => {
  const intl = useIntl()

  if (severity == 'warning') {
    return (
      <Alert
        severity="warning"
        sx={{
          borderRadius: '10px',
          width: '100%',
          maxWidth: 'min(90%, 600px)',
          marginBottom: '5vh',
          [`& .${alertClasses.icon}`]: {
            paddingTop: '12px',
          },
        }}
      >
        <Typography variant="body1" color="inherit" sx={typographySx}>
          {intl.formatMessage(
            { id: 'error-audio' },
            { language: targetLanguage }
          )}
        </Typography>
      </Alert>
    )
  } else {
    return (
      <Alert
        severity="error"
        action={
          <Button color="inherit" onClick={onRetry}>
            <Typography variant="body1" color="inherit" sx={typographySx}>
              {intl.formatMessage({ id: 'try-again' })}
            </Typography>
          </Button>
        }
        sx={{
          borderRadius: '10px',
          width: '100%',
          maxWidth: 'min(90%, 600px)',
          [`& .${alertClasses.icon}`]: {
            paddingTop: '11px',
          },
        }}
      >
        <Typography variant="body1" color="inherit" sx={typographySx}>
          {intl.formatMessage({ id: 'error-words' })}
        </Typography>
      </Alert>
    )
  }
}

export default CustomAlert
