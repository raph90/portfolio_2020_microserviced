import React from 'react'
import {
  SectionContainer,
  SectionList,
  SectionListItem,
  SectionTitle,
  DateSpan,
} from './section.style'
import { PostNode } from 'pages'
import { Link } from 'gatsby'

export interface ISectionProps {
  title: string
  data: PostNode[]
}

const Section = (props: ISectionProps): React.ReactElement => {
  return (
    <SectionContainer>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionList>
        {props.data.map((datum) => (
          <SectionListItem key={datum.node.frontmatter.slug}>
            <Link to={datum.node.frontmatter.slug}>
              <DateSpan>{datum.node.frontmatter.date}</DateSpan>

              {datum.node.frontmatter.title}
            </Link>
          </SectionListItem>
        ))}
      </SectionList>
    </SectionContainer>
  )
}

export default Section
