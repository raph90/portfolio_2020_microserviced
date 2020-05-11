import React from "react"
import styled from "styled-components"
import { colors } from "../../../utils/typography"
import { responsive } from "../../../utils/responsive"

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 24rem;
  box-shadow: 3px 0px 3px rgba(0, 0, 0, 0.1);
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  // background-color: #f7f6f4;
  ${responsive.tabPort(`
    width: 24rem;
  `)}
`

export const InnerContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`

export const LogoTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 3rem;
  ${responsive.deskLarge(`
  font-size: 5.6rem;
`)}
`

export const Icon = styled.svg`
  width: 2.8rem;
  height: auto;
  margin-right: 1.5rem;
  cursor: pointer;

  & path {
    fill: ${colors.mainGrey};
  }

  &:hover {
    path {
      fill: green;
    }
  }
`

export const Icons = styled.div`
  margin-top: 2rem;
`

export const Links = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  position: relative;

  transform: translateX(1.8rem);
`

export const LinkSlidingLine = styled.div`
  height: 4rem;
  width: 0.2rem;
  background-color: ${props => calculateColor(props.path)};
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: center;
  transform: ${props => {
    const y = calculateYPos(props.path)
    return `translate(-1.8rem, ${y}rem);`
  }};
  opacity: ${props => (props.path === "/" ? 0 : 1)};

  transition: transform 0.3s;
`

export function calculateColor(path) {
  const { color1, color2, color3, color4, color5 } = colors
  const mapPathToColor = {
    "/": color1,
    "/blog": color5,
    "/about": color2,
    "/portfolio": color3,
    "/contact": color4,
  }

  return mapPathToColor[path]
}

function calculateYPos(path) {
  switch (path) {
    case "/":
      return -300
    case "/about":
      return 1.1
    case "/blog":
      return 7.1
    case "/portfolio":
      return 13.1
    case "/contact":
      return 19.1
    default:
      return 10
  }
}
