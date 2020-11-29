import React from "react"

import "./locations.css"

const LocationInfo = ({ locationInfo: { id, title, date, link } }) => {
  return (
    <div className="locationInfo">
      <h2>
        Event Info
        <span>[{date}]</span>
      </h2>
      <div className="locationInfoBottom">
        <div className="eventLocationDiv">{title.split("-")[0]}</div>
        <div className="locationDiv">
          Location:
          {title.replace("Wildfire -", "")}
        </div>
      </div>
    </div>
  )
}

export default LocationInfo
