import React, { useState } from "react"
import GoogleMapReact from "google-map-react"

import SideInfo from "../../Layouts/SideInfo"
import LocationPointer from "../locations/locationPointer"
import LocationInfo from "../locations/locationInfo"

// icons
import filterMenu from "@iconify-icons/mdi/filter-menu"
import fireAlert from "@iconify-icons/mdi/fire-alert"
import fileTypeDustjs from "@iconify-icons/vscode-icons/file-type-dustjs"
import droughtIcon from "@iconify-icons/carbon/drought"
import floodWarning from "@iconify-icons/carbon/flood-warning"
import tropicalStormTracks from "@iconify-icons/carbon/tropical-storm-tracks"
import volcanoIcon from "@iconify-icons/emojione-monotone/volcano"
import iceShelfMelting from "@iconify-icons/openmoji/ice-shelf-melting"
import earthquakeIcon from "@iconify/icons-openmoji/earthquake"

import "../../style/map.css"

const ReactGoogleMap = ({ nasaEvents, usgsEvents, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)
  const [centerDefault, setCenterDefault] = useState(null)
  const [zoomDefault, setZoomDefault] = useState(null)

  center = { lat: 32.8823157, lng: 34.7500211 }
  zoom = 1

  const iconHandler = {
    drought: droughtIcon,
    dust: fileTypeDustjs,
    fire: fireAlert,
    flood: floodWarning,
    storm: tropicalStormTracks,
    volcano: volcanoIcon,
    iceberg: iceShelfMelting,
  }

  // EONET API DATA
  const trackerPointer = nasaEvents.map(
    ({ categories, geometries, date, link, title }) =>
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
            return (
              // event info by pointer click
              setLocationInfo({
                id: categories[0].id,
                date: date,
                title,
                link,
              }),
              //  map positions by pointer click
              setCenterDefault({
                lat:
                  geometries[0].coordinates.length === 2
                    ? geometries[0].coordinates[1]
                    : geometries[0].coordinates[0][0][1],
                lng:
                  geometries[0].coordinates.length === 2
                    ? geometries[0].coordinates[0]
                    : geometries[0].coordinates[0][0][0],
              }),
              setZoomDefault(5)
            )
          }}
          iconName={iconHandler}
          filter={filterMenu}
        />
      )
  )

  // USGS API DATA
  const earthQuakeTracker = usgsEvents.map(
    ({ type, fullDate, minDate, coordinates, mag, title, place, id }) => (
      <LocationPointer
        type={type}
        key={id}
        idEvent={id}
        lat={coordinates[1]}
        lng={coordinates[0]}
        iconName2={earthquakeIcon}
        mag={mag}
        onClickEvent={() => {
          return (
            setLocationInfo({
              type: type,
              date: fullDate,
              mag: mag,
              title,
            }),
            setCenterDefault({
              lat: coordinates[1],
              lng: coordinates[0],
            })
          )
        }}
      />
    )
  )

  return (
    <>
      <SideInfo
        onClickPointer={val => setCenterDefault(val)}
        onClickPointerZoom={val => setZoomDefault(val)}
        onClickEvent={val => setLocationInfo(val)}
        nasaEventsInfo={nasaEvents}
        usgsEvents={usgsEvents}
        icons={iconHandler}
        icons2={earthquakeIcon}
      />
      <div className="mapContainer">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_KEY }}
          center={!centerDefault ? center : centerDefault}
          zoom={!centerDefault ? zoom : zoomDefault}
        >
          {trackerPointer}
          {earthQuakeTracker}
        </GoogleMapReact>
        {locationInfo && <LocationInfo locationInfo={locationInfo} />}
      </div>
    </>
  )
}

export default ReactGoogleMap
