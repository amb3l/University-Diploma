import { Box, Typography } from '@mui/material'
import { SearchField } from './SearchField'

export const SenderPlatform = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', my: '0.5rem' }}>
      <Typography paddingLeft={'40px'} fontWeight={'500'} >Платформа приёма</Typography>
      <SearchField />
    </Box>
  )
}
