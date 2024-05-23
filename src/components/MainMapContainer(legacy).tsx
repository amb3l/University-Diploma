import Map, { CircleLayer, GeolocateControl, Layer, MapLayerMouseEvent, Marker, NavigationControl, Popup, Source } from "react-map-gl"
import React, { useCallback, useEffect, useState } from 'react'
import { theme } from '../themes/theme'
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp'
import { Typography } from "@mui/material"
import { geojson } from '../data/drone-platforms'


const mapToken = "pk.eyJ1IjoiYW1iM2wiLCJhIjoiY2x3YXdiZnIwMDJlcDJucG52d3ZyMmZ0eiJ9.8Xp2cuklBnBmHYI6kF-VJQ"
const mapStyle = "mapbox://styles/amb3l/clwdy9y3z00ar01pnezq66rxq"


interface PlatformMarkerProps {
  PLATFORM_ID: number
  NAME: string
  DRONE_TYPE: string
  MODIFIED_D: string
}


export const MainMapContainer = () => {
  const undefinedPlatformData: PlatformMarkerProps = { 
    NAME:'', PLATFORM_ID: -1, DRONE_TYPE: 'unknown', MODIFIED_D: '' 
  }
  const [selectedPlatformPoint, setSelectedPlatformPoint] = useState(Array<number>)
  const [selectedPlatformData, setSelectedPlatformData] = useState<PlatformMarkerProps>(undefinedPlatformData)
  const [cursor, setCursor] = useState<string>('auto');
  const [viewport, setViewport] = useState({
    latitude: 47.204627,
    longitude: 38.939039,
    width: "100vw",
    height: "100vh",
    zoom: 15
  })

  const platformLayer: CircleLayer = {
    id: 'drone_platforms',
    type: 'circle',
    source: 'platforms-data',
    paint: {
      'circle-color': theme.palette.warning.main,
      'circle-radius': 7,
      'circle-stroke-width': 3,
      'circle-stroke-color': theme.palette.common.white
    }
  }
  
  
  // Обработчик наведения мыши на точку на карте.
  // При наведении появляется pop-up окно с информацией.
  const mouseEnterHandler = useCallback((e: MapLayerMouseEvent) => {
    e.preventDefault()
    setCursor('pointer')

    let coordinates = [0, 0]
    let markerProps: PlatformMarkerProps = undefinedPlatformData

    if (e.features && e.features[0].geometry.type === 'Point') {
      coordinates = e.features[0].geometry.coordinates.slice()
      markerProps = (e.features[0].properties as PlatformMarkerProps)
    }
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    setSelectedPlatformPoint(coordinates)
    setSelectedPlatformData(markerProps)
  }, [])

  const mouseLeaveHandler = useCallback((e: MapLayerMouseEvent) => {
    e.preventDefault()
    setSelectedPlatformPoint([])
    setSelectedPlatformData(undefinedPlatformData)
    setCursor('auto')
  }, [])

  return (
    <>
      <Map
        mapboxAccessToken={ mapToken }
        initialViewState={{
          longitude: viewport.longitude,
          latitude: viewport.latitude,
          zoom: viewport.zoom
        }}
        style={{ width: viewport.width, height: viewport.height, position: 'fixed' }}
        mapStyle={ mapStyle }
        logoPosition='bottom-right'
        padding={{
          top: 70,
          bottom: 0,
          left: 800,
          right: 0
        }}
        interactiveLayerIds={['drone_platforms']}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        onDrag={() => setCursor('grabbing')}
        onDragEnd={() => setCursor('auto')}
        cursor={cursor}
      >
        <NavigationControl showCompass={false} position='bottom-right' />
        <GeolocateControl position='bottom-right'/>

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
            
            <Typography variant='body2'>{selectedPlatformData.NAME}</Typography>
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
function useRef(arg0: null) {
  throw new Error("Function not implemented.")
}

function MapboxGeocoding(arg0: { accessToken: any }) {
  throw new Error("Function not implemented.")
}

