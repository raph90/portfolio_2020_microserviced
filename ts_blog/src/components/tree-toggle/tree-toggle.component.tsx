import React, { FC, useState } from 'react'
import { ToggleIcon, TreeTitle } from './tree-toggle.styles'

export interface ITreeStructure {
  title: string
  sections: ITreeStructure[]
  textPoints: any[]
  id: string
}

const TreeToggle = (props: ITreeStructure) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div style={{ marginLeft: '1rem' }}>
      <TreeTitle onClick={handleOpen}>
        <ToggleIcon open={open}>{'>'}</ToggleIcon>
        {props.title}
      </TreeTitle>
      {open &&
        props.sections.map((section) => (
          <TreeToggle
            title={section.title}
            key={section.id}
            id={section.id}
            textPoints={section.textPoints}
            sections={section.sections}
          />
        ))}
    </div>
  )
}

export default TreeToggle
