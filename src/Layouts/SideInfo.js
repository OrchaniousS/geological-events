import React, { useState } from "react"
import { Icon } from "@iconify/react"

import IconHandler from "./iconHandler"

import "../style/sideInfo.css"

const SideInfo = ({
  onClickPointer,
  onClickPointerZoom,
  onClickEvent,
  onClickActiveEvent,
  nasaEventsInfo,
  usgsEvents,
  icons,
  icons2,
}) => {
  const [dateFilterState, setDateFilterState] = useState(null)
  const [magFilterState, setMagFilterState] = useState(null)
  const [iconFilter, setIconFilter] = useState(null)
  const [nasaData, setNasaData] = useState(true)
  const [usgsData, setUsgsData] = useState(false)
  const [activeThumb, setActiveThumb] = useState("activeThumb")
  const [activeTitle, setActiveTitle] = useState("")

  // Which event tab to present
  const nasaUsgsDataHandler = val => {
    if (val) {
      setUsgsData(val)
      setNasaData(!val)
      setActiveThumb("activeThumb")
    } else {
      setUsgsData(val)
      setNasaData(!val)
      setActiveThumb("activeThumb")
    }
  }

  const iconHandlerArray = [
    { id: 6, iconHolder: icons.drought, className: "droughtIcon" },
    { id: 7, iconHolder: icons.dust, className: "droughtIcon" },
    { id: 8, iconHolder: icons.fire, className: "fireIcon" },
    { id: 9, iconHolder: icons.flood, className: "floodIcon" },
    { id: 10, iconHolder: icons.storm, className: "stormIcon" },
    { id: 12, iconHolder: icons.volcano, className: "volcanoIcon" },
    { id: 15, iconHolder: icons.iceberg, className: "icebergIcon" },
  ]

  // Present available Events Icons
  let filterExistingIdsArray = nasaEventsInfo.map(
    ({ categories }) => categories[0].id
  )
  let removeDuplication = arr =>
    arr.filter((item, index) => arr.indexOf(index) !== item)

  let availableIDS = [...new Set(removeDuplication(filterExistingIdsArray))]

  // Date Filter
  const dateFilterByOrder = (
    <div className="dateFilterContainer">
      <div className="dateHeader">Date</div>
      <div className="dataSelect">
        <div
          role="button"
          tabIndex="0"
          onClick={() => {
            setDateFilterState(true)
            setMagFilterState(null)
          }}
          onKeyDown={() => {
            setDateFilterState(true)
            setMagFilterState(null)
          }}
        >
          <div>Newest First</div>
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => {
            setDateFilterState(false)
            setMagFilterState(null)
          }}
          onKeyDown={() => {
            setDateFilterState(false)
            setMagFilterState(null)
          }}
        >
          Oldest First
        </div>
      </div>
    </div>
  )

  // Icon Filter
  const filterByIcon = (
    <div className="iconSelectContainer">
      <div>Events/Icons</div>
      <div className="iconSelect">
        <button onClick={() => setIconFilter(null)}>All</button>
        {iconHandlerArray.map(({ id, iconHolder, className }) =>
          availableIDS.map(
            item =>
              id === item && (
                <button key={id} onClick={() => setIconFilter(id)}>
                  <Icon className={className} icon={iconHolder} />
                </button>
              )
          )
        )}
      </div>
    </div>
  )

  // Magnitude Filter
  const filterByMagnitude = (
    <div className="dateFilterContainer">
      <div className="dateHeader">Magnitude</div>
      <div className="dataSelect">
        <div
          role="button"
          tabIndex="0"
          onClick={() => {
            setMagFilterState(true)
            setDateFilterState(null)
          }}
          onKeyDown={() => {
            setMagFilterState(true)
            setDateFilterState(null)
          }}
        >
          <div>Highest First</div>
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => {
            setMagFilterState(false)
            setDateFilterState(null)
          }}
          onKeyDown={() => {
            setMagFilterState(false)
            setDateFilterState(null)
          }}
        >
          Lowest First
        </div>
      </div>
    </div>
  )

  // Filter Holder
  const dateFilterHandler = (
    <div className="dateFilter">
      {dateFilterByOrder}
      {filterByIcon}
    </div>
  )

  // NASA MAP - NATURAL EVENTS
  const mapEvents =
    iconFilter === null
      ? nasaEventsInfo.map(({ categories, geometries, date, link, title }) => (
          <div
            key={link}
            id={title === activeTitle ? "activeEventLocation" : ""}
            role="button"
            tabIndex="0"
            className="events"
            onClick={() => {
              return (
                onClickEvent({
                  id: categories[0].id,
                  date: date,
                  title,
                  link,
                }),
                onClickPointer({
                  lat:
                    geometries[0].coordinates.length === 2
                      ? geometries[0].coordinates[1]
                      : geometries[0].coordinates[0][0][1],
                  lng:
                    geometries[0].coordinates.length === 2
                      ? geometries[0].coordinates[0]
                      : geometries[0].coordinates[0][0][0],
                }),
                onClickPointerZoom(5),
                onClickActiveEvent(title),
                setActiveTitle(title)
              )
            }}
            onKeyDown={() => {
              return (
                onClickEvent({
                  id: categories[0].id,
                  date: date,
                  title,
                  link,
                }),
                onClickPointer({
                  lat:
                    geometries[0].coordinates.length === 2
                      ? geometries[0].coordinates[1]
                      : geometries[0].coordinates[0][0][1],
                  lng:
                    geometries[0].coordinates.length === 2
                      ? geometries[0].coordinates[0]
                      : geometries[0].coordinates[0][0][0],
                }),
                onClickPointerZoom(5),
                onClickActiveEvent(title),
                setActiveTitle(title)
              )
            }}
          >
            <>
              <div className="eventLogo">
                <IconHandler idEvent={categories[0].id} iconName={icons} />
              </div>
              <div className="eventInfo">
                <h5>{title}</h5>
                <span>{date}</span>
              </div>
            </>
          </div>
        ))
      : nasaEventsInfo.map(
          ({ categories, geometries, date, link, title }) =>
            categories[0].id === iconFilter && (
              <div
                key={link}
                id={title === activeTitle && "activeEventLocation"}
                role="button"
                tabIndex="0"
                className="events"
                onClick={() => {
                  return (
                    onClickEvent({
                      id: categories[0].id,
                      date: date,
                      title,
                      link,
                    }),
                    onClickPointer({
                      lat:
                        geometries[0].coordinates.length === 2
                          ? geometries[0].coordinates[1]
                          : geometries[0].coordinates[0][0][1],
                      lng:
                        geometries[0].coordinates.length === 2
                          ? geometries[0].coordinates[0]
                          : geometries[0].coordinates[0][0][0],
                    }),
                    onClickPointerZoom(5),
                    onClickActiveEvent(title),
                    setActiveTitle(title)
                  )
                }}
                onKeyDown={() => {
                  return (
                    onClickEvent({
                      id: categories[0].id,
                      date: date,
                      title,
                      link,
                    }),
                    onClickPointer({
                      lat:
                        geometries[0].coordinates.length === 2
                          ? geometries[0].coordinates[1]
                          : geometries[0].coordinates[0][0][1],
                      lng:
                        geometries[0].coordinates.length === 2
                          ? geometries[0].coordinates[0]
                          : geometries[0].coordinates[0][0][0],
                    }),
                    onClickPointerZoom(5),
                    onClickActiveEvent(title),
                    setActiveTitle(title)
                  )
                }}
              >
                <>
                  <div className="eventLogo">
                    <IconHandler idEvent={iconFilter} iconName={icons} />
                  </div>
                  <div className="eventInfo">
                    <h5>{title}</h5>
                    <span>{date}</span>
                  </div>
                </>
              </div>
            )
        )

  // USGS MAP - EARTH QUAKES
  const usgsMapEvents = usgsEvents.map(
    ({
      type,
      updated,
      fullDate,
      minDate,
      coordinates,
      mag,
      title,
      place,
      id,
    }) => (
      <div
        mag={mag}
        updated={updated}
        key={id}
        id={title === activeTitle ? "activeEventLocation" : ""}
        role="button"
        tabIndex="0"
        className="events"
        onClick={() => {
          return (
            onClickEvent({
              type: type,
              date: fullDate,
              mag: mag,
              title,
            }),
            onClickPointer({
              lat: coordinates[1],
              lng: coordinates[0],
            }),
            onClickPointerZoom(5),
            onClickActiveEvent(title),
            setActiveTitle(title)
          )
        }}
        onKeyDown={() => {
          return (
            onClickEvent({
              type: type,
              date: fullDate,
              mag: mag,
              title,
            }),
            onClickPointer({
              lat: coordinates[1],
              lng: coordinates[0],
            }),
            onClickPointerZoom(5),
            onClickActiveEvent(title),
            setActiveTitle(title)
          )
        }}
      >
        <div className="eventLogo">
          <IconHandler
            type={type}
            idEvent={iconFilter}
            iconName2={icons2}
            mag={mag}
          />
        </div>
        <div className="eventInfo">
          <h5>
            {type.toUpperCase().charAt(0) +
              type.slice(0) +
              " " +
              title.split("-")[0]}
          </h5>
          <span>{place}</span>
          <span>{minDate}</span>
          <br />
          <span>{fullDate}</span>
        </div>
      </div>
    )
  )

  return (
    <>
      <div className="mainContainer">
        <div className="eventsTypeHandler">
          <div
            className={nasaData ? activeThumb : ""}
            role="button"
            tabIndex="0"
            onClick={() => nasaUsgsDataHandler(false)}
            onKeyDown={() => nasaUsgsDataHandler(false)}
          >
            Natural
          </div>
          <div
            className={usgsData ? activeThumb : ""}
            role="button"
            tabIndex="0"
            onClick={() => nasaUsgsDataHandler(true)}
            onKeyDown={() => nasaUsgsDataHandler(true)}
          >
            Earthquakes
          </div>
        </div>
        <div className="sideContainer">
          <div className="fadeInDiv">
            {nasaData && (
              <>
                <div className="eventsHeader">
                  <h2>Natural Events around the world, Last Year</h2>
                  <div>{nasaEventsInfo.length} events.</div>
                  <div>{dateFilterHandler}</div>
                </div>
                <div className="eventsContainer">
                  {dateFilterState ? mapEvents : mapEvents.reverse()}
                </div>
              </>
            )}
          </div>
          <div className="fadeInDiv">
            {usgsData && (
              <div>
                <div className="eventsHeader">
                  <h2>Earthquakes around the world, Last Day</h2>
                  <div>{usgsEvents.length} events.</div>
                  <div>{dateFilterByOrder}</div>
                  <div>{filterByMagnitude}</div>
                </div>
                <div className="eventsContainer">
                  {dateFilterState == 1 &&
                    usgsMapEvents
                      .sort((a, b) => a.props.updated - b.props.updated)
                      .reverse()}
                  {dateFilterState == 0 &&
                    usgsMapEvents.sort(
                      (a, b) => a.props.updated - b.props.updated
                    )}
                  {magFilterState == 1 &&
                    usgsMapEvents
                      .sort((a, b) => a.props.mag - b.props.mag)
                      .reverse()}
                  {magFilterState == 0 &&
                    usgsMapEvents.sort((a, b) => a.props.mag - b.props.mag)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SideInfo
