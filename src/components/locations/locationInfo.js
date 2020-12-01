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
                title.split("-")[0].split("M")[1] +
                " M"}
            </h2>
          </div>
          <div className="locationInfoBottom">
            <div className="locationDiv">
              <div>
                {title.split("- ")[1].split(", ").length < 2 ? (
                  <>Location:{title.split("-")[1]}</>
                ) : (
                  <div>
                    <div>
                      Direction:
                      {title.split("-")[1].split(", ")[0]}
                    </div>

                    <div>
                      Country:
                      {title.split("- ")[1].split(",")[1]}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <span>[{date}]</span>
          </div>
        </div>
      ) : (
        <div className="locationInfo">
          <h2>Event Info</h2>
          <div className="locationInfoBottom">
            <div className="eventLocationDiv">{title.split("-")[0]}</div>
            <div className="locationDiv">
              Location:
              {title.replace("Wildfire -", "")}
            </div>
            <span>[{date}]</span>
          </div>
        </div>
      )}
    </>
  )
}

export default LocationInfo
