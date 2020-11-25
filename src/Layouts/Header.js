import React, { useState } from "react"
import { Icon } from "@iconify/react"
import arrowUpBoldBoxOutline from "@iconify-icons/mdi/arrow-up-bold-box-outline"

import "../style/header.css"

const Header = () => {
  const [headerStatus, setHeaderStatus] = useState(true)

  return headerStatus ? (
    <header>
      <h1>Geological Events by NASA</h1>
      <Icon
        onClick={() => setHeaderStatus(headerStatus => !headerStatus)}
        className="closeIcon"
        icon={arrowUpBoldBoxOutline}
      />
    </header>
  ) : (
    <div className="headerMinimized">
      <Icon
        onClick={() => setHeaderStatus(headerStatus => !headerStatus)}
        className="closeIconActive"
        icon={arrowUpBoldBoxOutline}
        rotate="180deg"
      />
    </div>
  )
}

export default Header
