import { Box, Button, ButtonGroup, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import MuiPhoneNumber from 'mui-phone-number'
import React, { useContext, useState } from 'react'
import { theme } from '../../../themes/theme'
import { OrderContext } from '../../../context/OrderContext'

export const DetailsSize = () => {
  // Размер посылки
  const [alignment, setAlignment] = React.useState('Small');
  const { setDetailsSize } = useContext(OrderContext)

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment)
    setDetailsSize(newAlignment)
    console.log(alignment)
  }

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  }

  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', my: '0.5rem' }}>
      <Typography paddingLeft={'40px'} fontWeight={'500'} >Размер посылки</Typography>

      <ToggleButtonGroup
        {...control}
        size='large'
        fullWidth
        sx={{
          maxWidth: '500px',
          marginLeft: 'auto',
          boxShadow: 'none',
          borderRadius: '1rem',
          backgroundColor: '#f5f4f2',

          "& .MuiToggleButtonGroup-grouped": {
            borderRadius: '1rem',
            textTransform: 'none',
            m: '0.2rem',
            borderWidth: '0',
            padding: '0.5rem'
          },
          "& .MuiToggleButtonGroup-grouped:hover": {
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
          },
          "& .Mui-selected": {
            animationDuration: '300ms',
            animationName: 'select-button',
            backgroundColor: 'white !important',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            color: theme.palette.text.primary
          }
        }}
      >
        <ToggleButton 
          value={'Small'}
          key={'Small'}
          disableRipple
        >
          <Box>
            <Typography  marginBottom={'-0.5rem'} fontWeight={'600'} color='inherit'>
              S
            </Typography>
            <Typography variant='caption' color={theme.palette.text.disabled}>
              до 0.5 кг, размер А4
            </Typography>
          </Box>
        </ToggleButton>

        <ToggleButton 
          value={'Medium'}
          key={'Medium'}
          disableRipple
        >
          <Box>
              <Typography  marginBottom={'-0.5rem'} fontWeight={'600'} color='inherit'>
                M
              </Typography>
              <Typography variant="caption" color={theme.palette.text.disabled}>
                до 1 кг, 25х10х15 см
              </Typography>
          </Box>
        </ToggleButton>

        <ToggleButton 
          value={'Large'}
          key={'Large'}
          disableRipple
        >
          <Box>
              <Typography  marginBottom={'-0.5rem'} fontWeight={'600'} color='inherit'>
                L
              </Typography>
              <Typography variant='caption' color={theme.palette.text.disabled}>
                до 2 кг, 30х15х20 см
              </Typography>
          </Box>
        </ToggleButton>

      </ToggleButtonGroup>
    </Box>
  )
}
