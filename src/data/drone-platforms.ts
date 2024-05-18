import type {FeatureCollection} from 'geojson';


export const geojson: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: "Feature",
      properties: {
        PLATFORM_ID: 230303,
        NAME: "ICTIS Platform, I Corpus",
        DRONE_TYPE: "air",
        MODIFIED_D: "2024/05/18"
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
        NAME: "ICTIS Platform, G Corpus",
        DRONE_TYPE: "air",
        MODIFIED_D: "2024/05/18"
      },
      geometry: {
        type: "Point",
        coordinates: [38.934862, 47.203121]
      }
    }
  ]
}