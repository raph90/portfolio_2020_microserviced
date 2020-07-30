import { graphql, Link } from 'gatsby'
import * as React from 'react'
import SEO from '../components/seo'
import Section from './page-specific-components/index/section/section.component'
import TreeToggle, {
  ITreeStructure,
} from '../components/tree-toggle/tree-toggle.component'
import TransitionLink from 'gatsby-plugin-transition-link'

export interface PostNode {
  node: {
    excerpt: string
    frontmatter: {
      date: string
      title: string
      slug: string
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

const testData: ITreeStructure = {
  sections: [
    {
      title: 'Hello you',
      sections: [
        {
          title: 'Hello Caoimhe',
          textPoints: [],
          sections: [],
          id: 'caoimhe',
        },
      ],
      textPoints: [],
      id: 'secondLevel',
    },
  ],
  title: 'Example 1',
  textPoints: ["I'm a text point"],
  id: 'topLEvel',
}

class IndexPage extends React.Component<IndexPageProps> {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <>
        <SEO title="Home" />
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

          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`
