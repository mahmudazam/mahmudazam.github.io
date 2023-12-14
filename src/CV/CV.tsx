
import BasicPage from '../Common/BasicPage';

import styled from 'styled-components';

import { periodToString, simpleDateToString } from './CVDate';

import {
  education,
  invitedTalks,
  awards,
  work,
  activities,
} from './Data';

var Latex = require('react-latex');

const LayoutSpan = styled.span<{ small: string, align?: string }>`
  @media only screen and (min-width: 768px) {
    display: inline-block;
    width: ${props => props.small};
    text-align: ${props => props.align};
  }
  @media only screen and (max-width: 768px) {
    display: block;
    width:100%;
  }
`;

const SmallScreenDiv = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const LargeScreenSpan = styled.span`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const CVDiv = styled(BasicPage)`
  @media only screen and (min-width: 768px) {
    padding-left: 25%;
    padding-right: 25%;
  }
`;

function CV() {
  return (
  <CVDiv>
  <div style={{ fontWeight: 'bold' }}>Education</div>
  <hr style={{ marginTop: '0%' }} />
  {education.map((ed, index) =>
    <div key={index} style={{ marginTop: '0.5em' }}>
      <LayoutSpan small='70%'>
        <span style={{ fontWeight: 'bold' }}>{ed.degree}</span>
        <LargeScreenSpan>
          , <span style={{fontStyle: 'italic'}}>{ed.institution}</span>
        </LargeScreenSpan>
      </LayoutSpan>
      <LayoutSpan small='30%' align='end'>
        {periodToString(ed.period)}
      </LayoutSpan> 
      <SmallScreenDiv>
        <span style={{fontStyle: 'italic'}}>{ed.institution}</span>
      </SmallScreenDiv>
      <div>Supervisor: {ed.supervisor}</div>
      <div>Thesis: <Latex>{ed.thesis}</Latex></div>
    </div>
  )}

  <div style={{ fontWeight: 'bold', marginTop: '1.5em' }}>Invited Talks</div>
  <hr style={{ marginTop: '0%' }} />
  {invitedTalks.map((talk, index) =>
    <div key={index} style={{ marginTop: '0.5em' }}>
      <LayoutSpan small='70%' style={{ fontWeight: 'bold' }}>
        {talk.title}
      </LayoutSpan>
      <LayoutSpan small='30%' align='end'>
        {simpleDateToString(talk.date)}
      </LayoutSpan>
      <div>
        <span style={{ fontStyle: 'italic' }}>{talk.event}</span>
        , {talk.location}
      </div>
    </div>
  )}

  <div style={{ fontWeight: 'bold', marginTop: '1.5em' }}>Awards</div>
  <hr style={{ marginTop: '0%' }} />
  {awards.map((award, index) =>
    <div key={index} style={{ marginTop: '0.5em' }}>
      <LayoutSpan small='70%'>
        <span style={{ fontWeight: 'bold' }}>{award.name}</span>
        {award.currency && award.value &&
          <span> ({award.currency} {award.value})</span>}
        {award.description && <span> ({award.description})</span>}
      </LayoutSpan>
      <LayoutSpan small='30%' align='end'>
        {periodToString(award.period)}
      </LayoutSpan>
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
    </div>
  )}

  <div style={{ fontWeight: 'bold', marginTop: '1.5em' }}>Work Experience</div>
  <hr style={{ marginTop: '0%' }} />
  {work.map((w, index) =>
    <div key={index} style={{ marginTop: '0.5em' }}>
      <LayoutSpan small='70%'>
        <span style={{ fontWeight: 'bold' }}>{w.position}</span>
        {w.description && <span> ({w.description})</span>}
      </LayoutSpan>
      <LayoutSpan small='30%' align='end'>
        {periodToString(w.period)}
      </LayoutSpan>
      <div>
        <span style={{ fontStyle: 'italic' }}>{w.institution}</span>
        {w.endNote && <span>, {w.endNote}</span>}
      </div>
    </div>
  )}

  <div style={{ fontWeight: 'bold', marginTop: '1.5em' }}>
    Activities
  </div>
  <hr style={{ marginTop: '0%' }} />
  {activities.map((a, index) =>
    <div key={index} style={{ marginTop: '0.5em' }}>
      <LayoutSpan small='70%'>
        <span style={{ fontWeight: 'bold' }}>{a.activity}</span>
      </LayoutSpan>
      <LayoutSpan small='30%' align='end'>
        {periodToString(a.period)}
      </LayoutSpan>
      {a.where &&
      <div>
          <span style={{ fontStyle: 'italic' }}>{a.where}</span>
      </div>}
      {a.description && <div>{a.description}</div>}
    </div>
  )}
  </CVDiv>
  );
}

export default CV;
