import React, { useEffect, useState, useRef } from "react"
import { Icon } from "@iconify/react"

const IconHandler = ({ type, idEvent, iconName, iconName2, mag }) => {
  const [iconClass, setIconClass] = useState("")
  const [icon, setIcon] = useState()

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

  const idEventCurrent = useRef(() => {})
  idEventCurrent.current = async val => (val === "" ? (idEvent = "") : null)

  useEffect(() => {
    if (typeof idEvent !== Number && type === "earthquake") {
      idEventCurrent.current("")
      setIconClass("earthquakeIcon")
      setIcon(iconName2)
    }
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
  }, [type, idEvent, iconName, iconName2])

  return (
    <>
      {type ? (
        <>
          <div className="earthquakeIconHolder">
            {mag}
            <Icon className={iconClass} icon={icon} />
          </div>
        </>
      ) : (
        <>
          <Icon className={iconClass} icon={icon} />
        </>
      )}
    </>
  )
}

export default IconHandler
