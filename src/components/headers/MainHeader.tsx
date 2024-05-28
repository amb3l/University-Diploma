import { AppBar, Box, Button, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import SmartToyIcon from '@mui/icons-material/SmartToy';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { theme } from '../../themes/theme';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'


export const MainHeader = () => {
  const { currentUserData, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const [name, setName] = useState('')
  

  useEffect(() => {
    if(currentUserData) {
      setName(currentUserData.name)
    }
  }, [currentUserData])


  return (
    <AppBar position="fixed" sx={{ backgroundColor: theme.palette.primary.main }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 1, px: '2rem !important'}}>
        <Box
          width={'auto'}
          display={'flex'}
          alignItems={'center'}
        >
          <Box 
            width={'auto'}
            display={'flex'}
            alignItems={'center'}
            sx={{ mr: 3, pb: 0.5 }}
          >
            <SmartToyIcon sx={{mb: 0.5, mr: 0.5}}/>
            <Typography variant='h5'>
              RoboLivery
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2 }}>  
            <Button 
              onClick={() => navigate('/order')}
              variant='text'
              size='medium'
              sx={[
                { borderRadius: '4px', color: '#94949c' },
                (theme) => ({
                  '&:hover': {
                    color: 'white'
                  },
                }),
              ]}
            > Заказать
            </Button>

            <Button 
              onClick={() => navigate('/services')}
              variant='text'
              size='large'
              sx={[
                { borderRadius: '4px', color: '#94949c' },
                (theme) => ({
                  '&:hover': {
                    color: 'white'
                  },
                }),
              ]}
            > Услуги
            </Button>

            <Button 
              variant='text'
              size='large'
              sx={[
                { borderRadius: '4px', color: '#94949c' },
                (theme) => ({
                  '&:hover': {
                    color: 'white'
                  },
                }),
              ]}
            > Тарифы
            </Button>
          </Box>

        </Box>

        { currentUserData ?
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              cursor: 'pointer'
            }}
          >
            <Box 
              onClick={()=> { navigate('/me') }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }}
            >
              <Typography>
                { name }
              </Typography>

              <AccountCircleIcon fontSize='large' />
            </Box>
          </Box>
          :
          <Button 
            onClick={() => navigate('/auth')}
            variant='contained'
            size='large'
            sx={[
              { color: 'InfoText', borderRadius: '24px', backgroundColor: 'white'},
              (theme) => ({
                '&:hover': {
                  backgroundColor: 'lightgray'
                },
              }),
            ]}
          > Войти
          </Button>
        }
        
      </Toolbar>
    </AppBar>
  )
}