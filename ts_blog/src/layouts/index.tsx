import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import Header from '../components/header'
import Transition from '../components/transition'


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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Transition >
          {children}
        </Transition>


      </>
    )}
  />
)

export default Layout
