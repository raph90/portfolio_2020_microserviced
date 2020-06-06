import React from "react"

import Sidebar from "./sidebar/sidebar.component"
import { LayoutContainer, MainContent } from "./layout.styles"
import DropdownMenu from "./dropdownMenu/dropdownMenu.component"

const Layout = props => {
  return (
    <LayoutContainer>
      <Sidebar currentPath={props.location.pathname} />
      <DropdownMenu currentPath={props.location.pathname} />
      <MainContent>
        <div>{props.children}</div>
      </MainContent>
    </LayoutContainer>
  )
}

export default Layout
