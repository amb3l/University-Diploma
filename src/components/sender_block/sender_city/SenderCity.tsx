import { Box, Typography } from '@mui/material'
import { SearchField } from './SearchField'

export const SenderCity = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography paddingLeft={'40px'} fontWeight={'500'} >Город</Typography>
      <SearchField />
    </Box>
  )
}
