import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import { title } from 'process'
import React, { useCallback, useContext, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {useNavigate} from 'react-router-dom'
import axios, { AxiosError } from 'axios'
import ErrorIcon from '@mui/icons-material/Error';
import { theme } from '../../themes/theme'
import { AuthResponse } from './Registration'
import { AuthContext } from '../../context/AuthContext'


export const LogIn = () => {
  const [error, setError] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)
  

  const handleLogIn = async () => {
    try {
      setIsLoading(true)
      await login(emailValue, passwordValue)
      setIsLoading(false)
      navigate('/')
      
    } catch (e: unknown) {
      setIsLoading(false)
      const error = e as AxiosError
      setError(error.message)
      console.log(error)
    }
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value)
  }


  return (
    <Box width={'100%'}
      sx={{
        backgroundColor: 'white',
        filter: 'drop-shadow(0 30px 25px rgb(50 0 0 / 0.15))',
        borderRadius: '1.5rem',
        padding: '2rem'
      }}
    >

      { isLoading ?
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 'inherit',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            position: 'fixed',
            backgroundColor: 'black',
            opacity: 0.5,
            zIndex: '1100'
          }}
        >
          <CircularProgress sx={{color: theme.palette.success.light}} />
        </Box>
        : null
      }

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
      {error.length ?
        <Box
          sx={{
            color: theme.palette.error.light,
            position: 'absolute',
            borderRadius: '50%',
            minWidth: 'auto',
            padding: '0.5rem',
            top: '1.7rem',
            right: '1rem'
          }}
        > 
          <ErrorIcon />
        </Box>
        : null
      } 
      
      <Box my='0.5rem'>
        <TextField
          error={ error.length ? true : false }
          helperText={ error.length ? '' : error }
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
          error={ error.length ? true : false }
          helperText={ error.length ? '' : error }
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
          onClick={handleLogIn}
          fullWidth
          variant='outlined'
          sx={[
            { 
              borderRadius: '1.5rem',
              textTransform: 'none',
              height: '60px',
              backgroundColor: theme.palette.primary.main,
              color: 'white'
            },
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

      <Box mt='0.5rem'>
        <Button
          onClick={() => navigate('/auth/reg')}
          fullWidth
          variant='outlined'
          sx={[
            { borderRadius: '1.5rem',
            textTransform: 'none',
            height: '60px',},
            (theme) => ({
              '&:hover': {
                backgroundColor: '#efefee',
              },
            }),
          ]}
        >
          <Typography fontWeight='500'>
            Создать аккаунт
          </Typography>
        </Button>
      </Box>
      
    </Box>
  )
}
