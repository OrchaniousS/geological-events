import React from "react"

import IconHandler from "../../Layouts/iconHandler"

import "./locations.css"

const LocationPointer = ({
  idEvent,
  lat,
  lng,
  onClickEvent,
  iconName,
  filter,
}) => {
  // const [filterState, setFilterState] = useState()
  // const [filterIcon, setFilterIcon] = useState()

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
        <IconHandler idEvent={idEvent} iconName={iconName} />
      </div>
    </>
  )
}

export default LocationPointer
