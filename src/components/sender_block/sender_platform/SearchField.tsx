import { Autocomplete, Input, TextField } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../../context/OrderContext'
import { geojson } from '../../../data/drone-platforms'
import { SuggestionItem } from '../sender_city/SearchField'


export const SearchField = () => {
  const [inputValue, setInputValue] = useState('')
  const { setSenderPlatform } = useContext(OrderContext)
  const [prompts, setPrompts] = useState<SuggestionItem[]>([])

  const handleOnChange = (e: React.SyntheticEvent, value: string) => {
    setInputValue(value)
    setSenderPlatform(value)
  }

  useEffect(() => {
    extractValues()
  }, [])

  const extractValues = async () => {
    // const featureCollection: GeoJSON.FeatureCollection = geojson

    const suggestionItems: SuggestionItem[] = geojson.features.map((feature) => ({
      id: feature.properties.PLATFORM_ID,
      label: feature.properties.NAME,
    }))

    setPrompts(suggestionItems)
  }


  return (
    <Autocomplete
      id="sender-platform"
      options={ prompts }
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
