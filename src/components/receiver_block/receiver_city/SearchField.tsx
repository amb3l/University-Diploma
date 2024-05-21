import { Autocomplete, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { DaDataAddress, DaDataSuggestion } from 'react-dadata'

const url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address"
const token = "1eaec91f22f5aca7c67aa836755b704617bb1815"

interface Response {
  suggestions: DaDataSuggestion<DaDataAddress>[]
}

interface SuggestionItem {
  id: any
  label: string
}

const extractValues = (data: Response): SuggestionItem[] => {
  return data.suggestions.map((item, index) => ({
    label: item.value,
    id: index
  }))
}

export const SearchField = () => {
  const [loading, setLoading] = useState(false)
  const [prompts, setPrompts] = useState<SuggestionItem[]>([])
  const [inputValue, setInputValue] =  useState('')
  
  
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: JSON.stringify({
      query: inputValue,
      from_bound: { value: "city" },
      to_bound: { value: "city" }  
    })
  }

  const handleOnChange = (e: React.SyntheticEvent, value: string) => {
    setLoading(false)
    setInputValue(value)
  }


  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      setLoading(true)
      await fetch(url, (options as RequestInit))
              .then(response => response.text())
              .then(result => handleResult(result))
              .catch(error => console.log("error", error))
      setLoading(false)
    }, 700)
    return () => clearTimeout(delayDebounceFn)
  }, [inputValue])


  const handleResult = (result: any) => {
    const obj: Response = JSON.parse(result)
    
    // CONSOLE
    console.log(obj)
    setPrompts(extractValues(obj))
  }


  return (
    <Autocomplete
      autoComplete={false}
      disablePortal
      id="reciever-city"
      options={ prompts }
      disableClearable

      loading={loading}

      inputValue={ inputValue }
      onInputChange={ handleOnChange }
      isOptionEqualToValue={(option, value) => option.id === value.id}

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
