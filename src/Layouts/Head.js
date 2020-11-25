import React from "react"
import { Helmet } from "react-helmet"

export default function Head() {
  return (
    <>
      <Helmet>
        <title>Geological Events | NASA API</title>
        <html lang="en" />
        <meta
          name="description"
          content="Gatsby & React PWA that tracks Geological Events around the globe. Made with NASA API and Google Map API."
        />
      </Helmet>
    </>
  )
}
