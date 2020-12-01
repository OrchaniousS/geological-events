import React, { useState, useEffect } from "react"

import Header from "../Layouts/Header"
import ReactGoogleMap from "./map/map"

import { loadNasaApi, loadUSGSApi } from "../api/api"

export default function App() {
  const [nasaEvents, setNasaEvents] = useState([])
  const [usgsEvents, setUsgsEvents] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await loadNasaApi()
      const data2 = await loadUSGSApi()
      setNasaEvents(data)
      setUsgsEvents(data2)
    }
    fetchAPI()
  }, [])

  /* Loader has been moved to ReactGoogleMap for better UI UX */

  return (
    <>
      <Header />
      <div className="loaderContainer">
        <ReactGoogleMap nasaEvents={nasaEvents} usgsEvents={usgsEvents} />
      </div>
    </>
  )
}
