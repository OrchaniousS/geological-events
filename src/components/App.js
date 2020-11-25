import React, { useState, useEffect } from "react"

import ReactGoogleMap from "./map/map"
import Header from "../Layouts/Header"
import Loader from "../Layouts/Loader"

import { loadNasaApi } from "../api/api"

export default function App() {
  const [apiNotLoaded, setApiNotLoaded] = useState(false)
  const [nasaEvents, setNasaEvents] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setApiNotLoaded(true)
      const data = await loadNasaApi()
      setNasaEvents(data)
    }
    fetchAPI()
  }, [])

  return (
    <>
      <Header />
      {apiNotLoaded ? <ReactGoogleMap nasaEvents={nasaEvents} /> : <Loader />}
    </>
  )
}
