import { ArrowBack, Check } from '@mui/icons-material'
import {
  Autocomplete,
  AutocompleteInputChangeReason,
  Box,
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
import React, { FC, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { useIntl } from 'react-intl'
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
  const intl = useIntl()
  const [inputValue, setInputValue] = useState(value)
  const { dialogOpen, handleDialogOpen, handleDialogClose } = useDialogHandles(
    id,
    setInputValue
  )

  // Common for mobile and desktop
  const commonProps = {
    id: id,
    fullWidth: true,
    disableClearable: true,
    disablePortal: true,
    value: value,
    inputValue: inputValue,
    onChange: (_: any, newValue: string | null) => {
      if (newValue) {
        setValue(newValue)
      }
    },
    onInputChange: (
      _: any,
      newInputValue: string,
      reason: AutocompleteInputChangeReason
    ) => {
      if (!isMobile || reason !== 'reset') {
        setInputValue(newInputValue)
      }
    },
    options: options,
    forcePopupIcon: false,
    renderInput: (params: TextFieldProps) => (
      <TextField
        {...params}
        variant="standard"
        placeholder={intl.formatMessage({ id: 'search' })}
        sx={isMobile ? { position: 'fixed', backgroundColor: 'white' } : null}
      />
    ),
    noOptionsText: (
      <Box
        marginLeft={isMobile ? '54px' : undefined}
        textAlign={isMobile ? 'left' : 'center'}
      >
        {intl.formatMessage({ id: 'no-options' })}
      </Box>
    ),
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
                document.getElementById(id)?.focus()
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
                  paddingTop: 0,
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
        componentsProps={{
          paper: {
            sx: {
              borderRadius: '10px',
              boxShadow: 2,
              width: '300px',
              translate: '-50px',
            },
          },
        }}
        renderOption={(props, option) => (
          <li {...props} style={{ justifyContent: 'center' }}>
            {option}
          </li>
        )}
        ListboxProps={{
          style: {
            overflow: 'overlay',
          },
        }}
        sx={{
          width: '200px',
          [`& .${inputLabelClasses.root}`]: { color: 'primary.light' },
          [`& .${inputClasses.input}`]: {
            textAlign: 'center',
            marginLeft: '4px',
          },
          [`& .${inputClasses.root}:before`]: {
            borderBottom: 0,
          },
        }}
      />
    )
  }
}

export default CustomAutocomplete
