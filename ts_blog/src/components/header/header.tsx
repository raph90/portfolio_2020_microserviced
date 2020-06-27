import { Link } from 'gatsby'
import * as React from 'react'
import { HeaderContainer, Title, Titles } from './header.style'
import GitHubButton from 'react-github-btn'

interface HeaderProps {
  siteTitle?: string
}

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
  <HeaderContainer>
    <Titles>
      <Title>Raphael Hetherington</Title>
      <Title subtitle>Software Engineering</Title>
    </Titles>

    <GitHubButton
      href="https://github.com/raph90"
      aria-label="Follow @raph90 on GitHub"
    >
      Follow @raph90
    </GitHubButton>
  </HeaderContainer>
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
