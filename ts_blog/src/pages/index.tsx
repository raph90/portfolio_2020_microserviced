import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Image from '../components/image'
import SEO from '../components/seo'
import Layout from '../layouts'
import {
  IntroSection,
  Subtitle,
  SectionsDiv,
  Section,
  SectionTitle,
  ControlArea,
} from './page-specific-styles/index/index.styles'
import { theme } from '../utils/theme'
import BlogPostClicker from '../components/blog-post-clicker/blog-post-clicker.component'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface PostNode {
  node: {
    excerpt: string
    frontmatter: {
      date: string
      title: string
    }
    fields: {
      slug: string
    }
  }
}

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
    allMarkdownRemark: {
      edges: PostNode[]
    }
  }
}

class IndexPage extends React.Component<IndexPageProps, {}> {
  render() {
    const { data } = this.props

    const posts = data.allMarkdownRemark.edges
    const variants = {
      open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
      },
    }

    return (
      <>
        <SEO
          title="All posts"
          keywords={['blog', 'gatsby', 'javascript', 'react']}
        />
        <ControlArea />
      </>
    )
  }
}

export default IndexPage

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
          }
        }
      }
    }
  }
`
