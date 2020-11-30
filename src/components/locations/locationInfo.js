import React from "react"

import "./locations.css"

const LocationInfo = ({
  locationInfo: { id, type, title, mag, date, link },
}) => {
  return (
    <>
      {type ? (
        <div className="locationInfo">
          <div className="eventLocationDiv">
            <h2>
              {type.toUpperCase().charAt(0) +
                type.slice(0) +
                " " +
                title.split("-")[0]}
            </h2>
          </div>
          <div className="locationInfoBottom">
            <div className="locationDiv">
              Location:
              {title}
            </div>
            <span>{date}</span>
          </div>
        </div>
      ) : (
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
      )}
    </>
  )
}

export default LocationInfo
