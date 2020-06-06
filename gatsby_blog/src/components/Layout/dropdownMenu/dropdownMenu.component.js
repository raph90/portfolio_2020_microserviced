import React, { useState } from "react"
import { DropdownContainer, MenuToggle } from "./dropdownMenu.styles"

function DropdownMenu({ currentPath }) {
  const [menuToggled, setMenuToggled] = useState(false)
  const handleToggle = () => {
    console.log("clicked")
    setMenuToggled(menuToggled => setMenuToggled(!menuToggled))
  }
  return (
    <>
      <DropdownContainer open={menuToggled}></DropdownContainer>
      <MenuToggle onClick={handleToggle} />
    </>
  )
}

export default DropdownMenu
