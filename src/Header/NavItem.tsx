
import React from 'react'

function NavItem(props : {
  className?: string
  style?: any
  children: any
}) {
  const { className, style, children } = props
  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center

        min-w-[100vw]
        min-h-[7vh]

        md:min-w-[18vw]
      ` + className}
      style={style}
    >
      {children}
    </span>
  )
}

export default NavItem
