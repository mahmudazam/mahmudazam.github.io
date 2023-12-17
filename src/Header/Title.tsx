
import React from 'react';

function Title(props : {
  children: any
}) {
  const { children } = props;
  return (
    <span className={`
      inline-flex
      md:min-w-[30%]
      md:max-w-[30%]

      max-md:min-w-full
      max-md:min-h-[3em]
      max-md:max-h-[3em]

      items-center
      justify-center
      text-[1.5em]
      font-bold
    `}>
      {children}
    </span>
  );
}

export default Title;

