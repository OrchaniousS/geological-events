import React, { useEffect, useState } from "react"
import { Icon } from "@iconify/react"

import "./locations.css"

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

const LocationPointer = ({
  idEvent,
  lat,
  lng,
  onClickEvent,
  iconName,
  filter,
}) => {
  const [iconClass, setIconClass] = useState("")
  const [icon, setIcon] = useState()
  // const [filterState, setFilterState] = useState()
  // const [filterIcon, setFilterIcon] = useState()

  useEffect(() => {
    if (idEvent === 6) {
      setIconClass("droughtIcon")
      setIcon(iconName.drought)
    }
    if (idEvent === 7) {
      setIconClass("droughtIcon")
      setIcon(iconName.dust)
    }
    if (idEvent === 8) {
      setIconClass("fireIcon")
      setIcon(iconName.fire)
    }
    if (idEvent === 9) {
      setIconClass("floodIcon")
      setIcon(iconName.flood)
    }
    if (idEvent === 10) {
      setIconClass("stormIcon")
      setIcon(iconName.storm)
    }
    if (idEvent === 12) {
      setIconClass("volcanoIcon")
      setIcon(iconName.volcano)
    }
    if (idEvent === 15) {
      setIconClass("icebergIcon")
      setIcon(iconName.iceberg)
    }
  }, [idEvent, iconName])

  return (
    <>
      {/* <div
        role="button"
        className="filterContainer"
        onClick={() => setFilterState(filterState => !filterState)}
        onKeyDown={() => setFilterState(filterState => !filterState)}
        tabIndex="0"
      >
        <Icon className="filterIcon" icon={filter} />
        <span>Filter</span>
      </div>
      <div className="filterByIcon">
        {filterState && (
          <div
            onClick={() => {
              setFilterIcon("fireIcon")
            }}
          >
            <Icon className="fireIcon" icon={iconName.fire} />
            WildFire
          </div>
        )}
      </div> */}
      <div
        role="button"
        className="locationPointer"
        onClick={onClickEvent}
        onKeyDown={onClickEvent}
        tabIndex="0"
      >
        <Icon className={iconClass} icon={icon} />
      </div>
    </>
  )
}

export default LocationPointer
