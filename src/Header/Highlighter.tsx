
import React, { useState, useEffect } from 'react';

function Highlighter(props: {
  navSeq: number
}) {
  const { navSeq } = props;

  const [md, setMd] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );
  useEffect(() => {
    window.matchMedia('(min-width: 768px)')
          .addEventListener('change', e => setMd(e.matches))
  }, [md]);

  return (
    <span
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
      style={{
        transform: md ? `translateX(${navSeq * 11}em)`
                      : `translateY(${navSeq * 3}em)`
      }}
    />
  );
}

export default Highlighter;
