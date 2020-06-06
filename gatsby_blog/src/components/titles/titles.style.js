import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/typography"
import { responsive } from "../../utils/responsive"

export const LargePageTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 3rem;
  // border-bottom: 1px solid ${colors.lightGrey};
  ${responsive.tabLand(`font-size: 3.2rem;`)}
  ${responsive.deskLarge(`font-size: 5.6rem;`)}
  text-transform: lowercase;
`
export const LogoTitle = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 3rem;
//   ${responsive.deskLarge(`
//   font-size: 5.6rem;
// `)}
//   ${responsive.tabLand(`font-size: 3.2rem;`)}
`
