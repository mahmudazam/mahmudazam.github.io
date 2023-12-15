
import { Publication, WhereTag } from './Where';

export const publications : Array<Publication> = [
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

