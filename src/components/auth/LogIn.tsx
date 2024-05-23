import { Box, Button, TextField, Typography } from '@mui/material'
import { title } from 'process'
import React, { useCallback, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'


export const LogIn = () => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [isLoading, setIsLoadin] = useState(false)
  

  const handleLoggingIn = () => {

  }

  const handleBackClick = () => {

  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value)
  }

  const handleEmailError = useCallback(() => {
    return false
  }, [emailValue])

  const handlePasswordError = useCallback(() => {
    return false
  }, [passwordValue])

  return (
    <Box width={'100%'}
      sx={{
        backgroundColor: 'white',
        filter: 'drop-shadow(0 30px 25px rgb(50 0 0 / 0.15))',
        borderRadius: '1.5rem',
        padding: '2rem'
      }}
    >
      {}

      <Button
        sx={{
          position: 'absolute',
          borderRadius: '50%',
          minWidth: 'auto',
          padding: '0.5rem',
          top: '1.7rem',
          left: '1rem'
        }}
        onClick={handleBackClick}
      >
        <ArrowBackIcon />
      </Button>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: '3rem' }}>
        <Typography variant='h5' fontWeight={500}>
          Войдите в аккаунт
        </Typography>
      </Box>
      
      <Box my='0.5rem'>
        <TextField
          error={handleEmailError()}
          helperText='Неверный email'
          value={emailValue}
          onChange={handleEmailChange}
          placeholder='Введите email'
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "1.5rem",
              backgroundColor: '#efefee',
              fontSize: '1.2rem',
              pl: '0.5rem'
            }
          }}
        />
      </Box>

      <Box my='0.5rem'>
        <TextField
          error={handlePasswordError()}
          helperText='Неверный пароль'
          value={passwordValue}
          onChange={handlePasswordChange}
          placeholder='Введите пароль'
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "1.5rem",
              backgroundColor: '#efefee',
              fontSize: '1.2rem',
              pl: '0.5rem'
            }
          }}
        />
      </Box>

      <Box mt='3rem'>
        <Button
          onClick={handleLoggingIn}
          fullWidth
          variant='outlined'
          sx={[
            { borderRadius: '1.5rem',
            textTransform: 'none',
            height: '60px',},
            (theme) => ({
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: 'white'
              },
            }),
          ]}
        >
          <Typography fontWeight='500'>
            Войти
          </Typography>
        </Button>
      </Box>
      
    </Box>
  )
}
