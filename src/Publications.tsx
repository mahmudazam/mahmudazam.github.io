
import { PageDiv } from './App';

//var Latex = require('react-latex');

const publications = [
{
  title: 'Uniformly quasi-Hermitian groups are supramenable',
  author: ['Mahmud Azam', 'Ebrahim Samei'],
  journal: 'Canadian Mathematical Bulletin',
  time: { year: 2021, month: 7, day: 14 },
  pages: { from: 1, to: 9 }
},
{
  title: 'TQFTs and Quantum Computing',
  author: ['Mahmud Azam', 'Steven Rayan'],
  journal: 'Expecting preprint',
  time: { year: 2022, month: 8, day: 15 },
},
]

function Publications() {
  return (
  <PageDiv>
  {publications.map((pub, index) =>
    <div key={index} style={{marginBottom: '1em'}}>
    {(index + 1) + '. '}
    {pub.author.map((auth, authInd) =>
      auth + (authInd < pub.author.length - 1 ? ' and ' : '. ')
    )}
    {pub.time.year + '. '}
    {<span style={{fontStyle: 'italic'}}>{pub.title + '. '}</span>}
    {pub.journal}{pub.pages && (', ' + pub.pages.from + '--' + pub.pages.to)}.
    </div>
  )}
  </PageDiv>
  );
}

export default Publications;
