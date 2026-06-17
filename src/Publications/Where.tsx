
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

export function whereToJSX(where: Where) {
  switch(where.tag) {
  case WhereTag.JOURNAL:
    return (<span>
      <Latex>{where.name}</Latex>
      , {where.volume}{where.number && `(${where.number})`}
      : page {where.pages.from}{where.pages.to && ' --- ' + where.pages.to}.
      <div style={{ display: 'flex', gap: '1em' }}>
        {where.URL && (
            <span>
              <a href={where.URL.path}>
                {where.URL.display}
              </a>
            </span>
        )}
        {where.preprintURL && (
            <span>
              <a href={where.preprintURL.path}>
                {where.preprintURL.display}
              </a>
            </span>
        )}
      </div>
    </span>)
  case WhereTag.INREVIEW:
    return (
      <>
        <span>In review.</span>
        <div>
          {where.preprintURL && (
            <span>
              <a href={where.preprintURL.path}>
                {where.preprintURL.display}
              </a>
            </span>
          )}
        </div>
      </>
    )
  default:
    matchError(where)
  }
}

