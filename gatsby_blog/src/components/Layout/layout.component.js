import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../../utils/typography"
import Sidebar from "./sidebar/sidebar.component"
import { LayoutContainer, MainContent } from "./layout.styles"

const Layout = props => {
  return (
    <LayoutContainer>
      <Sidebar currentPath={props.location.pathname} />
      <MainContent>{props.children}</MainContent>
    </LayoutContainer>
  )
}

export default Layout
