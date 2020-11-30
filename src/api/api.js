const urlEONETNasa = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"

export const loadNasaApi = async () => {
  const eventsData = await fetch(urlEONETNasa)
  try {
    const { events } = await eventsData.json()

    return events.map(({ categories, geometries, link, title }) => ({
      categories,
      geometries,
      date: new Date(geometries[0].date).toLocaleDateString("en-GB"),
      link,
      title,
    }))
  } catch (error) {
    return error
  }
}

const urlUSGS =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-11-29&endtime=2020-11-30&minmagnitude=2.5"

export const loadUSGSApi = async () => {
  const earthquakesData = await fetch(urlUSGS)

  try {
    if (earthquakesData.ok) {
      const earthQuakes = await earthquakesData.json()

      return earthQuakes.features.map(({ geometry, properties, id }) => ({
        type: properties.type,
        fullDate: new Date(properties.updated).toUTCString("en-GB"),
        minDate: new Date(properties.updated).toLocaleDateString("en-GB"),
        coordinates: geometry.coordinates,
        mag: properties.mag,
        title: properties.title,
        place: properties.place,
        id,
      }))
    }
  } catch (error) {
    console.log("HTTP-Error: " + earthquakesData.status)
    return error
  }
}
