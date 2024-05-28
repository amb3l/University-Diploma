import { Avatar, Box, Button, CircularProgress, Typography } from '@mui/material'
import { Modal } from '../../Modal'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { ModalItemWrapper } from './ModalItemWrapper'
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import { theme } from '../../../themes/theme'
import { useNavigate } from 'react-router'


export const EditUserModal = ({handleClose}: {handleClose: () => void}) => {
  const { currentUserData, logout } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [file, setFile] = useState(null)
  const navigate = useNavigate()

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleUpload = () => {
    // Отправить файл на сервер
    // setIsLoading()
    console.log('Загружаемый файл:', file);
  }


  return (
    <Modal title={'Ваши данные'} handleClose={handleClose}>
      <Box display={'flex'} flexDirection={'column'} gap={1}>

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
              opacity: 0.4,
              zIndex: '1100'
            }}
          >
            <CircularProgress sx={{color: theme.palette.success.light}} />
          </Box>
          : null
        }

        <ModalItemWrapper>
          <>
            <Box 
              sx={{
                ml: 'auto',
                mr: 'auto',
              }}
              display="flex" 
              flexDirection="column" 
              alignItems="center" 
              gap={2}
            >
              <Avatar
                alt={currentUserData.name}
                src={`https://avatar.iran.liara.run/public/boy`}
                sx={{ width: 120, height: 120 }}
              />

              <Box sx={{ display: 'flex', alignItems: 'center' }}>

                {currentUserData.isConfirmed ? null : 
                  <WarningAmberRoundedIcon fontSize='small' color='secondary' sx={{mr: 0.5}}/>
                }
                <Typography variant="h5" fontWeight={500}>
                  {currentUserData.name}
                </Typography>
              </Box>
              {currentUserData.isConfirmed ? null : 
                <Typography 
                  variant='caption' 
                  color={theme.palette.text.secondary} 
                  align='center'
                  mt={-1}
                  mb={1}
                >
                  *Ваш аккаунт не подтвержден. <br/>
                  Чтобы подтвердить аккаунт, загрузите фото паспорта.
                </Typography>
              }
            </Box>
            <Box>
              <Typography variant="body1">
                {currentUserData.email}
              </Typography>
            </Box>
          </>
        </ModalItemWrapper>

        
        <ModalItemWrapper>
          <>
            <Typography sx={{ mr: 'auto', mb: 3 }} variant='h6'>
              Загрузить фото паспорта
            </Typography>
            <Box sx={{ width: '100%' }}>

              <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
                <Button variant='outlined' component="label" 
                  sx={{
                    textTransform: 'none',
                    borderRadius: 4,
                    borderWidth: 2,
                    borderColor: '#ccccd4',
                    ":hover": {
                      borderWidth: 2
                    }
                  }}
                >
                  Выбрать файл
                  <input
                    type="file"
                    hidden
                    onChange={handleFileChange}
                  />
                </Button>

                { file && 
                  <Typography 
                    align='right'
                    maxWidth={'50%'}
                    maxHeight={'2rem'} 
                    whiteSpace={'nowrap'} 
                    textOverflow={'ellipsis'}
                    overflow={'hidden'}
                  >
                    {file.name}
                  </Typography>
                }
              </Box>

              <Button 
                disabled={!file}
                variant='contained'
                fullWidth 
                onClick={handleUpload} 
                sx={{
                  textTransform: 'none',
                  mt: 4,
                  boxShadow: 'none',
                  borderRadius: 4
                }} 
              >
                Загрузить
              </Button>

            </Box>
          </>
        </ModalItemWrapper>

        <ModalItemWrapper>
          <Button 
            variant='contained'
            fullWidth 
            onClick={() => { logout(); navigate('/'); }} 
            sx={{
              backgroundColor: theme.palette.error.main,
              ':hover': {
                backgroundColor: theme.palette.error.main,
              },
              textTransform: 'none',
              boxShadow: 'none',
              borderRadius: 4
            }}  
          >
            Выйти из аккаунта
          </Button>
        </ModalItemWrapper>
      </Box>
    </Modal>
  )
}
