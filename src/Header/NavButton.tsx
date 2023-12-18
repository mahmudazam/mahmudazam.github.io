
import React from 'react'
import { HiChevronDoubleDown } from 'react-icons/hi'

import { useNavState } from '../state'

const NavButtonStyle = `
  md:hidden
  absolute right-[7vw] top-[1.5vh]
  h-[4vh] w-[4vh]
  bg-white
  border-solid border-[1px] rounded-sm
  cursor-pointer
  grid grid-cols-1
`

const ChevronAnimation = (pointUp : boolean) => `
  transition-transform
  duration-[0.35s]
  origin-center ${pointUp ? 'rotate-180' : 'rotate-0'}
  place-self-center
`

function NavButton(props : {
  onClick : () => void
}) {
  const { onClick } = props
  const showNav = useNavState(state => state.showNav)

  return (
    <div className={NavButtonStyle} onClick={onClick}>
      <HiChevronDoubleDown
        className={ChevronAnimation(showNav)}
      />
    </div>
  )
}

export default NavButton

