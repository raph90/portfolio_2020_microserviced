import React from "react"
import { SidebarContainer, MainHeadingText, Icon } from "./sidebar.styles"

import LinkedinLogo from "../../icons/linkedin/linkedin.component"
import GithubLogo from "../../icons/github/github.component"

function Sidebar({ currentPath }) {
  return (
    <SidebarContainer>
      <h1>Raphael Hetherington</h1>
      <GithubLogo />
      <LinkedinLogo />
    </SidebarContainer>
  )
}

export default Sidebar
