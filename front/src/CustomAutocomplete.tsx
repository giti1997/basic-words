import { Autocomplete, Popper, TextField } from '@mui/material'
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
      options={options}
      // PopperComponent={(props) => {
      //   console.log(props)
      //   return (
      //     <Popper
      //       {...props}
      //       style={{
      //         textAlign: 'center',
      //         width: props.style ? props.style.width : 0,
      //       }}
      //       // sx={{
      //       //   textAlign: 'center',
      //       //   width: '1000px',
      //       //   '& .MuiAutocomplete-popper': { textAlign: 'center' },
      //       // }}
      //     />
      //   )
      // }}
      // sx={{ paddingLeft: '20px', paddingRight: '20px' }}
      value={value}
      inputValue={inputValue}
      onChange={(_: any, newValue: string | null) => setValue(newValue ?? '')}
      onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
      sx={{
        '& .MuiAutocomplete-popper': { textAlign: 'center' },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          sx={{
            '& .MuiInputLabel-root': { color: 'primary.light' },
            '& .MuiInput-input': { textAlign: 'center' },
            '& .MuiInput-root:before': {
              borderBottom: 0,
            },
          }}
        />
      )}
    />
  )
}

export default CustomAutocomplete
