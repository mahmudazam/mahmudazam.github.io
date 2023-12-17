
import React from 'react';
import { HiChevronDoubleDown } from 'react-icons/hi';

const NavButtonStyle = `
  md:hidden
  absolute right-[0.75em] top-[1em]
  h-[2em] w-[2em]
  bg-white
  border-solid border-[1px] rounded-sm
  cursor-pointer
  grid grid-cols-1
`;

const ChevronAnimation = (pointUp : boolean) => `
  transition-transform
  duration-[0.35s]
  origin-center ${pointUp ? 'rotate-180' : 'rotate-0'}
  place-self-center
`;

function NavButton(props : {
  showNav : boolean,
  onClick : () => void
}) {
  const {showNav, onClick} = props;
  return (
    <div className={NavButtonStyle} onClick={onClick}>
      <HiChevronDoubleDown
        className={ChevronAnimation(showNav)}
      />
    </div>
  );
}

export default NavButton;

