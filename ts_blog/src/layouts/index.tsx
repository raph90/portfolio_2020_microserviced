import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import Header from '../components/header/header'
import Transition from '../components/transition'
import { ContentDiv } from './layout.style'

import "./layout.css"


const Layout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
          }
        }
      }
    `}
    render={data => (
      <div style={{ width: "100%", }}>

        <ContentDiv>
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
        </ContentDiv>

      </div>
    )}
  />
)

export default Layout
