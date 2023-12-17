
import React from 'react';

import { NavLink } from 'react-router-dom';

function NavItem(props : {
  toRoute: string,
  children: any
}) {
  const { toRoute, children } = props;
  return (
    <NavLink
      to={toRoute}
      style={({ isActive}) => ({
        textDecoration: 'none',
        color: isActive ? 'black' : 'gray',
      })}
      className={`
        inline-flex
        md:min-w-[11em]
        md:max-w-[11em]
        max-md:min-w-full

        min-h-[3em]
        max-h-[3em]

        transition-[color]
        duration-[0.5s]

        items-center
        justify-center
      `}
    >
      {children}
    </NavLink>
  );
}

export default NavItem;
