import React from "react"
import LoaderSVG from "../images/loader.svg"

const Loader = ({ type }) => {
  const typeHandler = () => {
    if (type === "loaderSec") {
      return "___loaderSecondery"
    } else {
      return "___loader"
    }
  }

  return (
    <>
      <div id={typeHandler()}>
        <img src={LoaderSVG} alt="loading spinner" width="150" height="150" />
      </div>
    </>
  )
}

export default Loader
