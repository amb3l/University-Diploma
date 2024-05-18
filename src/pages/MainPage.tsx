import React, { MouseEventHandler, useCallback, useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Map, { CircleLayer, Layer, MapLayerMouseEvent, Marker, NavigationControl, Popup, Source } from "react-map-gl"
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp'
import { geojson } from '../data/drone-platforms'
import { Typography } from '@mui/material'
import { theme } from '../themes/theme'

const mapToken = "pk.eyJ1IjoiYW1iM2wiLCJhIjoiY2x3YXdiZnIwMDJlcDJucG52d3ZyMmZ0eiJ9.8Xp2cuklBnBmHYI6kF-VJQ"
const mapStyle = "mapbox://styles/amb3l/clwattste01sl01qube68affp"


export const MainPage = () => {
  const [cursor, setCursor] = useState<string>('auto');
  const [viewport, setViewport] = useState({
    latitude: 47.2065,
    longitude: 38.928915,
    width: "100vw",
    height: "100vh",
    zoom: 14
  })
  const platformLayer: CircleLayer = {
    id: 'drone_platforms',
    type: 'circle',
    source: 'platforms-data',
    paint: {
      'circle-color': theme.palette.warning.main,
      'circle-radius': 7,
      'circle-stroke-width': 3,
      'circle-stroke-color': 'white'
    }
  }
  const [selectedPlatformPoint, setSelectedPlatformPoint] = useState(Array<number>)

  const mouseEnterHandler = useCallback((e: MapLayerMouseEvent) => {
    e.preventDefault()
    setCursor('pointer')

    let coordinates = [0, 0]

    if (e.features && e.features[0].geometry.type === 'Point') {
        coordinates = e.features[0].geometry.coordinates.slice()
    }
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    //   coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    // }

    setSelectedPlatformPoint(coordinates)
  }, [])

  const mouseLeaveHandler = useCallback((e: MapLayerMouseEvent) => {
    e.preventDefault()
    setSelectedPlatformPoint([])
    setCursor('auto')
  }, [])


  return (
    <>
      <Header />

      <Map
        mapboxAccessToken={ mapToken }
        initialViewState={{
          longitude: viewport.longitude,
          latitude: viewport.latitude,
          zoom: viewport.zoom
        }}
        style={{ width: viewport.width, height: viewport.height, position: 'fixed' }}
        mapStyle={ mapStyle }
        logoPosition='top-left'
        
        interactiveLayerIds={['drone_platforms']}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        onDrag={() => setCursor('grabbing')}
        onDragEnd={() => setCursor('auto')}
        cursor={cursor}
      >
        <NavigationControl showCompass={false} position='bottom-right' />

        <Source id='platforms-data' type='geojson' data={geojson}>
          <Layer {...platformLayer} />
        </Source>

        { selectedPlatformPoint.length ?
          <Popup 
            latitude={selectedPlatformPoint[1]} 
            longitude={selectedPlatformPoint[0]} 
            closeButton={false}
            closeOnClick={false}
            anchor='bottom'
            
            >
            
            <Typography variant='caption'>Drone Platform</Typography>
          </Popup>
          : null
        }
        
        {/* { dronePlatforms.features.map(platform => (
          <Marker
            key={ platform.properties.PLATFORM_ID }
            latitude={ platform.geometry.coordinates[0] }
            longitude={ platform.geometry.coordinates[1] }
            anchor='bottom'
          >
            <button
            onMouseOver={(e) => {
              e.preventDefault()
              setSelectedMarker(platform.geometry.coordinates)
              console.log('enter')
            }}
            onMouseOut={(e) => {
              e.preventDefault()
              setSelectedMarker([])
              console.log('leave')
            }}
            >
              <LocationOnSharpIcon
                fontSize='large'
                sx={{ 
                  color: theme.palette.error.light 
                }}
              />
            </button>
          </Marker>
        ))} */}
      </Map>
    </>
  )
}