import {
  Autocomplete,
  Popper,
  TextField,
  autocompleteClasses,
  inputClasses,
  inputLabelClasses,
  styled,
} from '@mui/material'
import React, { FC, useState } from 'react'

type Props = {
  id: string
  value: string
  setValue: (value: string) => void
  options: string[]
}

const CustomAutocomplete: FC<Props> = ({ id, value, setValue, options }) => {
  const [inputValue, setInputValue] = useState(value)

  return (
    <Autocomplete
      disablePortal
      fullWidth
      disableClearable
      id={id}
      forcePopupIcon={false}
      renderInput={(params) => <TextField {...params} variant="standard" />}
      options={options}
      value={value}
      inputValue={inputValue}
      onChange={(_: any, newValue: string | null) => setValue(newValue ?? '')}
      onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
      componentsProps={{
        paper: {
          sx: {
            borderRadius: '10px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
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
        // paddingLeft: '20px',
        // paddingRight: '20px',
      }}
    />
  )
}

export default CustomAutocomplete
