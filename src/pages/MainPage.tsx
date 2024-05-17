import React, { useState } from 'react'
import Header from '../components/Header'
import Map from "react-map-gl"
import { width } from '@mui/system'

const mapToken = "pk.eyJ1IjoiYW1iM2wiLCJhIjoiY2x3YXdiZnIwMDJlcDJucG52d3ZyMmZ0eiJ9.8Xp2cuklBnBmHYI6kF-VJQ"
const mapStyle = "mapbox://styles/amb3l/clwattste01sl01qube68affp"


export const MainPage = () => {
  const [viewport, setViewport] = useState({
    latitude: 47.2065,
    longitude: 38.928915,
    width: "100vw",
    height: "100vh",
    zoom: 10
  })


  return (
    <>
      <Header />

      <Map
        mapboxAccessToken={ mapToken }
        style={{ width: viewport.width, height: viewport.height, position: 'fixed' }}
        mapStyle={ mapStyle }
      >

      </Map>
    </>
  )
}