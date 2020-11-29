import React, { useState } from "react"

import IconHandler from "./iconHandler"

import "../style/sideInfo.css"

const SideInfo = ({ onClickPointer, onClickEvent, nasaEventsInfo, icons }) => {
  const [dateFilterState, setDateFilterState] = useState(false)

  const dateFilterHandler = (
    <div className="dateFilter">
      <div className="dateHeader">Date</div>
      <div className="dateFilterContainer">
        <div className={`dataSelect`}>
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
    </div>
  )

  const mapEvents = nasaEventsInfo.map(
    ({ categories, geometries, date, link, title }) => (
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
            })
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
            })
          )
        }}
      >
        <div className="eventLogo">
          <IconHandler idEvent={categories[0].id} iconName={icons} />
        </div>
        <div className="eventInfo">
          <h5>{title}</h5>
          <span>{date}</span>
        </div>
      </div>
    )
  )

  return (
    <>
      <div className="sideContainer">
        <div className="eventsHeader">
          <h2>Nature Events around the world, Last Year</h2>
          <div>{nasaEventsInfo.length} events.</div>
          <div>{dateFilterHandler}</div>
        </div>
        <div className="eventsContainer">
          {dateFilterState ? mapEvents.reverse() : mapEvents}
        </div>
      </div>
    </>
  )
}

export default SideInfo
