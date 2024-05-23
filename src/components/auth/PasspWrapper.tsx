import { Box } from '@mui/material'
import React from 'react'

export const PasspWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        zIndex: 1000,
        minHeight: '100%',
        minWidth: '100%'
      }}
    >
      {children}
    </Box>
  )
}
