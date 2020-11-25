const urlEONETNasa = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"

export const loadNasaApi = async () => {
  const eventsData = await fetch(urlEONETNasa)
  try {
    const { events } = await eventsData.json()
    return events.map(({ categories, geometries, link, title }) => ({
      categories,
      geometries,
      link,
      title,
    }))
  } catch (error) {
    return error
  }
}
