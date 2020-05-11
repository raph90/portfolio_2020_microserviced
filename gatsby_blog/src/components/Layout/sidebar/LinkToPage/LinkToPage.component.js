import React from "react"
import { Link } from "gatsby"
import { StyledLink, StyledLinkContainer } from "./LinkToPage.styles"

function LinkToPage({ title, path, currentPath }) {
  console.log("path,", path, "currentpath", currentPath)
  console.log(currentPath === path)
  return (
    <StyledLinkContainer path={path} active={currentPath === path}>
      <StyledLink path={path} active={currentPath === path} to={path}>
        {title}
      </StyledLink>
    </StyledLinkContainer>
  )
}

export default LinkToPage
