
import {
  periodToString,
  Period,
} from './CVDate'

import {
  education,
  talks,
  services,
  awards,
  work,
  activities,
} from './Data'

import { FaRegFilePdf } from 'react-icons/fa'

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
  period?: Period,
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
      {period && <span className="inline-block md:w-2/5 w-full md:text-end">
        {periodToString(period)}
      </span>}
      {description &&
        <div className="md:hidden">
          <span className="italic">{description}</span>
        </div>
      }
      {children}
    </div>
  )
}

export function TalkSubEntry(props : {
  description: string,
  period: Period,
  location: string,
}) {
  const { description, period, location } = props
  return (
    <div className="m-0 p-0">
      <span className="inline-block md:w-4/5 w-full">
        <span className="italic">{description}</span>
        , <span>{location}</span>
      </span>
      {period && <span className="inline-block md:w-1/5 w-full md:text-end">
        {periodToString(period)}
      </span>}
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
    <a href="/MahmudAzam.pdf">
      <FaRegFilePdf className="relative top-1 text-[1em] mr-2"/>Download a PDF
    </a>
    <CVSection title='Education'>
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
      {talks.map((talk, index) => talk.events.length === 1
        ?
          <CVEntry
              key={index}
              title={talk.title}
              period={talk.events[0].date}
          >
            <div>
              <span className="italic">{talk.events[0].event}</span>
              , {talk.events[0].location}
            </div>
          </CVEntry>
        : <CVEntry
              key={index}
              title={talk.title}
          >
          <div className="p-0 m-0">
          {talk.events.map((e, index) =>
            <TalkSubEntry
              key={index}
              description={e.event}
              period={e.date}
              location={e.location}
            />
          )}
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

    <CVSection title='Service'>
      {services.map((service, index) =>
        <CVEntry
          key={index}
          title={service.description}
          period={service.period}
        >
        <div>
        <span className="italic">{service.event}</span>
        {service.location && <span>, {service.location}</span>}
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
