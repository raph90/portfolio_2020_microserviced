import styled from 'styled-components'
import { theme } from '../../utils/theme'
import TransitionLink from 'gatsby-plugin-transition-link'

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;
`

interface TitlesProps {
  subtitle?: boolean
}
export const Titles = styled.div`
  & a {
    text-decoration: none;
  }
  padding: 2rem 0;
`

export const Title = styled.h3``

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HeaderLink = styled(TransitionLink)`
  margin-left: 2rem;
  text-decoration: none;
`
