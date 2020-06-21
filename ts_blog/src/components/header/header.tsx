import { Link } from 'gatsby'
import * as React from 'react'
import { HeaderContainer, Title } from './header.style'
import GitHubButton from 'react-github-btn'
interface HeaderProps {
  siteTitle?: string
}

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
  <HeaderContainer animate={{ opacity: 1 }}
    transition={{ duration: 2, delay: 3 }}>

    <Title>raphael hetherington</Title>

    <GitHubButton href="https://github.com/raph90" aria-label="Follow @raph90 on GitHub">Follow @raph90</GitHubButton>

  </HeaderContainer>
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
