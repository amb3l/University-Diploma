import { Box, Button, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { ServiceList } from './ServiceList'
import { theme } from '../themes/theme'

export const ServicePanel = () => {
  return (
    <Box
      sx={{
        borderRadius: '24px',
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'scroll',
        position: 'relative',
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        '&::-webkit-scrollbar': { width: 'none', display: 'none' },
        width: '100%'
      }}
    >
      <ServiceList />
    
      <Box 
        sx={{ 
          padding: '0.5rem',
          boxShadow:'0 -4px 20px rgba(0,0,0,.12)',
          position: 'sticky',
          bottom: 0,
          backgroundColor:'white',
          borderRadius: '24px',
          marginTop: '0.5rem'
        }}
      >
        <Button 
          fullWidth={true}
          sx={[
            { borderRadius: '16px', backgroundColor: '#efefee', textTransform: 'none' },
            (theme) => ({
              '&:hover': {
                backgroundColor: '#e3e2e2'
              }
            })
          ]}
        >
          <Box width={'100%'} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              px: '0.5rem',
              py: '0.2rem'
              }}
            >
            
            <Typography color={theme.palette.text.disabled} width={'6rem'}>
              3.45км.
            </Typography>
            <Box>
              <Typography  marginBottom={'-0.5rem'} fontWeight={'500'} color={theme.palette.text.disabled} >
                Заказать
              </Typography>
              <Typography variant='caption' color={theme.palette.text.disabled}>
                Заполните обязательные поля
              </Typography>
            </Box>
            
            <Typography color={theme.palette.text.disabled} width={'6rem'}>
              ~300$
            </Typography>

          </Box>
        </Button>
      </Box>
    </Box>
  )
}
