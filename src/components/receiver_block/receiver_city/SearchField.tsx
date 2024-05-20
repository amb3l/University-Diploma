import { Autocomplete, Input, TextField } from '@mui/material'

export const SearchField = () => {
  return (
    <Autocomplete
      disablePortal
      id="receiver-city"
      options={[]}
      disableClearable
      
      sx={{width: '500px', marginLeft: 'auto'}}
            
      renderInput={(params) => 
      <TextField {...params} 
        placeholder='Введите город или регион'
        
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "16px",
            backgroundColor: '#efefee',
            py: '0.3rem'
          },
          "& .MuiAutocomplete-inputRoot": {
          },
          "& .MuiInputLabel-outlined": {
          }
        }}
      />}
    />
  )
}
