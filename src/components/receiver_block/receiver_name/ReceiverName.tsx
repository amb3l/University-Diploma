import { Box, TextField } from '@mui/material'
import React, { ChangeEvent, useContext, useState } from 'react'
import { OrderContext } from '../../context/OrderContext'

export const ReceiverName = () => {
  const { setReceiverName } = useContext(OrderContext)
  const [name, setName] = useState('')

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    setReceiverName(e.target.value)
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center',
      mt: '0.5rem',
      }}
    >
      <Box sx={{ width: '500px', marginLeft: 'auto', display: 'flex', justifyContent: 'space-between', mt: '0.5rem' }}>
        <TextField
          onChange={handleFirstNameChange}
          value={name}

          label='Имя'
          size='small'
          sx={{ 
            flexGrow: '1',
            pr: '0.2rem',
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              backgroundColor: '#efefee',
              py: '0.2rem'
            },
            "& .MuiAutocomplete-inputRoot": {
            },
            "& .MuiInputLabel-outlined": {
            }
          }}
        />
        <TextField
          label='Фамилия'
          size='small'
          sx={{
            flexGrow: '1',
            pl: '0.5rem',
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              backgroundColor: '#efefee',
              py: '0.2rem'
            },
            "& .MuiAutocomplete-inputRoot": {
            },
            "& .MuiInputLabel-outlined": {
              ml: '0.5rem'
            }
          }}
        />
      </Box>
    </Box>
  )
}
