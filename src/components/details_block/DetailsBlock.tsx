import React from 'react'
import { ServiceItemWrapper } from '../ServiceItemWrapper'
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox'
import { DetailsSize } from './details_size/DetailsSize'

export const DetailsBlock = () => {
  return (
    
    <ServiceItemWrapper 
      title='Отправление'
      icon={ <MarkunreadMailboxIcon/> }
      firstContent={ <DetailsSize /> }

    />
  )
}
