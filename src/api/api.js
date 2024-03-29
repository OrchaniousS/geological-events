import {dateHandlerToday,dateHandlerNextDay} from './components/dateHandler'


// Nasa data
export const loadNasaApi = async () => {
const urlEONETNasa = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
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


// USGS data
export const loadUSGSApi = async () => {
const urlUSGS = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${dateHandlerToday.todayYear}-${dateHandlerToday.todayMonth}-${dateHandlerToday.todayDayOfMonth}&endtime=${dateHandlerNextDay.nextYear}-${dateHandlerNextDay.nextMonth}-${dateHandlerNextDay.nextDay}&minmagnitude=2.5`
  const earthquakesData = await fetch(urlUSGS)

  try {
    if (earthquakesData.ok) {
      const earthQuakes = await earthquakesData.json()

      return earthQuakes.features.map(({ geometry, properties, id }) => ({
        type: properties.type,
        updated: properties.updated,
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
