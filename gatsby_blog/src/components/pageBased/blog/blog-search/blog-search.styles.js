import React from "react"
import styled from "styled-components"
import { colors } from "../../../../utils/typography"

export const BlogSearchInput = styled.input`
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  font-size: 1.8rem;
  color: ${colors.mainGrey};

  &:focus {
    outline: none;
  }
`
