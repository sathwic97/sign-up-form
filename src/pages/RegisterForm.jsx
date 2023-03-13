import { Avatar, Box, Button, InputAdornment, Typography } from '@mui/material';
import {useForm} from 'react-hook-form';
import React from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import TextFields from '../components/TextFields';
import SelectFields from '../components/SelectFields';
import CheckboxFields from '../components/CheckboxFields';

function RegisterForm() {
    const { control,handleSubmit } = useForm();

const onSubmit = (data) =>{
    console.log(data)
}


  return (
    <Box sx={{display:"flex", flexDirection:"column", mt:"4rem", alignItems:"center" }}>
        <Avatar sx={{backgroundColor: 'lightBlue' }}>
<HowToRegIcon />
        </Avatar>
        <Typography component='h1' >Sign up</Typography>

        <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{width:'100%',mt:"2rem"}}>
            <TextFields control={control} name='fullName'  label="Full Name"/>
            <TextFields control={control} name="email"  label="Email"/>
            <TextFields control={control} name="mobileNumber"  label="Mobile Number" inputProps={{
                startAdornment: <InputAdornment position='start' >+91</InputAdornment>,
                type:"number"
            }} />
<SelectFields control={control} label='Country' name="country" />
<TextFields control={control}  label="Password" name="password"/>
<TextFields  control={control} label="Confirm Password" name="confirmPassword" />
<CheckboxFields  label="I agree to the terms and conditions" />

<Button type='submit' fullWidth variant='contained' sx={{mt:3,mb:2}}>Sign Up</Button>
        </Box>
    </Box>
  )
}

export default RegisterForm