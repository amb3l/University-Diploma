import { Box } from '@mui/material'
import React from 'react'

export const ServicePanelWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box  width={'800px'} 
      sx={{
        position: 'absolute',
        zIndex: 1000,
        insetBlock: 0,
        bottom: 0,
        insetInlineStart: '16px',
        marginBlock: '16px',
        marginBottom: '16px',
        marginTop: '16px',
        overflow: 'hidden',
        paddingBottom: '16px',
        paddingTop: '73px',
        top: 0,
      }}
    >
      { children }
    </Box>
  )
}