import React from "react"

import IconHandler from "../../Layouts/iconHandler"

import "./locations.css"

const LocationPointer = ({
  type,
  idEvent,
  onClickEvent,
  iconName,
  iconName2,
  mag,
  idHolder,
}) => {
  return (
    <>
      <div
        id={idHolder ? idHolder : ""}
        role="button"
        className={type ? "locationPointerEQ" : "locationPointer"}
        onClick={onClickEvent}
        onKeyDown={onClickEvent}
        tabIndex="0"
      >
        <IconHandler
          type={type}
          idEvent={idEvent}
          iconName={iconName}
          iconName2={iconName2}
          mag={mag}
        />
      </div>
    </>
  )
}

export default LocationPointer
