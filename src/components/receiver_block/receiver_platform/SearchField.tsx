import { Autocomplete, Input, TextField } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../../context/OrderContext'
import { SuggestionItem } from '../../sender_block/sender_city/SearchField'
import { geojson } from '../../../data/drone-platforms'
import type {FeatureCollection} from 'geojson'


export const SearchField = () => {
  const [inputValue, setInputValue] = useState('')
  const { setReceiverPlatform } = useContext(OrderContext)
  const [prompts, setPrompts] = useState<SuggestionItem[]>([])

  const handleOnChange = (e: React.SyntheticEvent, value: string) => {
    setInputValue(value)
    setReceiverPlatform(value)
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
      id="receiver-platform"
      options={ prompts }
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
