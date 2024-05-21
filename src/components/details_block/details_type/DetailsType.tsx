import { Box, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { OrderContext } from '../../context/OrderContext'

export const DetailsType = () => {
  const [type, setType] = useState('')
  const { setDetailsType } = useContext(OrderContext)

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string)
    setDetailsType(event.target.value as string)
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: '0.5rem' }}>
      <Typography paddingLeft={'40px'} fontWeight={'500'} >Что внутри</Typography>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={ type }
        onChange={ handleChange }
        size='small'
        sx={{ 
          width: '500px', 
          marginLeft: 'auto',
          backgroundColor: '#f5f4f2',
          borderRadius: '1rem',
          py: '0.2rem',
          "& .Mui-root": {
            borderRadius: "16px",
            backgroundColor: '#efefee',
          },
        }}
      >
        <MenuItem value={'Автотовары'}>Автотовары</MenuItem>
        <MenuItem value={'Кулинария'}>Кулинария</MenuItem>
        <MenuItem value={'Документы'}>Документы</MenuItem>
        <MenuItem value={'Медицинские товары'}>Медицинские товары</MenuItem>
        <MenuItem value={'Цветы'}>Цветы</MenuItem>
        <MenuItem value={'Детские товары'}>Детские товары</MenuItem>
        <MenuItem value={'Товары повседневного спроса'}>Товары повседневного спроса</MenuItem>
        <MenuItem value={'Товары для праздника'}>Товары для праздника</MenuItem>
        <MenuItem value={'Товары для животных'}>Товары для животных</MenuItem>
        <MenuItem value={'Другие товары'}>Другие товары</MenuItem>
      </Select>
    </Box>
  )
}
