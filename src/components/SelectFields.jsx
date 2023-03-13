import { FormControl, Menu, MenuItem, TextField } from '@mui/material'
import React from 'react'

function SelectFields({label}) {
  return (
   <FormControl fullWidth sx={{mb:'1rem'}}>
    <TextField select label={label} required variant='filled'>

<MenuItem value=''>None</MenuItem>
<MenuItem  value='USA'>USA</MenuItem>
<MenuItem value='India'>India</MenuItem>

    </TextField>

   </FormControl>
  )
}

export default SelectFields