
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
const NL1 = `${NL}[1em]`
const NLSm = `${NL}[-0.75em]`

const header = `
\\begin{center}
{\\bf\\large Mahmud Azam}${NL}
${[contacts[0], contacts[2], contacts[3]].map(c => c.text)
                                         .join('\n\\textbar\\ ')}
\\end{center}
`

const sectionHead = (title, marginTop = true) => `
${marginTop ? '\\vspace{0.75em}' : ''}
{\\noindent\\bf ${title}}${NLSm}
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
{\\bf ${title}}${desc ? ' ({\\it ' + desc + '})' : ''} &
${periodToString(period)}
\\end{tabularx}
${lines.filter(ln => ln !== undefined)
       .map(ln => ln)
       .join(NL + '\n')}
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
    return `${pub.where.name}, ${pub.where.volume}(${pub.where.number}):`
      + `${pub.where.pages.from} --- ${pub.where.pages.to}.`
  case WhereTag.INREVIEW:
    return `In review (preprint: \\href{${pub.where.preprintURL.path}}`
                                    + `{${pub.where.preprintURL.display}}).`
  }
})()}
`

const doc = `
\\documentclass[10pt]{article}

\\usepackage{enumitem}
\\usepackage{hyperref}
  \\hypersetup{
    colorlinks,
    linkcolor={red!55!black},
    urlcolor={blue},
    citecolor={green!55!black}
  }
\\usepackage{palatino}
\\usepackage[margin=0.75in]{geometry}
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
).join(NLSm + '\n')}

${sectionHead('Publications')}
\\begin{enumerate}[topsep=0pt, itemsep=0pt, leftmargin=*]
${publications.map(publicationEntry)
              .join('')}
\\end{enumerate}

${sectionHead('Talks')}
${talks.map(talk => entry(talk.title, undefined, talk.date, [
    `{\\it ${talk.event}}, ${talk.location}`
  ])
).join(NLSm + '\n')}

${sectionHead('Awards')}
${awards.map(award =>
  entry(award.name.replace('&', '\\&'),
        award.currency && award.value
          ? award.currency.replace('$', '\\$') + ' ' + award.value
          : undefined,
        award.period,
        [
          (award.authority
            ? 'Awarded by ' + award.authority + ', at '
            : '')
          + award.institution
          + ', ' + (award.endNote ? award.endNote : '')
        ])
).join(NLSm + '\n')}

${sectionHead('Work')}
${work.map(w => entry(w.position, w.description, w.period, [
    `{\\it ${w.institution}}${w.endNote ? ', ' + w.endNote : ''}`
  ])
).join(NLSm + '\n')}

${sectionHead('Activities')}
${activities.map(a => entry(a.activity, undefined, a.period, [
    a.where,
    a.description
  ])
).join(NLSm + '\n')}

\\end{small}

\\end{document}
`
fs.writeFileSync(CV_BUILD_DIR + '/' + TEX, doc)

