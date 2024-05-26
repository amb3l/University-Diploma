import { Box } from '@mui/material'
import React from 'react'

export const ServicePanelWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box  width={'850px'} 
      sx={{
        position: 'absolute',
        zIndex: 1000,
        insetBlock: 0,
        bottom: 0,
        insetInlineStart: '0rem',
        paddingLeft: '1rem',
        marginBlock: '1rem',
        marginBottom: '0',
        marginTop: '0px',
        paddingTop: '5rem',
        paddingBottom: '1rem',
        top: 0,
      }}
    >
      { children }
    </Box>
  )
}