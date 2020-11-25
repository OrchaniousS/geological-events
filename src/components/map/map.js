import React, { useState } from "react"
import GoogleMapReact from "google-map-react"

import LocationPointer from "../locations/locationPointer"
import LocationInfo from "../locations/locationInfo"

import filterMenu from "@iconify-icons/mdi/filter-menu"
import fireAlert from "@iconify-icons/mdi/fire-alert"
import fileTypeDustjs from "@iconify-icons/vscode-icons/file-type-dustjs"
import droughtIcon from "@iconify-icons/carbon/drought"
import floodWarning from "@iconify-icons/carbon/flood-warning"
import tropicalStormTracks from "@iconify-icons/carbon/tropical-storm-tracks"
import volcanoIcon from "@iconify-icons/emojione-monotone/volcano"
import iceShelfMelting from "@iconify-icons/openmoji/ice-shelf-melting"

import "../../style/map.css"

const ReactGoogleMap = ({ nasaEvents, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)

  // EONET API DATA
  const trackerPointer = nasaEvents.map(
    ({ categories, geometries, link, title }) =>
      categories[0].id && (
        <LocationPointer
          key={link}
          idEvent={categories[0].id}
          lat={
            geometries[0].coordinates.length === 2
              ? geometries[0].coordinates[1]
              : geometries[0].coordinates[0][0][1]
          }
          lng={
            geometries[0].coordinates.length === 2
              ? geometries[0].coordinates[0]
              : geometries[0].coordinates[0][0][0]
          }
          onClickEvent={() => {
            setLocationInfo({
              id: 8,
              title,
              link,
            })
          }}
          iconName={{
            drought: droughtIcon,
            dust: fileTypeDustjs,
            fire: fireAlert,
            flood: floodWarning,
            storm: tropicalStormTracks,
            volcano: volcanoIcon,
            iceberg: iceShelfMelting,
          }}
          filter={filterMenu}
        />
      )
  )

  // const filterContainer=

  return (
    <div className="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {trackerPointer}
      </GoogleMapReact>
      {locationInfo && <LocationInfo locationInfo={locationInfo} />}
    </div>
  )
}

// where map should be centered at first load
ReactGoogleMap.defaultProps = {
  center: {
    lat: 32.8823157,
    lng: 34.7500211,
  },
  zoom: 1,
}

export default ReactGoogleMap
