import React from "react"
import Layout from "../components/Layout/layout.component"
import { LargePageTitle } from "../components/titles/titles.style"

function About({ location, data }) {
  console.log(data)
  return (
    <>
      <LargePageTitle>About</LargePageTitle>
      <p>
        I am a self-taught full-stack developer, currently studying for a
        conversion MSc in Computer Science at University College Dublin. While I
        enjoy building fullstack apps and RESTful APIs with both Javascript
        (Node and Express) and Python (Django, Flask) on the backend, my passion
        is front-end development, with React my library of choice. My workflow
        includes: Webpack for bundling my modules and Babelising my ECMAScript 6
        Flexbox, CSS Grid, and SASS (with BEM for structure) for my CSS React
        libraries include Styled Components and Material UI MongoDB, MySQL and
        GraphQL for sourcing and storing my data I also have experience working
        with D3 for data visualisation, Hammer.js for swipe UI events and Ionic
        for mobile interfaces. On the DevOps side of things, I have experience
        working with EC2 and AWS, and have recently started experimenting with
        Docker and microservices. Additionally, my course at UCD has educated me
        in: Java development Data analytics (and CRISP-DM methodology) in Python
        with Scikit-learn, Pandas and Numpy Shell scripting Algorithms, data
        structures and other Computer Science fundamentals Prior to my
        adventures in Computer Science, I gained a 2.i BA in Music from the
        University of Cambridge and worked internationally as a freelance
        private tutor and educational consultant, teaching in Russia, South
        America, Australia and Canada. I speak Russian and French, and enjoy
        playing football, piano and guitar.
      </p>
    </>
  )
}

export default About

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
