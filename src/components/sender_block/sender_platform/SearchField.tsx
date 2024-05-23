import { Autocomplete, Input, TextField } from '@mui/material'
import { useContext, useState } from 'react'
import { OrderContext } from '../../../context/OrderContext'

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  }
]


export const SearchField = () => {
  const [inputValue, setInputValue] = useState('')
  const { setSenderPlatform } = useContext(OrderContext)

  const handleOnChange = (e: React.SyntheticEvent, value: string) => {
    setInputValue(value)
    setSenderPlatform(value)
  }

  return (
    <Autocomplete
      id="sender-platform"
      options={top100Films}
      disableClearable

      inputValue={ inputValue }
      onInputChange={ handleOnChange }
      
      sx={{width: '500px', marginLeft: 'auto'}}
            
      renderInput={(params) => 
      <TextField {...params} 
        placeholder='Выберите платформу приёма'
        
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
