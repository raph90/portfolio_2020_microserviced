import React from "react"
import styled from "styled-components"
import { responsive } from "../../utils/responsive"

export const LayoutContainer = styled.div`
  display: flex;
  position: relative;
`
const sidebarSize = "24rem"
export const MainContent = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;

  padding: 8rem 14rem;
  position: absolute;
  left: 24rem; 

  ${responsive.deskLarge(`
    padding: 20rem 25%;
  `)}
  ${responsive.tabLand(`
  padding: 5rem 6rem;
  `)}
  // might want to get rid of this
  ${responsive.tabPort(`
  padding: 5rem 8rem;
  width: 100vw;
  left: 0;

  `)}
  ${responsive.phone(`
    padding: 5rem 3rem ; 
  `)}
`
