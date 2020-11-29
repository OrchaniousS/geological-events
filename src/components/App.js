import React, { useState, useEffect } from "react"

import ReactGoogleMap from "./map/map"
import Header from "../Layouts/Header"
import Loader from "../Layouts/Loader"

import { loadNasaApi } from "../api/api"

export default function App() {
  const [apiNotLoaded, setApiNotLoaded] = useState(false)
  const [nasaEvents, setNasaEvents] = useState([])

  useEffect(() => {
    // NASA API EONET DATA
    const fetchAPI = async () => {
      const data = await loadNasaApi()
      setNasaEvents(data)
      setApiNotLoaded(true)
    }
    fetchAPI()

    // to do --USGS API DATA
  }, [])

  return (
    <>
      <Header />
      <div className="loaderContainer">
        {apiNotLoaded ? <ReactGoogleMap nasaEvents={nasaEvents} /> : <Loader />}
      </div>
    </>
  )
}
