import React from "react"
import {
  SidebarContainer,
  Icons,
  Links,
  InnerContainer,
  LinkSlidingLine,
} from "./sidebar.styles"

import LinkedinLogo from "../../icons/linkedin/linkedin.component"
import GithubLogo from "../../icons/github/github.component"
import LinkToPage from "./LinkToPage/LinkToPage.component"
import { Link } from "gatsby"
import { LogoTitle } from "../../titles/titles.style"

function Sidebar({ currentPath }) {
  console.log("sidebar rendered")
  return (
    <SidebarContainer>
      <InnerContainer>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LogoTitle>Raphael Hetherington</LogoTitle>
        </Link>

        <Icons>
          <GithubLogo />
          <LinkedinLogo />
        </Icons>
        <Links>
          <LinkSlidingLine path={currentPath} />
          <LinkToPage currentPath={currentPath} title="about" path="/about" />
          <LinkToPage currentPath={currentPath} title="blog" path="/blog" />
          <LinkToPage
            currentPath={currentPath}
            title="portfolio"
            path="/portfolio"
          />
          <LinkToPage
            currentPath={currentPath}
            title="contact"
            path="/contact"
          />
        </Links>
      </InnerContainer>
    </SidebarContainer>
  )
}

export default Sidebar
