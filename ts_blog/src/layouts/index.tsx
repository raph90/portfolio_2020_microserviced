import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import Header from '../components/header/header'
import Transition from '../components/transition'
import { ContentDiv, MainContentContainer } from './layout.style'

import './layout.css'
import Sidebar from './sidebar/sidebar.component'
import { ThemeProvider } from 'styled-components'
import {
  myThemeContext,
  IThemeContext,
} from './themeProvider/themeProvider.component'

interface IMainContentProps {
  context: IThemeContext
}

const MainContent: React.FC<IMainContentProps> = (props) => {
  const { mainColor } = props.context.currentTheme
  const { changeTheme } = props.context
  return (
    <MainContentContainer
      color={mainColor}
      onClick={() => changeTheme('secondary')}
    >
      {props.children}
    </MainContentContainer>
  )
}

const Layout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <div style={{ width: '100%', height: '100vh' }}>
        <myThemeContext.Consumer>
          {(context) => (
            <>
              <Sidebar context={context} />
              <MainContent context={context}>{children}</MainContent>
            </>
          )}
        </myThemeContext.Consumer>
      </div>
    )}
  />
)

export default Layout
