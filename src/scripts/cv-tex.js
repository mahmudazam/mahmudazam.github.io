
const fs = require('fs')

const {
  education,
  awards,
  talks,
  work,
  activities
} = require('../CV/data.js')

const {
  publications,
  orderLastName,
} = require('../Publications/data.js')
const { WhereTag } = require('../Publications/where')

const {
  periodToString,
} = require('../CV/cv_date.js')

const { contacts } = require('../Home/contact_data.js')

const CV_BUILD_DIR = process.argv[2]
if (!fs.existsSync(CV_BUILD_DIR)) {
  fs.mkdirSync(CV_BUILD_DIR)
}
const FNAME = 'MahmudAzam'
const TEX = FNAME + '.tex'
console.log('> CV .tex will be written at ' + CV_BUILD_DIR + '/' + TEX)

const NL = '\\\\'
const entrySep = '\n\n\\vspace{0.55em}\n\n'

const header = `
\\begin{center}
{\\bf\\large Mahmud Azam}${NL}
${[
  contacts[0],
  { text: '\\href{https://mahmudazam.github.io}{mahmudazam.github.io}' },
  contacts[3]
].map(c => c.text)
 .join('\n\\textbar\\ ')}
\\end{center}
`

const sectionHead = (title, marginTop = true) => `
${marginTop ? '\\vspace{0.55em}' : ''}
{\\noindent\\bf ${title}}${entrySep}
\\hrule
\\vspace{0.35em}
`

const entry = (title, desc, period, lines) => `
\\noindent\\begin{tabularx}{\\textwidth}{
  @{}
  >{\\hsize=0.6\\linewidth\\arraybackslash}X
  >{\\hsize=0.4\\linewidth\\raggedleft\\arraybackslash}X
  @{}
}
{\\bf ${title}}${desc ? ' ({\\it ' + desc + '})' : ''} & ${period ? periodToString(period) : ''}
\\end{tabularx}
${lines.filter(ln => ln !== undefined)
       .map(ln => ln)
       .join(NL + '\n')}
`

const entrySubList = (entries) => `
\\noindent\\begin{tabularx}{\\textwidth}{
  @{}
  >{\\hsize=0.7\\linewidth\\arraybackslash}X
  >{\\hsize=0.3\\linewidth\\raggedleft\\arraybackslash}X
  @{}
}
${entries.map((e, index) =>
  e.desc + ' & ' + periodToString(e.period)
).join('\\\\\n')
}
\\end{tabularx}
`

const publicationEntry = (pub) => `
\\item With
${orderLastName(pub.author)
  .filter(auth => auth !== 'Mahmud Azam')
  .reduce((acc, curr, index, arr) =>
  curr + (index > 0 ? (index < arr.length - 1 ? ', ' : ' and ') : '') + acc
, '')}.
${pub.time.year}.
{\\it ${pub.title}}.
${(() => {
  switch(pub.where.tag) {
  case WhereTag.JOURNAL:
    return `${pub.where.name}, ${pub.where.volume}`
      + (pub.where.number ? ('(' + pub.where.number + ')') : '') + ': page '
      + pub.where.pages.from
      + (pub.where.pages.to ? ('---' + pub.where.pages.to) : '')
      + '.'
      + (pub.where.preprintURL ? `\\\\\\href{${pub.where.preprintURL.path}}`
                                 + `{${pub.where.preprintURL.display}}`
                               : '')
  case WhereTag.INREVIEW:
    return `In review (preprint: \\href{${pub.where.preprintURL.path}}`
                                    + `{${pub.where.preprintURL.display}}).`
  }
})()}
`

const doc = `
\\documentclass[10pt]{article}

\\usepackage{amsmath}
\\usepackage{enumitem}
\\usepackage{hyperref}
  \\hypersetup{
    colorlinks,
    linkcolor={red!55!black},
    urlcolor={blue},
    citecolor={green!55!black}
  }
\\usepackage{palatino}
\\usepackage[margin=0.55in]{geometry}
\\usepackage{tabularx}
\\usepackage{xcolor}

\\begin{document}

${header}

\\begin{small}

${sectionHead('Education', false)}
${education.map(ed => entry(ed.degree, ed.institution, ed.period, [
    `Supervisor: ${ed.supervisor}`,
    `Thesis: ${ed.thesis}`
  ])
).join(entrySep)}

${sectionHead('Publications')}
\\begin{enumerate}[topsep=0pt, itemsep=0pt, leftmargin=*]
${publications.map(publicationEntry)
              .join('')}
\\end{enumerate}

${sectionHead('Talks')}
${talks.map(talk => talk.events.length === 1
  ? entry(talk.title, undefined, talk.events[0].date, [
      `{\\it ${talk.events[0].event}}, ${talk.events[0].location}`
    ])
  : entry(talk.title, undefined, undefined, [
      entrySubList(talk.events.map(e => ({
        desc: `{\\it ${e.event}}, ${e.location}`,
        period: e.date
      })))
    ])
).join(entrySep)}

${sectionHead('Awards')}
${awards.map(award =>
  entry(award.name.replace('&', '\\&'),
        award.currency && award.value
          ? award.currency.replace('$', '\\$') + ' ' + award.value
          : undefined,
        award.period,
        [
          (award.authority
            ? 'Awarded by {\\it ' + award.authority + '} at '
            : '')
          + '{\\it ' + award.institution + '}'
          + (award.endNote ? ', ' + award.endNote : '')
        ])
).join(entrySep)}

${sectionHead('Work')}
${work.map(w => entry(w.position, w.description, w.period, [
    `{\\it ${w.institution}}${w.endNote ? ', ' + w.endNote : ''}`
  ])
).join(entrySep)}

${sectionHead('Activities')}
${activities.map(a => entry(a.activity, undefined, a.period, [
    a.where,
    a.description
  ])
).join(entrySep)}

\\end{small}

\\end{document}
`
fs.writeFileSync(CV_BUILD_DIR + '/' + TEX, doc)

