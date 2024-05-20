import { Box, SvgIconTypeMap, Typography } from '@mui/material'
import React from 'react'

export const ServiceItemWrapper = (
  { firstContent, 
    secondContent, 
    title, 
    icon,
    thirdContent
  }: 
  { title: string, 
    icon: React.ReactNode, 
    firstContent?: React.ReactNode, 
    secondContent?: React.ReactNode,
    thirdContent?: React.ReactNode 
  }) => {


  return (
    <Box width={'100%'}
      sx={{
        backgroundColor: 'white',
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        borderRadius: '24px',
        padding: '16px'
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '2.5rem'}}>
            { icon }
          </Box>
          <Typography variant='h5' fontWeight={500}>
            { title }
          </Typography>
        </Box>

        <Box sx={{
        }}>
          { firstContent || null }
        </Box>

        <Box sx={{
        }}>
          { secondContent || null}
        </Box>

        <Box sx={{
        }}>
          { thirdContent || null}
        </Box>

      </Box>
    </Box>
  )
}
