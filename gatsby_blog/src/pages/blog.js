import React from "react"

import Layout from "../components/Layout/layout.component"
import { LargePageTitle } from "../components/titles/titles.style"
import BlogSearch from "../components/pageBased/blog/blog-search/blog-search.component"
import BlogItem from "../components/pageBased/blog/blog-item/blog-item.component"
function Blog({ location, data }) {
  console.log(data)

  const handleSearch = () => {
    console.log("handled")
  }

  const blogItems = data.allMarkdownRemark.edges.map(post => {
    return <BlogItem title={post.node.frontmatter.title} />
  })
  return (
    <>
      <LargePageTitle>blog</LargePageTitle>
      <BlogSearch handleSearch={handleSearch} />
      {blogItems}
    </>
  )
}

export default Blog

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
