
import {
  periodToString,
  Period,
} from './CVDate';

import {
  education,
  invitedTalks,
  awards,
  work,
  activities,
} from './Data';

// CSS
import _cvCSS from './CV.module.css';
import _basicPage from '../Common/BasicPage.module.css';
import _responsive from '../Common/Responsive.module.css';
const cvCSS = _cvCSS['main'];
const basicPageCSS = _basicPage['main'];
const showBelow768 = _responsive['show-below-768'];
const showAbove768 = _responsive['show-above-768'];
const width70_above768 = _responsive['width-70-above-768'];
const width30_above768 = _responsive['width-30-above-768'];
const width100_below768 = _responsive['width-100-below-768'];;
const textAlignRight_above768 = _responsive['text-align-right-above-768'];
// End CSS

var Latex = require('react-latex');

export function CVEntry(props : {
  title: string,
  description?: string,
  period: Period,
  children: any
}) {
  const { title, description, period, children } = props;
  return (
    <div style={{ marginTop: '0.5em' }}>
       <span className={[width70_above768, width100_below768].join(' ')}>
        <span style={{ fontWeight: 'bold' }}>{title}</span>
        {description && <span className={showAbove768}>
          {' '}(<span style={{fontStyle: 'italic'}}>{description}</span>)
        </span>}
      </span>
      <span className={[
        width30_above768,
        width100_below768,
        textAlignRight_above768
      ].join(' ')}>
        {periodToString(period)}
      </span>
      {description && <div className={showBelow768}>
        <span style={{fontStyle: 'italic'}}>{description}</span>
      </div>}
      {children}
    </div>
  );
}

function CVSection(props: {
  title: string,
  marginTop?: string | '0em',
  children: any,
}) {
  const {title, children, marginTop} = props;
  return (
    <div style={{ marginTop: marginTop }}>
      <div style={{ fontWeight: 'bold' }}>{title}</div>
      <hr style={{ marginTop: '0%' }} />
      {children}
    </div>
  );
}

function CV() {
  return (
  <div className={`${basicPageCSS} ${cvCSS}`}>
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

    <CVSection title='Invited Talks' marginTop='1.5em'>
      {invitedTalks.map((talk, index) =>
        <CVEntry
            key={index}
            title={talk.title}
            period={talk.date}
        >
          <div>
            <span style={{ fontStyle: 'italic' }}>{talk.event}</span>
            , {talk.location}
          </div>
        </CVEntry>
      )}
    </CVSection>

    <CVSection title='Awards' marginTop='1.5em'>
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
                Awarded by <span style={{ fontStyle: 'italic' }}>
                  {award.authority}
                </span> {' at '}
            </span>}
            <span style={{ fontStyle: 'italic' }}>
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

    <CVSection title='Work' marginTop='1.5em'>
      {work.map((w, index) =>
        <CVEntry
          key={index}
          title={w.position}
          description={w.description}
          period={w.period}
        >
          <div>
            <span style={{ fontStyle: 'italic' }}>{w.institution}</span>
            {w.endNote && <span>, {w.endNote}</span>}
          </div>
        </CVEntry>
      )}
    </CVSection>

    <CVSection title='Activities' marginTop='1.5em'>
      {activities.map((a, index) =>
        <CVEntry
          key={index}
          title={a.activity}
          period={a.period}
        >
          {a.where &&
          <div>
              <span style={{ fontStyle: 'italic' }}>{a.where}</span>
          </div>}
          {a.description && <div>{a.description}</div>}
        </CVEntry>
      )}
    </CVSection>

  </div>
  );
}

export default CV;
