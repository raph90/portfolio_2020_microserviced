import React, { FC } from 'react'
import SEO from '../components/seo'

export interface BlogProps {}

const Blog: FC<BlogProps> = (props: BlogProps) => {
  return (
    <>
      <SEO title="blog" />
      <h1>{"I'm the blog"}</h1>
    </>
  )
}

export default Blog
