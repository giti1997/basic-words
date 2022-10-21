import { ArrowBack, Check } from '@mui/icons-material'
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
    disablePortal: true,
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
          <Box display="flex" alignItems="center">
            <IconButton
              color="inherit"
              onClick={() => setOpen(false)}
              aria-label="close"
              sx={{ position: 'absolute', zIndex: 1 }}
            >
              <ArrowBack />
            </IconButton>
            <Autocomplete
              {...commonProps}
              open={true}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Check sx={{ visibility: selected ? 'visible' : 'hidden' }} />
                  {option}
                </li>
              )}
              componentsProps={{
                paper: {
                  sx: {
                    borderRadius: '0px',
                    boxShadow: 0,
                  },
                },
              }}
              sx={{
                [`& .${inputClasses.root}`]: {
                  paddingLeft: '40px',
                  height: '50px',
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
