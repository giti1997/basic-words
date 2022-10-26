import { Alert, Button, Typography, alertClasses } from '@mui/material'
import React, { FC } from 'react'

const CustomAlert: FC<{
  severity: string
  targetLanguage?: string
  onRetry?: () => void
}> = ({ severity, targetLanguage, onRetry }) => {
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
        <Typography variant="body1" color="inherit">
          {`We're sorry, speech data is currently not available in ${targetLanguage}.`}
        </Typography>
      </Alert>
    )
  } else {
    return (
      <Alert
        severity="error"
        action={
          <Button color="inherit" onClick={onRetry}>
            <Typography variant="body1" color="inherit">
              Try again
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
        <Typography variant="body1" color="inherit">
          We're very sorry, there was an error loading the translation data.
          Please try again.
        </Typography>
      </Alert>
    )
  }
}

export default CustomAlert
