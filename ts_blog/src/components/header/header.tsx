import { Link } from 'gatsby'
import * as React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import {
  HeaderContainer,
  Title,
  Titles,
  HeaderLinks,
  HeaderLink,
} from './header.style'
import GitHubButton from 'react-github-btn'

interface HeaderProps {
  siteTitle?: string
}

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
  <HeaderContainer>
    <Titles>
      <TransitionLink to="/">
        <Title>Raphael Hetherington </Title>
      </TransitionLink>
    </Titles>
    <HeaderLinks>
      <HeaderLink to="#">
        <h3>projects</h3>
      </HeaderLink>
      <HeaderLink to="#">
        <h3>blog</h3>
      </HeaderLink>
      <HeaderLink to="#">
        <h3>about</h3>
      </HeaderLink>
    </HeaderLinks>
  </HeaderContainer>
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
