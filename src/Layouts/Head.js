import React from "react"
import { Helmet } from "react-helmet"

export default function Head() {
  return (
    <>
      <Helmet>
        <title>Natural Events | NASA | USGS |</title>
        <html lang="en" />
        <meta
          name="description"
          content=" Natural and Geological Events around the globe website. Made with NASA API, Google Map API Gatsby,React, PWA(Fully offline support)."
        />
      </Helmet>
    </>
  )
}
