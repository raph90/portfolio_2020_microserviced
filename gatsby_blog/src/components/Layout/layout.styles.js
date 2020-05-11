import React from "react"
import styled from "styled-components"
import { responsive } from "../../utils/responsive"

export const LayoutContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export const MainContent = styled.main`
  height: 100vh;
  width: calc(100vw - 36rem);
  padding: 8rem 14rem;
  overflow: scroll;
  ${responsive.tabLand(`
  padding: 5rem 10rem;
  `)}
`
