
import React from 'react';
import { useMedia, useNavState } from '../state'

function Nav(props : {
  children: any
}) {
  const { children } = props;
  const showNav = useNavState(state => state.showNav)
  const collapseNavDelay = useNavState(state => state.collapseNavDelay)
  const maxMd = useMedia(state => state.maxMd)

  return (
    <span
      className={`
        relative
        inline-flex
        flex-wrap
        md:min-w-[72vw]
        min-w-full
        max-w-full
        items-center

        max-md:overflow-hidden
      `}
      style={maxMd ? {
        transitionProperty: 'max-height',
        transitionDuration: '0.35s',
        transitionDelay: `${collapseNavDelay ? 0.35 : 0}s`,
        maxHeight: `${showNav ? 100 : 0}em`
      } : {}}
    >
      {children}
    </span>
  );
}

export default Nav;
