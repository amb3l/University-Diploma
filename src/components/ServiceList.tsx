import { Box, Typography } from '@mui/material'
import { SenderBlock } from './sender_block/SenderBlock'
import { ReceiverBlock } from './receiver_block/ReceiverBlock'

export const ServiceList = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}
    >

      <SenderBlock />
      <ReceiverBlock />
      
    </Box>
  )
}
