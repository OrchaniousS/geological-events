import React, { useState, useEffect } from "react"

import Header from "../Layouts/Header"
import Loader from "../Layouts/Loader"
import ReactGoogleMap from "./map/map"

import { loadNasaApi, loadUSGSApi } from "../api/api"

export default function App() {
  const [apiNotLoaded, setApiNotLoaded] = useState(false)
  const [nasaEvents, setNasaEvents] = useState([])
  const [usgsEvents, setUsgsEvents] = useState([])

  useEffect(() => {
    // NASA API EONET DATA
    const fetchAPI = async () => {
      const data = await loadNasaApi()
      const data2 = await loadUSGSApi()
      setNasaEvents(data)
      setUsgsEvents(data2)
      setApiNotLoaded(true)
    }
    fetchAPI()
  }, [])

  return (
    <>
      <Header />
      <div className="loaderContainer">
        {apiNotLoaded ? (
          <ReactGoogleMap nasaEvents={nasaEvents} usgsEvents={usgsEvents} />
        ) : (
          <Loader />
        )}
      </div>
    </>
  )
}
