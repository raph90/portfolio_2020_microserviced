import React, { FC } from 'react'
import {
  SidebarOuterContainer,
  SidebarInnerContainer,
  SidebarNameTitle,
  SidebarFooter,
  HiMessage,
} from './sidebar.style'
import { IThemeContext } from 'layouts/themeProvider/themeProvider.component'

export interface ISidebarProps {
  context: IThemeContext
}

const Sidebar: FC<ISidebarProps> = (props) => {
  const color = props.context.currentTheme.mainColor
  return (
    <SidebarOuterContainer>
      <SidebarInnerContainer>
        <SidebarNameTitle>Raphael Hetherington</SidebarNameTitle>
        <HiMessage>
          <h1>{"Hi, I'm Raph."}</h1>
          <p style={{ marginTop: '6rem' }}>
            I'm a web developer and aspiring software engineer, living and
            working in Dublin, Ireland.
          </p>
          <p style={{ marginTop: '4rem' }}> To get in touch,</p>
          <p style={{ marginTop: '-1.7rem' }}>
            {' '}
            please write to me at{' '}
            <span style={{ color }}>raphheth.webdev@gmail.com</span>.
          </p>
        </HiMessage>
        <SidebarFooter>&copy; Raphael Hetherington 2020</SidebarFooter>
      </SidebarInnerContainer>
    </SidebarOuterContainer>
  )
}

export default Sidebar
