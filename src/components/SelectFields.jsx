import { FormControl, Menu, MenuItem, TextField } from '@mui/material'
import React from 'react'

function SelectFields({label}) {
  return (
   <FormControl fullWidth sx={{mb:'1rem'}}>
    <TextField select label={label} variant='filled'>

<MenuItem>None</MenuItem>

    </TextField>

   </FormControl>
  )
}

export default SelectFields