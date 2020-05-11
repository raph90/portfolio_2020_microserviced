import React, { useState } from "react"
import { BlogSearchInput } from "./blog-search.styles"

function BlogSearch({ handleSearch }) {
  const [input, setInput] = useState("")
  return (
    <BlogSearchInput
      value={input}
      onChange={e => setInput(e.target.value)}
      placeholder="Search for a topic"
    />
  )
}

export default BlogSearch
