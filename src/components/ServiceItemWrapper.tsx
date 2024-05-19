import { Box, Typography } from '@mui/material'
import React from 'react'

export const ServiceItemWrapper = ({ children, title }: { children: React.ReactNode, title: string }) => {
  return (
    <Box width={'100%'}
      sx={{
        backgroundColor: 'white',
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        borderRadius: '24px',
        padding: '2rem'
      }}
    >
      <Box>
        <Typography variant='h4'>
          { title }
        </Typography>
      </Box>
      
      { children }
    </Box>
  )
}
