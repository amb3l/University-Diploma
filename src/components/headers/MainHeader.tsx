import { AppBar, Box, Button, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { theme } from '../../themes/theme';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useAuth } from '../../hooks/useAuth';


export const MainHeader = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const { logout } = useAuth()

  const [name, setName] = useState('')
  

  useEffect(() => {
    if(user) {
      setName(user.name)
    }
  }, [user])


  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between', py: 2, px: '12rem !important'}}>
        <Box 
          width={'auto'}
          display={'flex'}
          alignItems={'center'}
        >
          <Box 
            width={'auto'}
            display={'flex'}
            alignItems={'center'}
            sx={{ mr: 4, ml: 0 }}
          >
            <AdbIcon 
              sx={{ 
                display: { xs: 'none', md: 'flex' }, 
                mb: 0.5,
                fontSize: 30,
              }}
            />
            <Typography variant='button' component="div" sx={{ fontSize: 28, mr: 0 }}>
              RoboLivery
            </Typography>
          </Box>
          
          <Box mt={ 0 }>  
            <Button 
              onClick={() => navigate('/order')}
              variant='text'
              size='large'
              sx={[
                { borderRadius: '4px', color: 'gray' },
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
                { borderRadius: '4px', color: 'gray' },
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
                { borderRadius: '4px', color: 'gray' },
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

        { user ?
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
            
            <div
              onClick={() => { logout(); navigate('/'); }}
            >
              <ExitToAppIcon
                fontSize='medium'
                sx={{
                  cursor: 'pointer'
                }}
              />
            </div>
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