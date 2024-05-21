import React from 'react'
import { ServiceItemWrapper } from '../ServiceItemWrapper'
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox'

export const DetailsBlock = () => {
  return (
    
    <ServiceItemWrapper 
      title='Отправление'
      icon={<MarkunreadMailboxIcon/>}

    />
  )
}
