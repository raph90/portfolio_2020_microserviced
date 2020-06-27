import styled from 'styled-components'
import { theme } from '../../utils/theme'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

interface TitlesProps {
  subtitle?: boolean
}
export const Titles = styled.div``

export const Title = styled.h3<TitlesProps>`
  color: white;
  font-weight: ${(props) => (props.subtitle ? 100 : 300)};
  font-size: ${(props) => (props.subtitle ? '1.8rem' : '2.4rem')};
`
