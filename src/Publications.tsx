
import { PageDiv } from './App';

//var Latex = require('react-latex');

enum WhereTag {
  JOURNAL = "Journal",
  INREVIEW = "InReview",
}

interface Journal {
  readonly tag: WhereTag.JOURNAL,
  name: string,
  volume: number,
  number: number,
  pages: { from : number, to: number },
}

interface InReview {
  readonly tag: WhereTag.INREVIEW,
  preprintURL?: { path : string, display: string },
}

interface Publication {
  title: string,
  author: Array<string>,
  where: Journal | InReview,
  time : { year : number, month : number, day: number },
}

const publications : Array<Publication> = [
{
  title: 'TQFTs and Quantum Computing',
  author: ['Mahmud Azam', 'Steven Rayan'],
  where: {
    tag: WhereTag.INREVIEW,
    preprintURL : {
      path: 'https://arxiv.org/abs/2210.03556',
      display: 'arXiv:2210.03556',
    }
  },
  time: { year: 2022, month: 8, day: 15 },
},
{
  title: 'Uniformly quasi-Hermitian groups are supramenable',
  author: ['Mahmud Azam', 'Ebrahim Samei'],
  where: {
    tag: WhereTag.JOURNAL,
    name: 'Canadian Mathematical Bulletin',
    volume: 65,
    number: 3, 
    pages: { from: 665, to: 673 }
  },
  time: { year: 2021, month: 7, day: 14 },
},
]

function Publications() {
  return (
  <PageDiv>
  {publications.map((pub, index) =>
    <div key={index} style={{marginBottom: '1em'}}>
    {(index + 1)}
    . {pub.author.map((auth, authInd) =>
        auth + (authInd < pub.author.length - 1 ? ' and ' : '')
      )}
    . {pub.time.year}
    . <span style={{fontStyle: 'italic'}}>{pub.title}</span>
    . {(() => {
      switch(pub.where.tag) {
      case WhereTag.JOURNAL:
        return `
          ${pub.where.name}, ${pub.where.volume}(${pub.where.number}):
          ${pub.where.pages.from} -- ${pub.where.pages.to}.
        `;
      case WhereTag.INREVIEW:
        return (
          <span>
            In review
            {pub.where.preprintURL && (
              <span>
                ; preprint: <a href={pub.where.preprintURL.path}>
                  {pub.where.preprintURL.display}
                </a>
              </span>
            )}.
          </span>
        );
      } 
      })()}
    </div>
  )}
  </PageDiv>
  );
}

export default Publications;
