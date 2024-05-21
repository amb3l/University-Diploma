import React from 'react'
import { ServiceItemWrapper } from '../ServiceItemWrapper'
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox'
import { DetailsSize } from './details_size/DetailsSize'
import { DetailsType } from './details_type/DetailsType'
import { theme } from '../../themes/theme'

export const DetailsBlock = () => {
  return (
    
    <ServiceItemWrapper 
      title='Отправление'
      icon={ <MarkunreadMailboxIcon sx={{ color: theme.palette.primary.main }}/> }
      firstContent={ <DetailsSize /> }
      secondContent={ <DetailsType /> }
    />
  )
}
