import { Box, Typography } from '@mui/material'
import { SenderBlock } from './sender_block/SenderBlock'
import { ReceiverBlock } from './receiver_block/ReceiverBlock'
import { DetailsBlock } from './details_block/DetailsBlock'

export const ServiceList = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >

      <SenderBlock />
      <ReceiverBlock />
      <DetailsBlock />

    </Box>
  )
}
