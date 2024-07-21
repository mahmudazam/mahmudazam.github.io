
const { WhereTag } = require('./where')

function orderLastName(authors) {
  return authors.map(auth => auth.split(/\s+/))
                .sort((a, b) => a[1] >= b[1])
                .map(auth => auth[0] + ' ' + auth[1])
}

const publications = [
{
  title: 'Moduli stacks of quiver bundles with applications to Higgs bundles',
  author: ['Mahmud Azam', 'Steven Rayan'],
  where: {
    tag: WhereTag.INREVIEW,
    preprintURL :{
      path: 'https://arxiv.org/abs/2407.11958',
      display: 'arXiv:2407.11958',
    },
  },
  time: { year: 2024 },
},
{
  title: 'TQFTs and quantum computing',
  author: ['Mahmud Azam', 'Steven Rayan'],
  where: {
    tag: WhereTag.JOURNAL,
    name: 'Bulletin des Science Math$\\text{\\\'{e}}$matiques',
    volume: 194,
    pages: { from : 103454 },
    time: { year: 2024 },
    preprintURL: {
      path: 'https://arxiv.org/abs/2210.03556',
      display: 'arXiv:2210.03556',
    }
  },
  time: { year: 2024, month: 8, day: 15 },
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

exports.publications = publications
exports.orderLastName = orderLastName
