import { Box, Typography } from '@mui/material'
import MuiPhoneNumber from 'mui-phone-number'
import React, { useContext, useState } from 'react'
import { OrderContext } from '../../../context/OrderContext'


export const ReceiverPhone = () => {
  const [value, setValue] = useState('')
  const { setReceiverPhone } = useContext(OrderContext)

  const handleOnChange = (s: string) => {
    setValue(s)
    setReceiverPhone(s)
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', my: '0.5rem' }}>
      <Typography paddingLeft={'40px'} fontWeight={'500'} >Получатель</Typography>

      <MuiPhoneNumber 
        id='receiver-phone'
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
