import styled from 'styled-components'
export interface IToggleIconProps {
  open: boolean
}

export const ToggleIcon = styled.span<IToggleIconProps>`
  transform: ${(props) => (props.open ? 'rotate(90deg)' : 'none')};
  color: ${(props) => (props.open ? 'green' : 'blue')};
`

export const TreeTitle = styled.h2`
  display: inline-block;
`
