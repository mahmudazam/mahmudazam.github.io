
import React from 'react'

import NavItem from './NavItem'

function Title(props : {
  children: any
}) {
  const { children } = props
  return (
    <NavItem>
      <span className={`
        text-[1.2em]
        md:text-[1.25em]
        font-bold
      `}>
        {children}
      </span>
    </NavItem>
  )
}

export default Title

