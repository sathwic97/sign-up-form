import { Avatar, Box, InputAdornment, Typography } from '@mui/material'
import React from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import TextFields from '../components/TextFields';
import SelectFields from '../components/SelectFields';

function RegisterForm() {
  return (
    <Box sx={{display:"flex", flexDirection:"column", mt:"4rem", alignItems:"center" }}>
        <Avatar sx={{backgroundColor: 'lightBlue' }}>
<HowToRegIcon />
        </Avatar>
        <Typography component='h1' >Sign up</Typography>

        <Box component='form' sx={{width:'100%',mt:"2rem"}}>
            <TextFields label="Full Name"/>
            <TextFields label="Email"/>
            <TextFields label="Mobile Number" inputProps={{
                startAdornment: <InputAdornment position='start' >+91</InputAdornment>,
                type:"number"
            }} />
<SelectFields label='Country' />
<TextFields label="Password"/>
<TextFields label="Confirm Password"/>
        </Box>
    </Box>
  )
}

export default RegisterForm