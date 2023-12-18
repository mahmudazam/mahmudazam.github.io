
import {
  periodToString,
  Period,
} from './CVDate'

import {
  education,
  talks,
  awards,
  work,
  activities,
} from './Data'

// CSS
import _basicPageCSS from '../Common/BasicPage.module.css'
import _cvPageCSS from './CV.module.css'
const basicPageCSS = _basicPageCSS['main']
const cvPageCSS = _cvPageCSS['main'] 
// End CSS

var Latex = require('react-latex')

export function CVEntry(props : {
  title: string,
  description?: string,
  period: Period,
  children: any
}) {
  const { title, description, period, children } = props
  return (
    <div className="mt-2">
      <span className="inline-block md:w-3/5 w-full">
      <span className="font-bold">{title}</span>
        {description &&
          <span className="max-sm:hidden">
            {' '}(<span className="italic">{description}</span>)
          </span>
        }
      </span>
      <span className="inline-block md:w-2/5 w-full md:text-end">
        {periodToString(period)}
      </span>
      {description &&
        <div className="md:hidden">
          <span className="italic">{description}</span>
        </div>
      }
      {children}
    </div>
  )
}

function CVSection(props: {
  title: string,
  marginTop?: string,
  children: any,
}) {
  const {title, children, marginTop} = props
  return (
    <div className={marginTop ? marginTop : "mt-4"}>
      <div className="font-bold">{title}</div>
      <hr className="mt-0" />
      {children}
    </div>
  )
}

function CV() {
  return (
  <div className={`${basicPageCSS} ${cvPageCSS}`}>
    <CVSection title='Education' marginTop="mt-0">
      {education.map((ed, index) =>
        <CVEntry
          key={index}
          title={ed.degree}
          description={ed.institution}
          period={ed.period}
        >
          <div>Supervisor: {ed.supervisor}</div>
          <div>Thesis: <Latex>{ed.thesis}</Latex></div>
        </CVEntry>
      )}
    </CVSection>

    <CVSection title='Talks'>
      {talks.map((talk, index) =>
        <CVEntry
            key={index}
            title={talk.title}
            period={talk.date}
        >
          <div>
            <span className="italic">{talk.event}</span>
            , {talk.location}
          </div>
        </CVEntry>
      )}
    </CVSection>

    <CVSection title='Awards'>
      {awards.map((award, index) =>
        <CVEntry
          key={index}
          title={award.name}
          description={
            (award.currency && award.value &&
            `${award.currency} ${award.value}`) ||
            (award.description && `${award.description}`)
          }
          period={award.period}
        >
          <div>
            {award.authority &&
            <span>
                Awarded by <span className="italic">
                  {award.authority}
                </span> {' at '}
            </span>}
            <span className="italic">
              {award.institution}
            </span>
            {award.endNote &&
            <span>
              {', ' + award.endNote}
            </span>}
          </div>
        </CVEntry>
      )}
    </CVSection>

    <CVSection title='Work'>
      {work.map((w, index) =>
        <CVEntry
          key={index}
          title={w.position}
          description={w.description}
          period={w.period}
        >
          <div>
            <span className="italic">{w.institution}</span>
            {w.endNote && <span>, {w.endNote}</span>}
          </div>
        </CVEntry>
      )}
    </CVSection>

    <CVSection title='Activities'>
      {activities.map((a, index) =>
        <CVEntry
          key={index}
          title={a.activity}
          period={a.period}
        >
          {a.where &&
          <div>
              <span className="italic">{a.where}</span>
          </div>}
          {a.description && <div>{a.description}</div>}
        </CVEntry>
      )}
    </CVSection>

  </div>
  )
}

export default CV
