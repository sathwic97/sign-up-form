import { FormControl, TextField } from '@mui/material'
import React from 'react'

function TextFields({label, inputProps}) {
  return (
   <FormControl fullWidth sx={{mb:'1rem'}}>
    <TextField label={label} variant='filled'
    InputProps={inputProps} required
    
    ></TextField>

   </FormControl>
  )
}

export default TextFields