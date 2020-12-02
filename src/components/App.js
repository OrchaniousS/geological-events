import React, { useState, useEffect } from "react"
import Header from "../Layouts/Header"
// import Loader from "../Layouts/Loader"

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

  return (
    <>
      <Header />
      <div className="loaderContainer">
        {/* {nasaEvents.length > 1 ? ( */}
        <ReactGoogleMap nasaEvents={nasaEvents} usgsEvents={usgsEvents} />
        {/* ) : (
          <Loader />
        )} */}
      </div>
    </>
  )
}
