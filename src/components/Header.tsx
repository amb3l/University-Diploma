import { AppBar, Box, Button, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import React from 'react'
import { theme } from '../themes/theme';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between', py: '1rem' }}>
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
            > Отзывы
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

        <Button 
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
        
      </Toolbar>
    </AppBar>
  )
}

export default Header