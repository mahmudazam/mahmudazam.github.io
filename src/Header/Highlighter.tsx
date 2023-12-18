
import React from 'react';

import { useMedia, MediaState } from '../state';

import NavItem from './NavItem'

function Highlighter(props: {
  navSeq: number
}) {
  const { navSeq } = props;
  const md = useMedia((state: MediaState) => state.md);

  return (
    <NavItem
      className={`
        absolute
        top-0
        left-0
        transition-transform
        duration-[0.35s]
      `}
      style={{
        transform: md ? `translateX(${navSeq * 18}vw)`
                      : `translateY(${navSeq * 7}vh)`
      }}
    >
      <span
        className={`
        min-w-[30vw]
        min-h-[6.25vh]

        md:min-w-[15vw]
        md:min-h-[7vh]

        lg:min-w-[10vw]

        border-solid
        border-l-0
        border-t-0
        border-r-0
        border-b-4
        `}
      />
    </NavItem>
  );
}

export default Highlighter;
