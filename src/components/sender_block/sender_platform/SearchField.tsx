import { Input, TextField } from '@mui/material'

export const SearchField = () => {
  return (
    <TextField
      id="sender-platform"
      placeholder="Выберите платформу приёма" 
      type="search"
      size='small'
      InputProps={{ 
        sx: { 
          borderRadius: '16px',
          backgroundColor: '#efefee',
          py: '0.2rem',
        } 
      }}
      sx={{
        marginLeft: 'auto',
        width: '500px',
      }} 
    />
  )
}
