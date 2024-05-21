import React, { useState } from 'react'

const url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = "1eaec91f22f5aca7c67aa836755b704617bb1815";
const query = "таган";

export const useCities = () => {
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState([])

  const extractValues = (data) => {
    return data.map(item => ({
      label: item.value
    }))
  }

  const options = {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + token
      },
      body: JSON.stringify({query: query})
  }

  fetch(url, options)
  .then(response => response.text())
  .then(result => setValues(extractValues(result)))
  .catch(error => console.log("error", error))

  return { loading, values }
}
