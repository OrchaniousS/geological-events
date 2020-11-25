import React from "react"
import LoaderSVG from "../images/loader.svg"

export default function loader() {
  return (
    <>
      <div
        key={`loader`}
        id="___loader"
        style={{
          alignItems: "center",
          backgroundColor: "#F2F2F2",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 100,
        }}
      >
        <img src={LoaderSVG} alt="loading spinner" width="150" height="150" />
      </div>
    </>
  )
}
