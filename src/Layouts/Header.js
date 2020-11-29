import React, { useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import arrowUpBoldBoxOutline from "@iconify-icons/mdi/arrow-up-bold-box-outline"

import "../style/header.css"

const Header = () => {
  const [headerStatus, setHeaderStatus] = useState(true)

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth > 880) {
        setHeaderStatus(true)
      } else {
        setHeaderStatus(false)
      }
    }
  }, [])

  return (
    <header>
      {headerStatus ? (
        <>
          <div>
            <h1>Geological Events by NASA</h1>
          </div>
          <div>
            <Icon
              onClick={() => setHeaderStatus(headerStatus => !headerStatus)}
              className="closeIcon"
              icon={arrowUpBoldBoxOutline}
            />
          </div>
        </>
      ) : (
        <>
          <div className="headerMinimized">
            <Icon
              onClick={() => setHeaderStatus(headerStatus => !headerStatus)}
              className="closeIconActive"
              icon={arrowUpBoldBoxOutline}
              rotate="180deg"
            />
          </div>
        </>
      )}
    </header>
  )
}

export default Header
