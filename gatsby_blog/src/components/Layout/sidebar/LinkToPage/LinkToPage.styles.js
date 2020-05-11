import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from "../../../../utils/typography"
import { calculateColor } from "../sidebar.styles"
import { centerAbsolute } from "../../../../utils/global_styles"

export const StyledLink = styled(Link)`
  box-sizing: border-box;
  font-size: 1.6rem;
  text-decoration: none;
  color: ${props =>
    props.active ? calculateColor(props.path) : colors.mainGrey};
  padding: 1.5rem 0;
  // border: 1px solid black;
`

export const StyledLinkContainer = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
`

// &::after {
//   content: "";
//   position: absolute;
//   transition: all 0.3s ease-out;
//   top: 0;
//   transform: ${props =>
//     props.active ? "translateX(-4.8rem)" : "translateX(-50rem)"};
//   left: 0;
//   width: 24rem;
//   height: 100%;
//   background-color: ${props =>
//     props.active ? calculateColor(props.path) : "white"};
//   z-index: 10;
//   // clip-path: polygon(0 0, 92% 0, 100% 100%, 0% 100%);
// }
