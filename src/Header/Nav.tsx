
import React from 'react';
import { useMedia } from '../state'

function Nav(props : {
  showNav : boolean,
  buttonEvent: boolean,
  children: any
}) {
  const { showNav, buttonEvent, children } = props;
  const maxMd = useMedia(state => state.maxMd)

  return (
    <span
      className={`
        relative
        inline-flex
        flex-wrap
        md:min-w-[70%]

        max-md:min-w-full
        max-md:max-w-full

        overflow-hidden
        items-center
      `}
      style={maxMd ? {
        transitionProperty: 'max-height',
        transitionDuration: '0.35s',
        transitionDelay: `${buttonEvent ? 0 : 0.35}s`,
        maxHeight: `${showNav ? 100 : 0}em`
      } : {}}
    >
      {children}
    </span>
  );
}

export default Nav;
