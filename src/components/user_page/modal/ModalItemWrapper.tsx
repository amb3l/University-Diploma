import { Box } from '@mui/material'
import React from 'react'

export const ModalItemWrapper = ({children}: {children: React.ReactElement}) => {
  return (
    <Box sx={{
      display: 'flex', 
      alignItems: 'center', 
      flexDirection: 'column',
      gap: 1,
      backgroundColor: 'white',
      borderRadius: 6,
      p: 4
    }}> 
      {children}

    </Box>
  )
}
