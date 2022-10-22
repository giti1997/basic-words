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
import { useLocation, useNavigate } from 'react-router-dom'

type Props = {
  id: string
  value: string
  setValue: (value: string) => void
  options: string[]
}

const useDialogHandles = (
  id: string
): {
  dialogOpen: boolean
  handleDialogOpen: () => void
  handleDialogClose: () => void
} => {
  const navigate = useNavigate()
  const location = useLocation()
  let dialogOpen = false
  if (location.state && `dialogOpen_${id}` in location.state) {
    dialogOpen = location.state[`dialogOpen_${id}`]
  }
  const handleDialogOpen = () => {
    if (isMobile) {
      navigate(location.pathname, {
        state: { [`dialogOpen_${id}`]: true },
      })
    }
  }
  const handleDialogClose = () => {
    if (isMobile) {
      window.history.back()
    }
  }

  return { dialogOpen, handleDialogOpen, handleDialogClose }
}

const CustomAutocomplete: FC<Props> = ({ id, value, setValue, options }) => {
  const [inputValue, setInputValue] = useState(value)
  const { dialogOpen, handleDialogOpen, handleDialogClose } =
    useDialogHandles(id)

  // Common for mobile and desktop
  const commonProps = {
    id: id,
    fullWidth: true,
    disablePortal: true,
    value: value,
    inputValue: inputValue,
    onChange: (_: any, newValue: string | null) => {
      if (newValue) {
        setValue(newValue)
        handleDialogClose()
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
        <Button fullWidth sx={{ height: '100%' }} onClick={handleDialogOpen}>
          <Typography variant="body1" textTransform="none" fontWeight="regular">
            {value}
          </Typography>
        </Button>
        <Dialog fullScreen open={dialogOpen} onClose={handleDialogClose}>
          <Box display="flex" alignItems="center">
            <IconButton
              color="inherit"
              onClick={handleDialogClose}
              aria-label="close"
              sx={{
                position: 'absolute',
                zIndex: 1,
                marginLeft: '15px',
                width: '40px',
                color: 'primary.light',
              }}
            >
              <ArrowBack />
            </IconButton>
            <Autocomplete
              {...commonProps}
              open={true}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Check
                    sx={{
                      visibility: selected ? 'visible' : 'hidden',
                      width: '40px',
                      marginRight: '15px',
                      color: 'primary.light',
                    }}
                  />
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
                  paddingLeft: '70px',
                  height: '60px',
                  color: 'primary.main',
                },
                [`& .${inputClasses.root}:after`]: {
                  borderBottom: 0,
                },
                [`& .${autocompleteClasses.endAdornment}`]: {
                  marginRight: '15px',
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
