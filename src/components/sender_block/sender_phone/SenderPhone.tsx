import { Box, Typography } from '@mui/material'
import MuiPhoneNumber from 'mui-phone-number'
import React, { useState } from 'react'
import { useCities } from '../../../hooks/cities'


export const SenderPhone = () => {
  const [value, setValue] = useState('')
  //const {} = useCities()

  const handleOnChange = (s: string) => {
    setValue(s)
  }
  

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: '0.5rem' }}>
      <Typography paddingLeft={'40px'} fontWeight={'500'} >Отправитель</Typography>

      <MuiPhoneNumber 
        id='sender-phone'
        defaultCountry={'ru'} 
        onChange={(str) => handleOnChange(str as string) }
        value={ value } 
        disableDropdown
        variant='outlined'
        placeholder="Телефон"
        size='small'
        InputProps={{ 
          sx: { 
            borderRadius: '16px',
            backgroundColor: '#efefee',
            py: '0.2rem',
          } 
        }}
        sx={{
          marginLeft: 'auto',
          width: '500px',
        }}
      />
    </Box>
  )
}
