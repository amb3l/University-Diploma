import { AppBar, Box, Button, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import React from 'react'

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between', py: 2, px: 18}}>
        <Box 
          width={'auto'}
          display={'flex'}
          alignItems={'center'}
        >
          <Box 
            width={'auto'}
            display={'flex'}
            alignItems={'center'}
            sx={{ mr: 4}}
          >
            <AdbIcon 
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                mr: 0, 
                mb: 0.5,
                ml: 1,
                fontSize: 30
              }}
            />
            <Typography variant="h6" component="div" sx={{ fontSize: 30, mr: -1 }}>
              RoboLivery
            </Typography>
          </Box>
          
          <Button 
            variant='text'
            size='large'
            sx={[
              { borderRadius: '24px', color: 'lightgray'},
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
              { borderRadius: '24px', color: 'lightgray'},
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
              { borderRadius: '24px', color: 'lightgray'},
              (theme) => ({
                '&:hover': {
                  color: 'white'
                },
              }),
            ]}
          > Че-то ещё
          </Button>
        </Box>

        <Button 
          variant='contained'
          size='large'
          sx={[
            { color: 'InfoText', borderRadius: '24px', backgroundColor: 'white', mr: 2},
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

// borderRadius: '24px',
//             backgroundColor: 'white',
//             color: 'InfoText'