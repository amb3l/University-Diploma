import { Box, Button, Divider, Typography } from '@mui/material'
import React, { useContext } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { theme } from '../themes/theme';


interface ModalProps {
  children: React.ReactNode
  title: string
  handleClose: () => void
}

export const Modal = ({ children, title, handleClose }:ModalProps) => {
  return (
    <Box sx={{  }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'fixed',
        backgroundColor: theme.palette.primary.main,
        opacity: 0.5,
        zIndex: 1200,
      }}>
        <div 
          className='h-full w-full'
          onClick={handleClose}
        />
      </Box>

      <Box 
        sx={{
          backgroundColor: '#F0F1F5',
          borderRadius: 6,
          width: '432px',
          maxHeight: '80vh',
          zIndex: 1300,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          overflowX: 'hidden',
          overflowY: 'scroll',
          '&::-webkit-scrollbar': { width: 'none', display: 'none' }
        }}
      >

        <Box sx={{
          borderRadius: 6,
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          position: 'sticky',
          pl: 4,
          pr: 3,
          pt: 3,
          pb: 2,
          mb: 1
        }}>
          <Typography variant='h5' fontWeight={500}>
            {title}
          </Typography>

          <Button
            sx={{
              borderRadius: '40%',
              minWidth: 'auto',
              color: 'grey'
            }}
            onClick={handleClose}
          >
            <CloseRoundedIcon />
          </Button>
        </Box>
        {/* <Divider/> */}

        {children}
      </Box>
    </Box>
  )
}
