import React from "react"
import Head from "../Layouts/Head"
import { Link } from "gatsby"

export default function Error() {
  return (
    <>
      <Head />
      <div>
        <p>Sorry looks like you mistakely came here ....</p>
        <Link to="/">Go back</Link>
      </div>
    </>
  )
}
