import React from "react"
import Layout from "../components/Layout/layout.component"
function Portfolio({ location, data }) {
  console.log(data)
  return <h1>I'm the portfolio</h1>
}

export default Portfolio

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
