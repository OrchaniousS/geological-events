import React, { useState } from "react"
import GoogleMapReact from "google-map-react"

import LocationPointer from "../locations/locationPointer"
import LocationInfo from "../locations/locationInfo"

import { Icon } from "@iconify/react"
import filterMenu from "@iconify-icons/mdi/filter-menu"
import fireAlert from "@iconify-icons/mdi/fire-alert"
import fileTypeDustjs from "@iconify-icons/vscode-icons/file-type-dustjs"
import droughtIcon from "@iconify-icons/carbon/drought"
import floodWarning from "@iconify-icons/carbon/flood-warning"
import tropicalStormTracks from "@iconify-icons/carbon/tropical-storm-tracks"

import "../../style/map.css"

/*
LEGEND 
ID 6 - Drought - done
ID 7 - Dust and Haze - done
ID 8 - Wildfires - done
ID 9 - Floods - done
ID 10 - Severe Storms
ID 12 - Volcanoes
ID 13 - Water Color
ID 14 - Landslides
ID 15 - Sea and Lake Ice
ID 16 - Earthquakes
ID 17 - Snow
ID 18 - Temperature Extremes
ID 19 - Manmade
 */

const ReactGoogleMap = ({ nasaEvents, center, zoom }) => {
  const [filterState, setFilterState] = useState()
  const [locationInfo, setLocationInfo] = useState(null)

  const trackerPointer = nasaEvents.map(
    ({ categories, geometries, link, title }) =>
      categories[0].id && (
        <LocationPointer
          key={link}
          idEvent={categories[0].id}
          lat={geometries[0].coordinates[1]}
          lng={geometries[0].coordinates[0]}
          onClickEvent={() =>
            setLocationInfo({
              id: categories[0].id,
              title,
              link,
            })
          }
        />
      )
  )

  return (
    <div className="mapContainer">
      <div
        role="button"
        className="filterContainer"
        onClick={() => setFilterState(filterState => !filterState)}
        onKeyDown={() => setFilterState(filterState => !filterState)}
        tabIndex="0"
      >
        <Icon className="filterIcon" icon={filterMenu} />
        <span>Filter</span>
      </div>
      <div className="filterByIcon">
        {filterState && (
          <div>
            filter icons
            <Icon aria-hidden="true" className="fireIcon" icon={fireAlert} />
            <Icon
              aria-hidden="true"
              className="fireIcon"
              icon={fileTypeDustjs}
            />
            <Icon aria-hidden="true" className="fireIcon" icon={droughtIcon} />
            <Icon aria-hidden="true" className="fireIcon" icon={floodWarning} />
            <Icon
              aria-hidden="true"
              className="fireIcon"
              icon={tropicalStormTracks}
            />
          </div>
        )}
      </div>
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
