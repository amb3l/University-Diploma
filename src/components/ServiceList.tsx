import { ServiceSender } from '../components/ServiceSender'
import { ServiceItemWrapper } from '../components/ServiceItemWrapper'
import { Box } from '@mui/material'

export const ServiceList = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}
    >
      <ServiceItemWrapper title='Откуда'>
        <ServiceSender/>
      </ServiceItemWrapper>
      <ServiceItemWrapper title='Откуда'>
        <ServiceSender/>
      </ServiceItemWrapper>
      <ServiceItemWrapper title='Откуда'>
        <ServiceSender/>
      </ServiceItemWrapper>
      <ServiceItemWrapper title='Откуда'>
        <ServiceSender/>
      </ServiceItemWrapper>
      <ServiceItemWrapper title='Откуда'>
        <ServiceSender/>
      </ServiceItemWrapper>
      <ServiceItemWrapper title='Откуда'>
        <ServiceSender/>
      </ServiceItemWrapper>
      <ServiceItemWrapper title='Откуда'>
        <ServiceSender/>
      </ServiceItemWrapper>
      <ServiceItemWrapper title='Откуда'>
        <ServiceSender/>
      </ServiceItemWrapper>
      <ServiceItemWrapper title='Откуда'>
        <ServiceSender/>
      </ServiceItemWrapper>
    </Box>
    
  )
}
