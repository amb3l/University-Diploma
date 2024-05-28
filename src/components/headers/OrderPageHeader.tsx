import { AppBar, Box, Button, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import SmartToyIcon from '@mui/icons-material/SmartToy';
import React, { useContext, useEffect, useState } from 'react'
import { theme } from '../../themes/theme';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const OrderPageHeader = () => {
  const { currentUserData } = useContext(AuthContext)
  const navigate = useNavigate()

  const [name, setName] = useState('')


  useEffect(() => {
    if(currentUserData) {
      setName(currentUserData.name)
    }
  }, [currentUserData])

  
  return (
    <AppBar position="fixed" sx={{opacity: 0.92, background: 'linear-gradient(90deg, #312d28 60%, #534F47 90%)'}}>
      <Toolbar sx={{ justifyContent: 'space-between', py: '0.5rem', px: '2rem !important'}}>
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
            <SmartToyIcon sx={{mb: 0.5, mr: 0.5}} />
            <Typography variant='h5'>
              RoboLivery
            </Typography>
          </Box>
          
          <Box>  
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

        { currentUserData ?
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