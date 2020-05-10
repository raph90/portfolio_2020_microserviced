import React from "react"
import { Link } from "gatsby"
import { StyledLink } from "./LinkToPage.styles"

function LinkToPage({ title, path, currentPath }) {
  console.log("path,", path, "currentpath", currentPath)
  console.log(currentPath === path)
  return (
    <div style={{ height: "6rem", display: "flex", alignItems: "center" }}>
      <StyledLink path={path} active={currentPath === path} to={path}>
        {title}
      </StyledLink>
    </div>
  )
}

export default LinkToPage
