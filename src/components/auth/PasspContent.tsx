import { Box } from '@mui/material'
import React from 'react'

export const PasspContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        width: '400px',
      }}
    >
      {children} 
    </Box>
  )
}
