import { AppBar, Box, Button, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import React from 'react'

const Header = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        borderRadius: '0px 0px 16px 16px',
        opacity: 0.9
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1.5, px: 18}}>
        <Box 
          width={'auto'}
          display={'flex'}
          alignItems={'center'}
        >
          <Box 
            width={'auto'}
            display={'flex'}
            alignItems={'center'}
            sx={{ mr: 8}}
          >
            <AdbIcon 
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                mr: 0, 
                mb: 0.5,
                ml: 2,
                fontSize: 34
              }}
            />
            <Typography variant="h6" component="div" sx={{ fontSize: 34 }}>
              RoboLivery
            </Typography>
          </Box>
          
          <Button 
            variant='text'
            size='large'
            sx={[
              { borderRadius: '24px', mr: 2, color: 'white'},
              (theme) => ({
                '&:hover': {
                  backgroundColor: 'GrayText'
                },
              }),
            ]}
          > Услуги
          </Button>

          <Button 
            variant='text'
            size='large'
            sx={[
              { borderRadius: '24px', mr: 2, color: 'white'},
              (theme) => ({
                '&:hover': {
                  backgroundColor: 'GrayText'
                },
              }),
            ]}
          > Отзывы
          </Button>

          <Button 
            variant='text'
            size='large'
            sx={[
              { borderRadius: '24px', mr: 2, color: 'white'},
              (theme) => ({
                '&:hover': {
                  backgroundColor: 'GrayText'
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
                backgroundColor: 'GrayText'
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