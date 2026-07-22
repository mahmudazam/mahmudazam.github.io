
const { WhereTag } = require('./where')

function orderLastName(authors) {
  return authors.map(auth => auth.split(/\s+/))
                .sort((a, b) => a[1] >= b[1])
                .map(auth => auth[0] + ' ' + auth[1])
}

const publications = [
{
  title: 'Diffeological non-Abelian Hodge theory: relative harmonic metrics and deformation theory',
  author: ['Mahmud Azam', 'Steven Rayan'],
  where: {
    tag: WhereTag.INREVIEW,
    preprintURL :{
      path: 'https://arxiv.org/abs/2607.18989',
      display: 'arXiv:2607.18989',
    },
  },
  time: { year: 2026 },
},
{
  title: 'A diffeological perspective on non-Abelian Hodge theory',
  author: ['Mahmud Azam', 'Steven Rayan'],
  where: {
    tag: WhereTag.INREVIEW,
    preprintURL :{
      path: 'https://arxiv.org/abs/2606.16772',
      display: 'arXiv:2606.16772',
    },
  },
  time: { year: 2026 },
},
{
  title: 'Moduli stacks of quiver connections and non-Abelian Hodge theory',
  author: ['Mahmud Azam', 'Steven Rayan'],
  where: {
    tag: WhereTag.INREVIEW,
    preprintURL :{
      path: 'https://arxiv.org/abs/2512.12188',
      display: 'arXiv:2512.12188',
    },
  },
  time: { year: 2025 },
},
{
  title: 'Moduli stacks of quiver bundles with applications to Higgs bundles',
  author: ['Mahmud Azam', 'Steven Rayan'],
  where: {
    tag: WhereTag.JOURNAL,
    name: 'Journal of Algebra',
    volume: 708,
    pages: { from: 333, to: 379 },
    time: { year: 2026 },
    URL: {
      path: 'https://doi.org/10.1016/j.jalgebra.2026.05.018',
      display: 'J. Alg.'
    },
    preprintURL :{
      path: 'https://arxiv.org/abs/2407.11958',
      display: 'arXiv:2407.11958',
    },
  },
  time: { year: 2026 },
},
{
  title: 'TQFTs and quantum computing',
  author: ['Mahmud Azam', 'Steven Rayan'],
  where: {
    tag: WhereTag.JOURNAL,
    name: 'Bulletin des Sciences Math\u00e9matiques',
    volume: 194,
    pages: { from : 103454 },
    time: { year: 2024 },
    URL: {
      path: 'https://doi.org/10.1016/j.bulsci.2024.103454',
      display: 'Bul. Sci. Math.'
    },
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
    pages: { from: 665, to: 673 },
    URL: {
      path: 'https://doi.org/10.4153/S0008439521000527',
      display: 'Can. Math. Bul.'
    }
  },
  time: { year: 2021, month: 7, day: 14 },
},
]

exports.publications = publications
exports.orderLastName = orderLastName
