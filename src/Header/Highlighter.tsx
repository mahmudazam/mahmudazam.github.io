
import React from 'react';

import styled from 'styled-components';

const TransformingHltr = styled.span<{ navSeq: number }>`
  @media only screen and (min-width: 768px) {
    transform: translateX(${props => props.navSeq * 11}em);
  }
  @media only screen and (max-width: 768px) {
    transform: translateY(${props => props.navSeq * 3}em)
  }
`;

function Highlighter(props: {
  navSeq: number
}) {
  const { navSeq } = props;
  return (
    <TransformingHltr
      navSeq={navSeq}
      className={`
        absolute
        transition-transform
        duration-[0.35s]

        inline-flex
        md:min-w-[11em]
        md:min-h-[2.75em]

        max-md:top-0
        max-md:left-[25%]
        max-md:min-w-[50%]
        max-md:min-h-[2.75em]

        border-solid
        border-l-0
        border-t-0
        border-r-0
        border-b-4
      `}
    />
  );
}

export default Highlighter;
