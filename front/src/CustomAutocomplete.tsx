import { ArrowBack, Check } from '@mui/icons-material'
import {
  Autocomplete,
  AutocompleteInputChangeReason,
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
  id: string,
  setInputValue: (value: string) => void
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
      setInputValue('')
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
  const { dialogOpen, handleDialogOpen, handleDialogClose } = useDialogHandles(
    id,
    setInputValue
  )
  const placeholder = 'Search languages'
  const noOptions = 'No options'

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
    onInputChange: (
      _: any,
      newInputValue: string,
      reason: AutocompleteInputChangeReason
    ) => {
      if (isMobile && reason === 'reset' && value === newInputValue) {
        setInputValue('')
      } else {
        setInputValue(newInputValue)
      }
    },
    options: options,
    forcePopupIcon: false,
    renderInput: (params: TextFieldProps) => (
      <TextField
        {...params}
        autoFocus={isMobile}
        variant="standard"
        placeholder={placeholder}
        sx={isMobile ? { position: 'fixed', backgroundColor: 'white' } : null}
      />
    ),
    noOptionsText: <Box marginLeft="54px">{noOptions}</Box>,
  }

  if (isMobile) {
    return (
      <>
        <Button
          fullWidth
          sx={{ height: '100%' }}
          onClick={(e) => {
            handleDialogOpen()
            e.currentTarget.blur()
          }}
        >
          <Typography variant="body1" textTransform="none" fontWeight="regular">
            {value}
          </Typography>
        </Button>
        <Dialog
          fullScreen
          open={dialogOpen}
          onClose={handleDialogClose}
          PaperProps={{ style: { overflowY: 'hidden' } }}
        >
          <Box display="flex" alignItems="center">
            <IconButton
              color="inherit"
              onClick={handleDialogClose}
              aria-label="close"
              sx={{
                position: 'fixed',
                zIndex: 1,
                marginLeft: '15px',
                width: '40px',
                color: 'primary.light',
                marginTop: '60px',
              }}
            >
              <ArrowBack />
            </IconButton>
            <Autocomplete
              {...commonProps}
              open
              onAnimationStart={() => {
                document.getElementById(`${id}-option-0`)?.scrollIntoView()
              }}
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
                    height: '100%',
                    [`& .${autocompleteClasses.noOptions}`]: {
                      height: '100%',
                    },
                  },
                },
                popper: {
                  sx: {
                    height: '100%',
                  },
                },
              }}
              ListboxProps={{
                style: {
                  maxHeight: '100%',
                  height: 'calc(100% - 60px)',
                  width: '100%',
                  position: 'absolute',
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
                textAlign: 'center',
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
