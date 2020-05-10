import React from "react"
import styled from "styled-components"
import { colors } from "../../../utils/typography"

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 36rem;
  box-shadow: 3px 0px 3px rgba(0, 0, 0, 0.1);
  padding: 7rem;
`

export const Icon = styled.svg`
  width: 2.4rem;
  height: auto;
  margin-right: 1rem;

  & path {
    fill: blue;
  }

  &:hover {
    path {
      fill: green;
    }
  }
`
