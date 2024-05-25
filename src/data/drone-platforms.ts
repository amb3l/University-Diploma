import type {FeatureCollection} from 'geojson';


export const geojson: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: "Feature",
      properties: {
        PLATFORM_ID: 230303,
        NAME: "ИКТИБ платформа, корпус И"
      },
      geometry: {
        type: "Point",
        coordinates: [38.943917, 47.203948]
      }
    },
    {
      type: "Feature",
      properties: {
        PLATFORM_ID: 230304,
        NAME: "ИКТИБ платформа, корпус Г",
      },
      geometry: {
        type: "Point",
        coordinates: [38.934862, 47.203121]
      }
    }
  ]
}