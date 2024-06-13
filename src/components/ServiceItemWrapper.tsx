import { Box, SvgIconTypeMap, Typography } from '@mui/material'
import React from 'react'

export const ServiceItemWrapper = (
  { firstContent, 
    secondContent, 
    title, 
    icon,
    thirdContent,
    fourthContent
  }: 
  { title: string, 
    icon: React.ReactNode, 
    firstContent?: React.ReactNode, 
    secondContent?: React.ReactNode,
    thirdContent?: React.ReactNode,
    fourthContent?: React.ReactNode
  }) => {


  return (
    <Box width={'100%'}
      sx={{
        backgroundColor: 'white',
        filter: 'drop-shadow(0 30px 25px rgb(50 0 0 / 0.15))',
        borderRadius: '1.5rem',
        padding: '1rem'
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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

        <Box sx={{
        }}>
          { fourthContent || null}
        </Box>

      </Box>
    </Box>
  )
}
