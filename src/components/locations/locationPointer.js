import React from "react"
import { Icon } from "@iconify/react"
import fireAlert from "@iconify-icons/mdi/fire-alert"
import droughtIcon from "@iconify-icons/carbon/drought"
import tropicalStormTracks from "@iconify-icons/carbon/tropical-storm-tracks"

import "./locations.css"

const LocationPointer = ({ idEvent, lat, lng, onClickEvent }) => {
  const idHandler = idEvent => {
    return (
      idEvent === "12" && (
        <>
          <Icon aria-hidden="true" className="droughtIcon" icon={droughtIcon} />
        </>
      )
    )

    // idEvent === "15" && (
    //   <Icon aria-hidden="true" className="droughtIcon" icon={droughtIcon} />
    // )
    // idEvent === "6" && (
    //   <Icon aria-hidden="true" className="droughtIcon" icon={droughtIcon} />
    // )
    // idEvent === "8" && (
    //   <Icon aria-hidden="true" className="fireIcon" icon={fireAlert} />
    // )

    // idEvent === "10" && (
    //   <Icon
    //     aria-hidden="true"
    //     className="stormIcon"
    //     icon={tropicalStormTracks}
    //   />
    // )
  }

  return (
    <div
      role="button"
      className="locationPointer"
      onClick={onClickEvent}
      onKeyDown={onClickEvent}
      tabIndex="0"
    >
      {idHandler}
    </div>
  )
}

export default LocationPointer
