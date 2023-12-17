
import React, { useState, useEffect } from 'react';

function Nav(props : {
  showNav : boolean,
  buttonEvent: boolean,
  children: any
}) {
  const { showNav, buttonEvent, children } = props;

  const [maxMd, setMaxMd] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );
  useEffect(() => {
    window.matchMedia('(max-width: 768px)')
          .addEventListener('change', e => setMaxMd(e.matches))
  }, [maxMd]);
  return (
    <span
      style={maxMd ? {
        transitionDelay: `${buttonEvent ? 0 : 0.35}s`,
        maxHeight: `${showNav ? 100 : 0}em`
      } : {}}
      className={`
        relative
        inline-flex
        flex-wrap
        md:min-w-[70%]

        max-md:min-w-full
        max-md:max-w-full

        max-md:transition-[max-height]
        max-md:duration-[0.35s]

        overflow-hidden
        items-center
      `}
    >
      {children}
    </span>
  );
}

export default Nav;
