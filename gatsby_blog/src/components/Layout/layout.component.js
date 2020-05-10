import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../../utils/typography"
import Sidebar from "./sidebar/sidebar.component"

const Layout = props => {
  console.log("layout props", props)
  return (
    <div>
      <Sidebar currentPath={props.location.pathname} />
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
