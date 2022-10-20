import {
  Autocomplete,
  Button,
  Dialog,
  IconButton,
  TextField,
  TextFieldProps,
  Typography,
  autocompleteClasses,
  inputClasses,
  inputLabelClasses,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { FC, useState } from 'react'
import { isMobile } from 'react-device-detect'

import { ReactComponent as ArrowLeft } from './assets/arrowLeft.svg'

type Props = {
  id: string
  value: string
  setValue: (value: string) => void
  options: string[]
}

const CustomAutocomplete: FC<Props> = ({ id, value, setValue, options }) => {
  const [inputValue, setInputValue] = useState(value)
  const [open, setOpen] = React.useState(false)

  const commonProps = {
    id: id,
    fullWidth: true,
    value: value,
    inputValue: inputValue,
    onChange: (_: any, newValue: string | null) => {
      if (newValue) {
        setValue(newValue)
        setOpen(false)
      }
    },
    onInputChange: (_: any, newInputValue: string) =>
      setInputValue(newInputValue),
    options: options,
    forcePopupIcon: false,
    renderInput: (params: TextFieldProps) => (
      <TextField {...params} variant="standard" />
    ),
  }

  if (isMobile) {
    return (
      <>
        <Button fullWidth sx={{ height: '100%' }} onClick={() => setOpen(true)}>
          <Typography variant="body1" textTransform="none" fontWeight="regular">
            {value}
          </Typography>
        </Button>
        <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
          <Box display="flex">
            <IconButton
              color="inherit"
              onClick={() => setOpen(false)}
              aria-label="close"
              sx={{ borderBottom: 1, borderRadius: 0 }}
            >
              <ArrowLeft />
            </IconButton>
            <Autocomplete
              {...commonProps}
              open={true}
              componentsProps={{
                paper: {
                  sx: {
                    borderRadius: '0px',
                    boxShadow: 0,
                  },
                },
              }}
            />
          </Box>
        </Dialog>
      </>
    )
  } else {
    return (
      <Autocomplete
        disablePortal
        {...commonProps}
        disableClearable
        componentsProps={{
          paper: {
            sx: {
              borderRadius: '10px',
              boxShadow: 2,
            },
          },
          popper: {
            sx: {
              [`& .${autocompleteClasses.option}`]: {
                justifyContent: 'center',
              },
            },
          },
        }}
        sx={{
          [`& .${inputLabelClasses.root}`]: { color: 'primary.light' },
          [`& .${inputClasses.input}`]: { textAlign: 'center' },
          [`& .${inputClasses.root}:before`]: {
            borderBottom: 0,
          },
        }}
      />
    )
  }
}

export default CustomAutocomplete
