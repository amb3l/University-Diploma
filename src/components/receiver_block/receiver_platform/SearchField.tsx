import { Autocomplete, Input, TextField } from '@mui/material'
import { useContext, useState } from 'react'
import { OrderContext } from '../../../context/OrderContext'


export const SearchField = () => {
  const [inputValue, setInputValue] = useState('')
  const { setReceiverPlatform } = useContext(OrderContext)

  const handleOnChange = (e: React.SyntheticEvent, value: string) => {
    setInputValue(value)
    setReceiverPlatform(value)
  }

  return (
    <Autocomplete
      id="receiver-platform"
      options={[{label: 'LABEL'}, {label: 'LABEL2'}]}
      disableClearable

      inputValue={ inputValue }
      onInputChange={ handleOnChange }
      
      sx={{width: '500px', marginLeft: 'auto'}}
            
      renderInput={(params) => 
      <TextField {...params} 
        placeholder='Выберите платформу выдачи'
        
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
