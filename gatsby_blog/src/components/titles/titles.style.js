import React from "react"
import styled from "styled-components"
import { colors } from "../../utils/typography"
import { responsive } from "../../utils/responsive"

export const LargePageTitle = styled.h1`
  font-size: 4rem;
  padding-bottom: 2rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid ${colors.lightGrey};
  ${responsive.tabLand(`font-size: 3.2rem;`)}
  ${responsive.deskLarge(`font-size: 5.6rem;`)}
`
