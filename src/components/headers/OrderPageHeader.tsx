import { AppBar, Box, Button, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import React, { useContext, useEffect, useState } from 'react'
import { theme } from '../../themes/theme';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../../hooks/useAuth';

const OrderPageHeader = () => {
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
    <AppBar position="fixed" sx={{opacity: 0.95, background: 'linear-gradient(90deg, #312d28 60%, #534F47 90%)'}}>
      <Toolbar sx={{ justifyContent: 'space-between', py: '1rem', px: '2rem !important'}}>
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

export default OrderPageHeader