import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from "../../../../utils/typography"
import { calculateColor } from "../sidebar.styles"
export const StyledLink = styled(Link)`
  box-sizing: border-box;
  font-size: 1.8rem;
  text-decoration: none;
  color: ${props =>
    props.active ? calculateColor(props.path) : colors.mainGrey};
  padding: 1.5rem 0;
  // border: 1px solid black;
`
