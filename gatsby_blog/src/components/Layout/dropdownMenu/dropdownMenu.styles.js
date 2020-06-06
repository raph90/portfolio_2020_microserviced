import styled from "styled-components"
import { responsive } from "../../../utils/responsive"

export const DropdownContainer = styled.div`
  width: 100%;
  height: 15rem;
  background-color: red;
  position: fixed;
  bottom: 0;
  left: 0;
  transform: ${props => (props.open ? "translate(0)" : "translateY(15rem)")};
  transition: transform 0.2s ease-out;
  z-index: 4;
  display: none;
  ${responsive.tabPort(`display: block;`)}
`

export const MenuToggle = styled.div`
  display: none;
  height: 5rem;
  background-color: blue;
  width: 5rem;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 5;
  ${responsive.tabPort(`display: block;`)}
`
