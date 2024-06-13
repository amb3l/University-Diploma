import { Box, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { OrderContext } from '../../../context/OrderContext'


export const SenderEmail = () => {
  const [value, setValue] = useState('')
  const { setSenderEmail } = useContext(OrderContext)

  const handleOnChange = (e: any) => {
    setValue(e.target.value)
  }
  

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', my: '0.5rem' }}>
      <Typography paddingLeft={'40px'} fontWeight={'500'} >Email отправителя</Typography>

      <TextField 
        id='sender-email'
        onChange={handleOnChange}
        value={ value }
        variant='outlined'
        placeholder="Email"
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
