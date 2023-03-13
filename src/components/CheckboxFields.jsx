import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

function CheckboxFields({label}) {
  return (
    <FormControlLabel aria-required control={<Checkbox defaultChecked/> } label={label} />

    
  )
}

export default CheckboxFields