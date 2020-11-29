import React from "react"

import IconHandler from "../../Layouts/iconHandler"

import "./locations.css"

const LocationPointer = ({ idEvent, onClickEvent, iconName }) => {
  return (
    <>
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
