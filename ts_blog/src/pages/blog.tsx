import React, { FC } from 'react'

export interface BlogProps {}

const Blog: FC<BlogProps> = (props) => {
  return <h1>{"I'm the blog"}</h1>
}

export default Blog
