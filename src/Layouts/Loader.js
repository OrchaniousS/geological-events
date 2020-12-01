import React, { useEffect } from "react"
import LoaderSVG from "../images/loader.svg"
import NProgress from "nprogress"

const Loader = () => {
  useEffect(() => {
    NProgress.configure({
      // parent: "#loaderContent",
      minimum: 0.1,
      easing: "ease",
      trickleSpeed: 800,
      speed: 200,
    })
    NProgress.set(0.0)
    NProgress.set(0.4)
    NProgress.set(1.0)
  }, [])
  return (
    <>
      <div id="___loader">
        <img
          id="loaderContent"
          src={LoaderSVG}
          alt="loading spinner"
          width="150"
          height="150"
        />
      </div>
    </>
  )
}

export default Loader
