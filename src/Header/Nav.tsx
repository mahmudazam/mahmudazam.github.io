
import React from 'react';

import styled from 'styled-components';

const TransformingNav = styled.span<{
  showNav : boolean,
  buttonEvent : boolean
}>`
@media only screen and (max-width: 768px) {
  transition-delay: ${props => props.buttonEvent ? '0' : '0.35'}s;
  max-height: ${props => props.showNav ? '100' : '0'}em;
}
`;

function Nav(props : {
  showNav : boolean,
  buttonEvent: boolean,
  children: any
}) {
  const { showNav, buttonEvent, children } = props;
  return (
    <TransformingNav
      showNav={showNav}
      buttonEvent={buttonEvent}
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
    </TransformingNav>
  );
}

export default Nav;
