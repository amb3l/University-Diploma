import type {FeatureCollection} from 'geojson';


export const geojson: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: "Feature",
      properties: {
        PLATFORM_ID: 230303,
        NAME: "ИКТИБ платформа, корпус И",
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
    },
    {
      type: "Feature",
      properties: {
        PLATFORM_ID: 230305,
        NAME: "Новая платформа"
      },
      geometry: {
        type: "Point",
        coordinates: [38.914820, 47.259396]
      }
    },
    {
      type: "Feature",
      properties: {
        PLATFORM_ID: 230306,
        NAME: "Южная платформа"
      },
      geometry: {
        type: "Point",
        coordinates: [38.922923, 47.212873]
      }
    },
    {
      type: "Feature",
      properties: {
        PLATFORM_ID: 230307,
        NAME: "Западная платформа"
      },
      geometry: {
        type: "Point",
        coordinates: [38.907275, 47.213093]
      }
    },
  ]
}