import React, { useState } from "react"
import { Icon } from "@iconify/react"

import IconHandler from "./iconHandler"

import "../style/sideInfo.css"

const SideInfo = ({
  onClickPointer,
  onClickPointerZoom,
  onClickEvent,
  nasaEventsInfo,
  icons,
}) => {
  const [dateFilterState, setDateFilterState] = useState(false)
  const [iconFilter, setIconFilter] = useState(null)

  const iconHandlerArray = [
    { id: 6, iconHolder: icons.drought, className: "droughtIcon" },
    { id: 7, iconHolder: icons.dust, className: "droughtIcon" },
    { id: 8, iconHolder: icons.fire, className: "fireIcon" },
    { id: 9, iconHolder: icons.flood, className: "floodIcon" },
    { id: 10, iconHolder: icons.storm, className: "stormIcon" },
    { id: 12, iconHolder: icons.volcano, className: "volcanoIcon" },
    { id: 15, iconHolder: icons.iceberg, className: "icebergIcon" },
  ]

  let filterExistingIdsArray = nasaEventsInfo.map(
    ({ categories }) => categories[0].id
  )
  let removeDuplication = arr =>
    arr.filter((item, index) => arr.indexOf(item) !== index)
  let availableIDS = [...new Set(removeDuplication(filterExistingIdsArray))]

  const dateFilterHandler = (
    <div className="dateFilter">
      <div className="dateFilterContainer">
        <div className="dateHeader">Date</div>
        <div className="dataSelect">
          <div
            role="button"
            tabIndex="0"
            onClick={() => setDateFilterState(false)}
            onKeyDown={() => setDateFilterState(false)}
          >
            <div>Newest First</div>
          </div>
          <div
            role="button"
            tabIndex="0"
            onClick={() => setDateFilterState(true)}
            onKeyDown={() => setDateFilterState(true)}
          >
            Oldest First
          </div>
        </div>
      </div>
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
    </div>
  )

  const mapEvents =
    iconFilter === null
      ? nasaEventsInfo.map(({ categories, geometries, date, link, title }) => (
          <div
            key={link}
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
                onClickPointerZoom(5)
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
                onClickPointerZoom(5)
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
                    onClickPointerZoom(5)
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
                    onClickPointerZoom(5)
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

  return (
    <>
      <div className="sideContainer">
        <div className="eventsHeader">
          <h2>Natural Events around the world, Last Year</h2>
          <div>{nasaEventsInfo.length} events.</div>
          <div>{dateFilterHandler}</div>
        </div>
        <div className="eventsContainer">
          {}
          {dateFilterState ? mapEvents.reverse() : mapEvents}
        </div>
      </div>
    </>
  )
}

export default SideInfo
