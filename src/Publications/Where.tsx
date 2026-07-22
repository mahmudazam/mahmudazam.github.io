
var Latex = require('react-latex')

export enum WhereTag {
  JOURNAL = "Journal",
  INREVIEW = "InReview",
}

export interface Journal {
  readonly tag: WhereTag.JOURNAL,
  name: string,
  volume: number,
  number: number,
  pages: { from : number, to : number },
  URL?: { path: string, display: string },
  preprintURL?: { path: string, display : string },
}

export interface InReview {
  readonly tag: WhereTag.INREVIEW,
  preprintURL?: { path : string, display : string },
}

export type Where = Journal | InReview

export interface Publication {
  title: string,
  author: Array<string>,
  where: Where,
  time : { year : number, month : number, day: number },
}

function matchError(n: never) : never {
  throw new Error('Where: Error in pattern matching')
}

function preprint(preprintURL: any) {
  return (
    <li>
      Preprint: <a href={preprintURL.path}>{preprintURL.display}</a>
    </li>
  )
}

export function whereToJSX(where: Where) {
  switch(where.tag) {
  case WhereTag.JOURNAL:
    const journalText = (<>
        <Latex>{where.name}</Latex>
        , {where.volume}{where.number && `(${where.number})`}
        , p. {where.pages.from}{where.pages.to && ' - ' + where.pages.to}.
    </>)
    return (<>
      <li>
        Journal: {where.URL ? (<a href={where.URL.path}>{journalText}</a>) : journalText}
      </li>
      {where.preprintURL && preprint(where.preprintURL)}
    </>)
  case WhereTag.INREVIEW:
    return (
      <>
        {where.preprintURL && preprint(where.preprintURL)}
      </>
    )
  default:
    matchError(where)
  }
}

