import React from "react"

import "./locations.css"

const LocationInfo = ({ locationInfo: { id, title, link } }) => {
  return (
    <div className="locationInfo">
      <h2>Event Info</h2>
      <div>
        <ul key={link}>
          <div>
            <p>
              {title.split("-")[0]} [ID:{id}]
            </p>
            <p>
              Location:
              {title.replace("Wildfire -", "")}
            </p>
          </div>
          {/* <p>
            Source:
            <a href={link}>Link</a>
          </p> */}
        </ul>
      </div>
    </div>
  )
}

export default LocationInfo
