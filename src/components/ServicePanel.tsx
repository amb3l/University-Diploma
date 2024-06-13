import { Box, Button, Typography } from '@mui/material'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ServiceList } from './ServiceList'
import { theme } from '../themes/theme'

export const ServicePanel = ({ onSubmit }: { onSubmit: () => void }) => {
  const [isScrolledDown, setIsScrolledDown] = useState(false)
  const elementRef = useRef(null)

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }
  
  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current
      if (element) {
        const scrollTop = element.scrollTop
        const scrollHeight = element.scrollHeight - element.clientHeight

        if ((scrollTop + 2) >= scrollHeight) {
          setIsScrolledDown(true)
        } else {
          setIsScrolledDown(false)
        }
      }
    }

    if (elementRef.current) {
      elementRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (elementRef.current) {
        elementRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <Box
      ref={elementRef}
      sx={{
        borderRadius: '24px',
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'scroll',
        position: 'relative',
        boxShadow: '25px 25px 40px -3px rgb(90 60 2 / 0.12), -25px 25px 40px -3px rgb(50 0 0 / 0.1)',
        '&::-webkit-scrollbar': { width: 'none', display: 'none' },
        width: '100%',
      }}
    >
      <form onSubmit={submitHandler}>
        <ServiceList />
      
        <Box
          sx={{ 
            padding: '0.5rem',
            filter: !isScrolledDown ? 'drop-shadow(0 -4px 20px rgba(0,0,0,.12))' : 'none',
            position: 'sticky',
            bottom: 0,
            backgroundColor:'white',
            borderRadius: '24px',
            marginTop: '0.5rem'
          }}
        >
          <Button 
            type='submit'
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
                <Typography  marginBottom={'-0.5rem'} fontWeight={'500'} >
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
      </form>
    </Box>
  )
}

